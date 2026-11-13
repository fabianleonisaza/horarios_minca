-- ============================================================
-- PASO 1: Eliminar lo creado anteriormente (tabla "horarios" y
-- sus políticas), para dejar el proyecto limpio antes de aplicar
-- la nueva estructura con nombres específicos de esta app.
-- Ejecuta esto primero.
-- ============================================================

drop policy if exists "Lectura publica de horarios" on horarios;
drop policy if exists "Insercion solo autenticados" on horarios;
drop policy if exists "Actualizacion solo autenticados" on horarios;
drop policy if exists "Borrado solo autenticados" on horarios;
drop table if exists horarios;

-- ============================================================
-- PASO 2: Crear la estructura nueva, con nombres propios de la
-- app de horarios, para que no se mezcle con futuras tablas de
-- otras aplicaciones que vivan en este mismo proyecto.
-- ============================================================

create extension if not exists pgcrypto;

-- Tabla con los horarios guardados (Horario 2026, Borrador, etc.)
create table if not exists tabla_horarios (
  id uuid primary key default gen_random_uuid(),
  nombre text unique not null,
  datos jsonb not null,
  actualizado_en timestamptz not null default now(),
  actualizado_por text
);

alter table tabla_horarios enable row level security;

-- Cualquiera puede LEER (el sitio público muestra el consolidado
-- sin necesidad de iniciar sesión).
create policy "Lectura publica de tabla_horarios"
  on tabla_horarios for select
  using (true);

-- ------------------------------------------------------------
-- Tabla de permisos SOLO de esta app: quién puede modificar
-- tabla_horarios. Los usuarios en sí siguen viviendo en
-- Authentication -> Users (Supabase no separa usuarios por
-- tabla), pero esta tabla funciona como una "lista blanca":
-- un usuario autenticado que NO esté aquí no podrá escribir en
-- tabla_horarios, aunque sí pueda loguearse. Cuando crees otra
-- app en este mismo proyecto, le harías su propia tabla, ej.
-- "usuarios_app2", totalmente independiente de esta.
-- ------------------------------------------------------------
create table if not exists usuarios_horarios (
  user_id uuid primary key references auth.users(id) on delete cascade,
  correo text,
  agregado_en timestamptz not null default now()
);

alter table usuarios_horarios enable row level security;

-- Un usuario autenticado puede ver únicamente su propia fila
-- (necesario para que las políticas de abajo puedan validarlo).
create policy "Cada usuario ve su propio permiso"
  on usuarios_horarios for select
  using (auth.uid() = user_id);

-- No se agregan políticas de insert/update/delete para
-- usuarios_horarios a propósito: solo tú, desde el SQL Editor
-- (o el Table Editor) de Supabase, decides quién entra aquí.

-- ------------------------------------------------------------
-- Políticas de escritura de tabla_horarios: solo si el usuario
-- autenticado aparece en usuarios_horarios.
-- ------------------------------------------------------------
create policy "Insercion solo usuarios autorizados de horarios"
  on tabla_horarios for insert
  with check (
    exists (select 1 from usuarios_horarios where user_id = auth.uid())
  );

create policy "Actualizacion solo usuarios autorizados de horarios"
  on tabla_horarios for update
  using (
    exists (select 1 from usuarios_horarios where user_id = auth.uid())
  );

create policy "Borrado solo usuarios autorizados de horarios"
  on tabla_horarios for delete
  using (
    exists (select 1 from usuarios_horarios where user_id = auth.uid())
  );

-- ============================================================
-- PASO 3: Autorizar a una persona a modificar horarios.
-- Primero créala en Authentication -> Users (correo + contraseña),
-- luego ejecuta esto reemplazando el correo:
-- ============================================================

-- insert into usuarios_horarios (user_id, correo)
-- select id, email from auth.users where email = 'correo@ejemplo.com';
