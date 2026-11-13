/* ============================================================
   CONFIGURACIÓN – Supabase (base de datos + autenticación)
   ============================================================
   1. Crea una cuenta gratuita en https://supabase.com
   2. Crea un proyecto nuevo (gratis).
   3. Ve a Project Settings -> API y copia:
        - "Project URL"        -> pégalo en SUPABASE_URL
        - "anon public" key    -> pégalo en SUPABASE_ANON_KEY
   4. Ve a SQL Editor y ejecuta el script que está en
      supabase-setup.sql (incluido junto a este archivo) para
      crear la tabla "horarios" con los permisos correctos.
   5. Ve a Authentication -> Users -> Add user, y crea ahí,
      manualmente, un usuario (correo + contraseña) por cada
      persona que deba poder editar el horario. No hay registro
      público: los usuarios solo los creas tú desde el panel.
   ------------------------------------------------------------ */

const SUPABASE_URL = "PEGA_AQUI_TU_PROJECT_URL";
const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_ANON_KEY";
