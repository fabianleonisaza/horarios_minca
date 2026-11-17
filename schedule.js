
const DIAS = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const HORAS = [1, 2, 3, 4, 5, 6];
const HORA_RANGOS = {
  1: "6:00 - 6:55",
  2: "6:55 - 7:50",
  3: "7:50 - 8:45",
  4: "9:15 - 10:10",
  5: "10:10 - 11:05",
  6: "11:05 - 12:00",
};

const SEDES = ["A", "B", "C"];
const SEDE_LABEL = { A: "Sede A", B: "Sede B", C: "Sede C" };

/* ------------------------------------------------------------
   DOCENTES – OBJETO CON INFORMACIÓN DE CADA UNO
   ------------------------------------------------------------ */

const DOCENTES_RAW = [
  { nombre: "ARCINIÉGAS MORA CARMEN ELIZABETH", dir: "9-3B", horario: { Lunes: ["A.P.", "A.P.", "9-3B", "9-2B", "8-1B", "9-1B"], Martes: ["9-1B", "9-1B", "A.P.", "8-1B", "9-3B", "A.P."], Miercoles: ["9-3B", "9-3B", "9-2B", "9-2B", "A.P.", "8-1B"], Jueves: ["A.P.", "9-2B", "9-1B", "9-1B", "A.P.", "8-1B"], Viernes: ["9-3B", "9-3B", "8-1B", "8-1B", "A.P.", "9-2B"] } },
  { nombre: "CASTELLANOS APARICIO RITA JULIA", dir: "8-1B", horario: { Lunes: ["8-1B", "8-1B", "A.P.", "9-3B", "7-1B", "A.P."], Martes: ["A.P.", "9-2B", "9-1B", "7-1B", "6-1B", "9-3B"], Miercoles: ["7-1B", "8-1B", "A.P.", "9-1B", "7-1B", "6-1B"], Jueves: ["9-2B", "A.P.", "6-1B", "A.P.", "9-3B", "A.P."], Viernes: ["A.P.", "6-1B", "9-1B", "9-2B", "9-3B", "8-1B"] } },
  { nombre: "CASTRO CONTRERAS MARÍA BELENICE", dir: "", horario: { Lunes: ["9-3B", "A.P.", "10-3A", "11-1A", "A.P.", "A.P."], Martes: ["A.P.", "11-2A", "10-2A", "11-1A", "10-3A", "10-1A"], Miercoles: ["A.P.", "10-3A", "A.P.", "10-1A", "10-2A", "11-2A"], Jueves: ["9-3B", "9-3B", "A.P.", "11-2A", "11-1A", "10-1A"], Viernes: ["10-2A", "10-2A", "11-1A", "10-3A", "11-2A", "A.P."] } },
  { nombre: "COGOLLO TORRES JOANNE", dir: "9-2B", horario: { Lunes: ["9-2B", "9-1B", "A.P.", "A.P.", "6-1B", "7-1B"], Martes: ["9-2B", "A.P.", "9-3B", "A.P.", "8-1B", "A.P."], Miercoles: ["8-1B", "9-2B", "9-1B", "A.P.", "9-3B", "9-3B"], Jueves: ["6-1B", "8-1B", "7-1B", "9-2B", "A.P.", "9-1B"], Viernes: ["8-1B", "A.P.", "6-1B", "9-1B", "7-1B", "9-3B"] } },
  { nombre: "SERRANO ANGARITA ANDREA PAOLA", dir: "6-2C", horario: { Lunes: ["8-1C", "8-2C", "A.P.", "A.P.", "6-1C", "7-2C"], Martes: ["8-1C", "7-1C", "7-1C", "6-2C", "8-2C", "A.P."], Miercoles: ["6-1C", "A.P.", "8-2C", "6-2C", "7-2C", "7-1C"], Jueves: ["7-2C", "A.P.", "8-1C", "A.P.", "8-2C", "7-1C"], Viernes: ["6-1C", "6-2C", "7-2C", "A.P.", "A.P.", "8-1C"] } },
  { nombre: "CRUZ MEJIA MARTHA ESPERANZA", dir: "", horario: { Lunes: ["A.P.", "9-3B", "9-2B", "A.P.", "9-1B", "8-1B"], Martes: ["11-2A", "10-1A", "11-1A", "10-2A", "A.P.", "10-3A"], Miercoles: ["A.P.", "A.P.", "9-3B", "8-1B", "9-1B", "9-2B"], Jueves: ["11-2A", "10-3A", "10-2A", "11-1A", "10-1A", "A.P."], Viernes: ["8-1C", "8-1C", "A.P.", "8-2C", "8-2C", "A.P."] } },
  { nombre: "GALINDO NARANJO RICARDO", dir: "10-1A", horario: { Lunes: ["11-1A", "A.P.", "11-2A", "A.P.", "10-2A", "10-1A"], Martes: ["10-3A", "A.P.", "10-1A", "A.P.", "11-2A", "11-1A"], Miercoles: ["10-3A", "A.P.", "10-2A", "11-1A", "11-2A", "10-1A"], Jueves: ["11-1A", "A.P.", "11-2A", "10-3A", "A.P.", "10-2A"], Viernes: ["7-1C", "7-2C", "A.P.", "10-2A", "10-1A", "10-3A"] } },
  { nombre: "AROCHA CARLOS ALBERTO", dir: "", horario: { Lunes: ["6-1C", "6-1C", "6-2C", "6-2C", "7-1C", "7-1C"], Martes: [null, null, null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, "6-2C", "6-1C", null, null, null], Viernes: [null, null, null, null, null, null] }, contrajornada: true, horarioTarde: { Lunes: [null, null, null, null, null, null], Martes: ["A.P.", "11-A", "11-A", "11-A", "11-A", "A.P."], Miercoles: ["A.P.", "10-A", "10-A", "10-A", "10-A", "A.P."], Jueves: ["A.P.", "11-A", "11-A", "11-A", "A.P.", null], Viernes: ["A.P.", "10-A", "10-A", "10-A", "A.P.", null] } },
  { nombre: "GELVES VÁSQUEZ JHONATHAN ISAAC", dir: "7-1C", horario: { Lunes: ["7-2C", "7-2C", "8-1C", "A.P.", "6-2C", "8-2C"], Martes: ["8-2C", "8-2C", "8-1C", "7-1C", "7-2C", "6-1C"], Miercoles: ["6-2C", "6-1C", "A.P.", "7-1C", "6-1C", "7-2C"], Jueves: ["6-1C", "A.P.", "8-2C", "7-1C", "A.P.", "8-1C"], Viernes: ["A.P.", "A.P.", "7-1C", "8-1C", "6-2C", "6-2C"] } },
  { nombre: "GÓMEZ GÓMEZ ISAÍAS", dir: "9-1B", horario: { Lunes: ["11-2A", "10-2A", "10-1A", "10-3A", "11-1A", "A.P."], Martes: ["8-1B", "A.P.", "9-2B", "9-3B", "A.P.", "9-1B"], Miercoles: ["10-2A", "11-2A", "11-1A", "10-3A", "10-1A", "A.P."], Jueves: ["7-1B", "9-1B", "A.P.", "A.P.", "9-2B", "6-1B"], Viernes: ["7-1B", "A.P.", "9-3B", "6-1B", "8-1B", "A.P."] } },
  { nombre: "GONZÁLEZ PÉREZ LYDA AMPARO", dir: "", horario: { Lunes: ["7-1B", "A.P.", "A.P.", "6-1B", "A.P.", "6-1B"], Martes: ["6-1C", "6-2C", "6-1C", "8-1C", "7-1C", "6-2C"], Miercoles: ["8-1C", "8-2C", "6-1C", "7-2C", "6-2C", "A.P."], Jueves: ["7-1C", "8-2C", "A.P.", "6-1C", "7-2C", "6-2C"], Viernes: ["A.P.", "A.P.", "A.P.", "7-1B", "6-1B", "6-1B"] } },
  { nombre: "GUERRERO GARCÍA LUIS JAVIER", dir: "", horario: { Lunes: ["8-2C", "6-2C", "6-1C", "8-1C", "A.P.", "A.P."], Martes: ["7-1B", "9-3B", "8-1B", "9-1B", "A.P.", "9-2B"], Miercoles: ["A.P.", "7-2C", "7-1C", "A.P.", "8-2C", "8-1C"], Jueves: ["9-1B", "A.P.", "9-2B", "7-1B", "8-1B", "9-3B"], Viernes: ["A.P.", "6-1C", "6-2C", "7-1C", "A.P.", "7-2C"] } },
  { nombre: "GUEVARA ORTIZ OLIVO", dir: "", horario: { Lunes: ["9-1B", "6-1B", "8-1B", "7-1B", "9-2B", "9-3B"], Martes: ["6-1B", "7-1B", null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, null, null, null, null, null], Viernes: [null, null, null, null, null, null] }, contrajornada: true, horarioTarde: { Lunes: [null, null, null, null, null, null], Martes: ["A.P.", "11-A", "11-A", "11-A", "11-A", "A.P."], Miercoles: ["A.P.", "10-A", "10-A", "10-A", "10-A", "A.P."], Jueves: ["A.P.", "11-A", "11-A", "11-A", "A.P.", null], Viernes: ["A.P.", "10-A", "10-A", "10-A", "A.P.", null] } },
  { nombre: "HERNÁNDEZ MARTÍNENEZ MARTHA CECILIA", dir: "", horario: { Lunes: ["6-2C", "7-1C", "7-1C", "7-2C", "7-2C", "6-1C"], Martes: [null, null, null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, "6-1C", "6-2C", null, null, null], Viernes: [null, null, null, null, null, null] }, contrajornada: true, horarioTarde: { Lunes: [null, null, null, null, null, null], Martes: ["A.P.", "11-A", "11-A", "11-A", "11-A", "A.P."], Miercoles: ["A.P.", "10-A", "10-A", "10-A", "10-A", "A.P."], Jueves: ["A.P.", "11-A", "11-A", "11-A", "A.P.", null], Viernes: ["A.P.", "10-A", "10-A", "10-A", "A.P.", null] } },
  { nombre: "LEAL SANJUAN MAVELIA NOHEMI", dir: "8-2C", horario: { Lunes: ["A.P.", "A.P.", "7-2C", "8-2C", "8-2C", "8-1C"], Martes: ["A.P.", "7-2C", "7-2C", "8-2C", "8-1C", "7-1C"], Miercoles: ["7-2C", "7-1C", "8-1C", "8-1C", "A.P.", "A.P."], Jueves: ["8-2C", "A.P.", "7-1C", "8-1C", "8-1C", "A.P."], Viernes: ["7-2C", "8-2C", "8-2C", "A.P.", "7-1C", "7-1C"] } },
  { nombre: "LEÓN ISAZA FABIÁN ENRIQUE", dir: "", horario: { Lunes: ["A.P.", "11-2A", "10-2A", "A.P.", "10-1A", "11-1A"], Martes: ["9-3B", "A.P.", "7-1B", "9-2B", "9-1B", "8-1B"], Miercoles: ["8-2C", "A.P.", "A.P.", "10-2A", "11-1A", "10-3A"], Jueves: ["A.P.", "7-1B", "9-3B", "8-1B", "9-1B", "9-2B"], Viernes: ["10-1A", "10-3A", "11-2A", "A.P.", "A.P.", "8-2C"] } },
  { nombre: "LOZANO GONZÁLEZ JOSÉ ERNESTO", dir: "11-2A", horario: { Lunes: ["10-2A", "10-1A", "A.P.", "11-2A", "A.P.", "10-3A"], Martes: ["10-2A", "11-1A", "11-2A", "A.P.", "10-1A", "A.P."], Miercoles: ["11-1A", "10-2A", "10-3A", "A.P.", "8-1C", "8-2C"], Jueves: ["A.P.", "10-1A", "10-3A", "A.P.", "11-2A", "11-1A"], Viernes: ["11-2A", "11-1A", "10-3A", "10-1A", "A.P.", "10-2A"] } },
  { nombre: "NAVARRO ARANA CRISTIÁN EDGARDO", dir: "6-1B", horario: { Lunes: ["10-1A", "A.P.", "9-1B", "8-1B", "A.P.", "9-2B"], Martes: ["A.P.", "6-1B", "6-1B", "A.P.", "7-1B", "6-1B"], Miercoles: ["A.P.", "6-1B", "8-1B", "6-1B", "6-1B", "7-1B"], Jueves: ["A.P.", "A.P.", "8-1B", "6-1B", "6-1B", "7-1B"], Viernes: ["6-1B", "9-2B", "9-2B", "A.P.", "9-1B", "9-1B"] } },
  { nombre: "MÁRQUEZ ORTIZ DIANA MARÍA", dir: "8-1C", horario: { Lunes: ["A.P.", "A.P.", "8-2C", "7-1C", "8-1C", "A.P."], Martes: ["7-1C", "6-1C", "8-2C", "7-2C", "A.P.", "8-1C"], Miercoles: ["7-1C", "8-1C", "6-2C", "6-1C", "A.P.", "6-2C"], Jueves: ["A.P.", "7-2C", "6-2C", "8-2C", "7-1C", "7-2C"], Viernes: ["6-2C", "A.P.", "6-1C", "7-2C", "6-1C", "A.P."] } },
  { nombre: "LUIS FELIPE MARÍN GUZMAN", dir: "7-1C", horario: { Lunes: ["A.P.", "9-2B", "6-1B", "9-1B", "9-3B", "A.P."], Martes: ["A.P.", "8-1B", "A.P.", "6-1B", "9-2B", "7-1B"], Miercoles: ["9-1B", "7-1B", "6-1B", "9-3B", "8-1B", "A.P."], Jueves: ["6-2C", "6-1B", "A.P.", "9-3B", "7-1B", "A.P."], Viernes: ["9-1B", "8-1B", "A.P.", "9-3B", "9-2B", "7-1B"] } },
  { nombre: "PINTO TOLOZA ADRIANA HUGUET", dir: "6-1C", horario: { Lunes: ["6-1B", "7-1B", "7-1B", "A.P.", "A.P.", "6-2C"], Martes: ["6-2C", "A.P.", "6-2C", "6-1C", "6-1C", "7-2C"], Miercoles: ["6-1B", "A.P.", "7-1B", "7-1B", "A.P.", "A.P."], Jueves: ["A.P.", "8-1C", "7-2C", "6-2C", "6-1C", "6-1C"], Viernes: ["A.P.", "7-1B", "7-1B", "6-2C", "8-1C", "6-1C"] } },
  { nombre: "RAMÍREZ AMOROCHO BRAYÁN SEBASTIÁN", dir: "10-2A", horario: { Lunes: ["A.P.", "10-3A", "A.P.", "A.P.", "11-2A", "10-2A"], Martes: ["11-1A", "10-3A", "A.P.", "10-1A", "A.P.", "10-2A"], Miercoles: ["11-2A", "11-1A", "10-1A", "A.P.", "9-2B", "9-1B"], Jueves: ["10-1A", "11-2A", "11-1A", "10-2A", "A.P.", "10-3A"], Viernes: ["11-1A", "11-2A", "10-2A", "A.P.", "10-3A", "10-1A"] } },
  { nombre: "RUEDA DÍAZ HÉCTOR", dir: "10-3A", horario: { Lunes: ["10-3A", "11-1A", "A.P.", "10-1A", "A.P.", "A.P."], Martes: ["A.P.", "10-2A", "A.P.", "10-3A", "11-1A", "11-2A"], Miercoles: ["9-2B", "9-1B", "A.P.", "11-2A", "A.P.", "11-1A"], Jueves: ["10-2A", "10-2A", "10-1A", "A.P.", "10-3A", "11-2A"], Viernes: ["10-3A", "10-1A", "10-1A", "11-2A", "10-2A", "11-1A"] } },
  { nombre: "SANCHEZ BECERRA LUZBELIA", dir: "11-1A", horario: { Lunes: ["A.P.", "A.P.", "11-1A", "10-2A", "10-3A", "11-2A"], Martes: ["10-1A", "A.P.", "10-3A", "11-2A", "10-2A", "A.P."], Miercoles: ["10-1A", "10-1A", "11-2A", "A.P.", "10-3A", "10-2A"], Jueves: ["10-3A", "11-1A", "A.P.", "10-1A", "10-2A", "A.P."], Viernes: ["9-2B", "9-1B", "A.P.", "11-1A", "11-1A", "11-2A"] } },
  { nombre: "ZAFRA CARRILLO MOISÉS", dir: "7-2C", horario: { Lunes: ["7-1C", "8-1C", "A.P.", "6-1C", "A.P.", "A.P."], Martes: ["7-2C", "8-1C", "A.P.", "A.P.", "6-2C", "8-2C"], Miercoles: ["A.P.", "6-2C", "7-2C", "8-2C", "7-1C", "6-1C"], Jueves: ["8-1C", "7-1C", "A.P.", "7-2C", "6-2C", "8-2C"], Viernes: ["8-2C", "7-1C", "8-1C", "6-1C", "7-2C", "A.P."] } }
];
const DOCENTES = DOCENTES_RAW;

function buscar(nombreParcial) {
  return DOCENTES.find((d) =>
    d.nombre.toLowerCase().includes(nombreParcial.toLowerCase())
  );
}

/* ------------------------------------------------------------
   FORMATO OFICIAL – encabezado institucional y plantillas
   usadas para exportar: GPS-F-05 consolidado / GPS-F-33 por docente.
   ------------------------------------------------------------ */

// "9-3B" -> "9-3 B"
function codigoEspaciado(c) {
  if (!c || c === "A.P.") return c || "";
  return c.slice(0, -1) + " " + c.slice(-1);
}

function encabezadoOficialHTML(tituloDoc, codigo) {
  return `
  <table class="oficial-header">
    <tbody>
      <tr>
        <td rowspan="4" class="oficial-logo"><img src="resources/escudo.png" width="60" /></td>
        <td rowspan="2" class="oficial-titulo-doc">${tituloDoc}</td>
        <td class="oficial-cod">CODIGO: ${codigo}</td>
      </tr>
      <tr><td class="oficial-cod">VERSION: 00</td></tr>
      <tr>
        <td rowspan="2" class="oficial-titulo-doc">PRESTACIÓN DEL SERVICIO</td>
        <td class="oficial-cod">Fecha Elaboración: 28-11-2014</td>
      </tr>
      <tr><td class="oficial-cod">Fecha Aprobación: 05-12-2014</td></tr>
    </tbody>
  </table>`;
}

// Horario individual de un docente, en el mismo formato del
// documento "HORARIO DE CLASE POR DOCENTE Y CURSO" (GPS-F-33).
function horarioDocenteOficialHTML(doc, area) {
  const filas = [1, 2, 3, "DESCANSO", 4, 5, 6];
  let filasHTML = "";
  filas.forEach((h) => {
    if (h === "DESCANSO") {
      filasHTML += `<tr><td></td><td colspan="5" class="oficial-descanso">D&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O</td></tr>`;
    } else {
      filasHTML += `<tr><td class="oficial-hora">${h}</td>`;
      DIAS.forEach((d) => {
        const c = doc.horario[d][h - 1];
        filasHTML += `<td>${c === "A.P." ? "A.P." : c ? codigoEspaciado(c) : ""}</td>`;
      });
      filasHTML += `</tr>`;
    }
  });
  return `
    ${encabezadoOficialHTML("HORARIO DE CLASE POR DOCENTE Y CURSO", "GPS-F-33")}
    <p class="oficial-linea">&nbsp;</p>
    <p class="oficial-linea"><strong>DOCENTE:</strong> ${doc.nombre.toUpperCase()}</p>
    <p class="oficial-linea"><strong>AREAS:</strong> ${area || ""}</p>
    <p class="oficial-linea">&nbsp;</p>
    <table class="oficial-tabla">
      <tbody>
        <tr><th>HORA</th><th>LUNES</th><th>MARTES</th><th>MIERCOLES</th><th>JUEVES</th><th>VIERNES</th></tr>
        ${filasHTML}
      </tbody>
    </table>
    <p class="oficial-nota">A.P. Atención a padres</p>
  `;
}

// Horario de un día/sede (usado al exportar desde Edición), en el
// formato de cuadro simple con título editable.
function horarioEdicionOficialHTML(sede, dia, titulo) {
  const grupos = gruposDeSede(sede);
  let filas = "";
  HORAS.forEach((h) => {
    filas += `<tr><td class="oficial-hora">${h}</td>`;
    grupos.forEach((g) => {
      const doc = docenteEnCelda(sede, dia, h, g);
      filas += `<td>${doc ? doc.nombre : escHtml(notaDeCelda(sede, dia, g, h))}</td>`;
    });
    filas += `</tr>`;
  });
  const tituloHTML = (titulo || "")
    .split("\n")
    .map((l) => `<p class="oficial-titulo-linea">${l}</p>`)
    .join("");
  return `
    ${tituloHTML}
    <table class="oficial-tabla">
      <tbody>
        <tr><th>GRADO<br/>/HORA</th>${grupos.map((g) => `<th>${g}</th>`).join("")}</tr>
        ${filas}
      </tbody>
    </table>
  `;
}


/* ------------------------------------------------------------
   UTILIDADES
   ------------------------------------------------------------ */

function sedeDeCodigo(codigo) {
  if (!codigo || codigo === "A.P.") return null;
  const ultima = codigo.trim().slice(-1).toUpperCase();
  return SEDES.includes(ultima) ? ultima : null;
}

function cargaEnSede(docente, sede) {
  let total = 0;
  DIAS.forEach((d) => {
    docente.horario[d].forEach((c) => {
      if (sedeDeCodigo(c) === sede) total++;
    });
  });
  return total;
}

function cargaTotalSemana(docente) {
  let total = 0;
  DIAS.forEach((d) => {
    docente.horario[d].forEach((c) => {
      if (c && c !== "A.P.") total++;
    });
  });
  return total;
}

function claseCelda(codigo) {
  const sede = sedeDeCodigo(codigo);
  if (sede === "A") return "cod-A";
  if (sede === "B") return "cod-B";
  if (sede === "C") return "cod-C";
  if (codigo === "A.P.") return "cod-ap";
  if (codigo === "R.A.") return "cod-ap";
  return "cod-vacio";
}

function textoCelda(codigo) {
  return codigo ? codigo : "—";
}

/* ------------------------------------------------------------
   RENDER: Vista Consolidado
   ------------------------------------------------------------ */

// Las personas temporales sin clases asignadas no aparecen en el consolidado
function visibleEnConsolidado(d) {
  return !d.temporal || cargaTotalSemana(d) > 0;
}

function renderConsolidado() {
  const cont = document.getElementById("cont-consolidado");
  let html = `<div class="tabla-wrap">
    <button class="btn-export" onclick="abrirExport('consolidado')">⬇ Exportar</button>
    <table class="tabla-horario">
      <thead>
        <tr>
          <th rowspan="2">Dir.</th>
          <th rowspan="2">Docente</th>`;
  DIAS.forEach((d) => (html += `<th colspan="6">${d}</th>`));
  html += `</tr><tr>`;
  DIAS.forEach(() => HORAS.forEach((h) => (html += `<th>${h}</th>`)));
  html += `</tr></thead><tbody>`;

  DOCENTES.filter(visibleEnConsolidado).forEach((doc, i) => {
    html += `<tr class="${i % 2 === 0 ? "fila-blanca" : "fila-gris"}">`;
    html += `<td class="col-dir">${doc.dir || ""}</td>`;
    html += `<td class="col-nombre col-nombre-click" onclick="abrirModalOficial('${doc.nombre.replace(/'/g, "\\'")}')" title="Clic para ver su horario individual">${doc.nombre}${doc.contrajornada ? " <span class='tag-cj'>CJ</span>" : ""}${doc.temporal ? " <span class='tag-temp'>TEMP</span>" : ""}</td>`;
    DIAS.forEach((d) => {
      doc.horario[d].forEach((c) => {
        html += `<td class="${claseCelda(c)}">${textoCelda(c)}</td>`;
      });
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div>`;
  cont.innerHTML = html;
}

/* ------------------------------------------------------------
   RENDER: Vista por Sede (ordenada por carga descendente)
   ------------------------------------------------------------ */

function renderSede(sede) {
  const cont = document.getElementById("cont-sede-" + sede);
  const docentesSede = DOCENTES.filter((d) => cargaEnSede(d, sede) > 0).sort(
    (a, b) => cargaEnSede(b, sede) - cargaEnSede(a, sede)
  );

  let html = `<div class="tabla-wrap">
    <button class="btn-export" onclick="abrirExport('sede-${sede}')">⬇ Exportar</button>
    <p class="nota-sede">Docentes con carga en ${SEDE_LABEL[sede]}, ordenados de mayor a menor número de horas en esta sede.</p>
    <table class="tabla-horario">
      <thead><tr>
        <th rowspan="2">Docente</th>
        <th rowspan="2">Horas en ${sede}</th>`;
  DIAS.forEach((d) => (html += `<th colspan="6">${d}</th>`));
  html += `</tr><tr>`;
  DIAS.forEach(() => HORAS.forEach((h) => (html += `<th>${h}</th>`)));
  html += `</tr></thead><tbody>`;

  docentesSede.forEach((doc, i) => {
    html += `<tr class="${i % 2 === 0 ? "fila-blanca" : "fila-gris"}">`;
    html += `<td class="col-nombre col-nombre-click" onclick="abrirModalOficial('${doc.nombre.replace(/'/g, "\\'")}')" title="Clic para ver su horario individual">${doc.nombre}${doc.temporal ? " <span class='tag-temp'>TEMP</span>" : ""}</td>`;
    html += `<td class="col-carga">${cargaEnSede(doc, sede)}</td>`;
    DIAS.forEach((d) => {
      doc.horario[d].forEach((c) => {
        const enEstaSede = sedeDeCodigo(c) === sede;
        html += `<td class="${enEstaSede ? claseCelda(c) : "cod-otra-sede"}">${
          enEstaSede ? textoCelda(c) : "·"
        }</td>`;
      });
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div>`;
  cont.innerHTML = html;
}

/* ------------------------------------------------------------
   EDICIÓN – grilla día/sede, arrastrar y soltar
   ------------------------------------------------------------ */

let edicionSede = "B";
let edicionDia = "Miercoles";
let docenteSeleccionado = null; // nombre del docente cuyas clases están resaltadas
let ultimoAjuste = null; // instantánea del día antes del último "Ajustar" (para deshacer)
let notasSinAsignar = {}; // "sede|dia|grupo|hora" -> mensaje que se muestra/exporta en bloques sin asignar
let notaContexto = null; // { g, h } de la celda que se está editando (null = todos los sin asignar)
window.__arrastre = null; // { nombre, hora } mientras se arrastra un bloque

const DIA_LABEL = { Miercoles: "Miércoles" };
function etiquetaDia(d) {
  return DIA_LABEL[d] || d;
}

// Escapa comillas para usar un nombre dentro de un onclick="..."
function esc(texto) {
  return String(texto).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function escHtml(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function claveNota(sede, dia, g, h) {
  return `${sede}|${dia}|${g}|${h}`;
}

// Mensaje de un bloque sin asignar (solo aplica mientras la celda siga vacía)
function notaDeCelda(sede, dia, g, h) {
  if (docenteEnCelda(sede, dia, h, g)) return "";
  return notasSinAsignar[claveNota(sede, dia, g, h)] || "";
}

// Borra los mensajes de celdas que ya tienen docente
function depurarNotas(sede, dia) {
  const pref = `${sede}|${dia}|`;
  Object.keys(notasSinAsignar).forEach((k) => {
    if (!k.startsWith(pref)) return;
    const partes = k.split("|");
    if (docenteEnCelda(sede, dia, Number(partes[3]), partes[2])) delete notasSinAsignar[k];
  });
}

function celdasSinAsignar(sede, dia) {
  const out = [];
  gruposDeSede(sede).forEach((g) =>
    HORAS.forEach((h) => {
      if (!docenteEnCelda(sede, dia, h, g)) out.push({ g, h });
    })
  );
  return out;
}

// Una hora está "libre" para el docente si es A.P. o no tiene dato
function esLibre(c) {
  return c === null || c === undefined || c === "" || c === "A.P.";
}

function gruposDeSede(sede) {
  const set = new Set();
  DOCENTES.forEach((d) =>
    DIAS.forEach((di) =>
      d.horario[di].forEach((c) => {
        if (sedeDeCodigo(c) === sede) set.add(c);
      })
    )
  );
  return Array.from(set).sort();
}

function docenteEnCelda(sede, dia, hora, grupo) {
  return DOCENTES.find((d) => d.horario[dia][hora - 1] === grupo);
}

function docentesDisponibles(dia, hora, sedeExcluir) {
  // Docentes que en ese día/hora están en A.P. o sin dato (candidatos a cubrir)
  return DOCENTES.filter(
    (d) => esLibre(d.horario[dia][hora - 1]) && (!d.temporal || d.temporalDia === dia)
  );
}

function permanenciaDia(doc, dia) {
  return doc.horario[dia].filter((c) => c && c !== "").length; // incluye A.P.
}

function horasDocenteEnSede(doc, sede, dia) {
  return doc.horario[dia].filter((c) => sedeDeCodigo(c) === sede).length;
}

// Docentes que trabajan (tienen clase) en la sede ese día, con más horas primero
function docentesDelDia(sede, dia) {
  const todos = DOCENTES.map((d) => ({ doc: d, horas: horasDocenteEnSede(d, sede, dia) }));
  const regulares = todos
    .filter((x) => !x.doc.temporal && x.horas > 0)
    .sort((a, b) => b.horas - a.horas || a.doc.nombre.localeCompare(b.doc.nombre, "es"));
  // Las personas agregadas con "+" van abajo, en el orden en que se agregaron,
  // aunque todavía no tengan grupos asignados.
  const temporales = todos.filter(
    (x) => x.doc.temporal && x.doc.temporalDia === dia && (x.doc.temporalSede === sede || x.horas > 0)
  );
  return regulares.concat(temporales);
}

/* ---------- Avisos (en vez de alert) ---------- */

let __toastTimer = null;
function mostrarAviso(msg, tipo) {
  const t = document.getElementById("toast");
  if (!t) {
    alert(msg);
    return;
  }
  t.textContent = msg;
  t.className = "toast visible " + (tipo || "ok");
  clearTimeout(__toastTimer);
  __toastTimer = setTimeout(() => t.classList.remove("visible"), 4500);
}

/* ---------- Selección / resaltado ---------- */

// Clic en un bloque del horario: resalta todos los bloques del mismo docente
function seleccionarDocente(nombre) {
  docenteSeleccionado = docenteSeleccionado === nombre ? null : nombre;
  renderEdicion();
}

// Clic en la lista de docentes: resalta sus bloques y abre su modal
function clicDocenteLista(nombre) {
  docenteSeleccionado = nombre;
  renderEdicion();
  abrirModalDocente(nombre);
}

/* ---------- Render ---------- */

function renderListaDocentes() {
  const cont = document.getElementById("lista-docentes-dia");
  if (!cont) return;
  const lista = docentesDelDia(edicionSede, edicionDia);
  let html = `<h4>Docentes del día <span class="contador">${lista.length}</span></h4>
    <p class="ayuda">${SEDE_LABEL[edicionSede]} · ${etiquetaDia(edicionDia)}<br>Arrastra un nombre a una celda para asignarle ese grupo.</p>`;
  if (lista.length === 0) {
    html += `<p class="ayuda">Nadie tiene clases en esta sede este día.</p>`;
  }
  lista.forEach(({ doc, horas }) => {
    const activo = docenteSeleccionado === doc.nombre ? " activo" : "";
    const temporal = doc.temporal ? " temporal" : "";
    html += `<div class="item-docente${activo}${temporal}" role="button" tabindex="0" draggable="true"
        ondragstart="arrastrarDocenteLista(event,'${esc(doc.nombre)}')" ondragend="finArrastre()"
        onclick="clicDocenteLista('${esc(doc.nombre)}')"
        onkeydown="if(event.key==='Enter'){clicDocenteLista('${esc(doc.nombre)}')}"
        title="Clic: resaltar sus clases y ver su horario">
      <span class="item-nombre">${doc.nombre}${doc.temporal ? ' <span class="tag-temp">Temporal</span>' : ""}</span>
      <span class="item-horas">${horas} h</span>
      ${
        doc.temporal
          ? `<button type="button" class="btn-quitar-temp" onclick="event.stopPropagation(); quitarDocenteTemporal('${esc(doc.nombre)}')" title="Quitar de la lista">✕</button>`
          : ""
      }
    </div>`;
  });
  cont.innerHTML = html;
}

// Encabezado de cada grupo; si tiene bloques "sin asignar" muestra el botón Ajustar
function encabezadoGrupo(g) {
  const hayVacios = HORAS.some((h) => !docenteEnCelda(edicionSede, edicionDia, h, g));
  const boton = hayVacios
    ? `<button type="button" class="btn-ajustar" onclick="ajustarHorarioDia()" title="Reorganiza el día: los bloques sin asignar pasan a las primeras horas de cada grupo">Ajustar</button>`
    : "";
  return `<th>${boton}<div class="th-grupo">${g}</div></th>`;
}

function renderEdicion() {
  document.querySelectorAll(".sede-btn-edicion").forEach((b) =>
    b.classList.toggle("activo", b.dataset.sede === edicionSede)
  );
  document.querySelectorAll(".dia-btn-edicion").forEach((b) =>
    b.classList.toggle("activo", b.dataset.dia === edicionDia)
  );

  const grupos = gruposDeSede(edicionSede);
  const cont = document.getElementById("grilla-edicion");
  depurarNotas(edicionSede, edicionDia);
  const btnNotas = document.getElementById("btn-nota-todos-barra");
  if (btnNotas) btnNotas.style.display = celdasSinAsignar(edicionSede, edicionDia).length ? "inline-block" : "none";
  const btnDeshacer = document.getElementById("btn-deshacer-ajuste");
  if (btnDeshacer) {
    const visible = ultimoAjuste && ultimoAjuste.sede === edicionSede && ultimoAjuste.dia === edicionDia;
    btnDeshacer.style.display = visible ? "inline-block" : "none";
  }

  let novedad = "";
  if (window.NOVEDADES && window.NOVEDADES[edicionSede] && window.NOVEDADES[edicionSede][edicionDia]) {
    novedad = `<div class="novedad">⚠ ${window.NOVEDADES[edicionSede][edicionDia]}</div>`;
  }

  let html = novedad + `<table class="tabla-horario tabla-edicion">
    <thead><tr><th>Hora</th>${grupos.map((g) => encabezadoGrupo(g)).join("")}</tr></thead><tbody>`;

  HORAS.forEach((h) => {
    html += `<tr><td class="col-hora">${h}<br><small>${HORA_RANGOS[h]}</small></td>`;
    grupos.forEach((g) => {
      const doc = docenteEnCelda(edicionSede, edicionDia, h, g);
      html += `<td class="celda-edicion ${claseCelda(g)}"
                    ondragover="sobreCelda(event,'${g}',${h})"
                    ondragleave="salirCelda(event)"
                    ondrop="soltarDocente(event,'${g}',${h})">`;
      if (doc) {
        const clases = ["chip-docente"];
        if (docenteSeleccionado === doc.nombre) clases.push("chip-resaltado");
        else if (docenteSeleccionado) clases.push("chip-opaco");
        html += `<div class="${clases.join(" ")}" draggable="true"
                      ondragstart="arrastrarDocente(event,'${esc(doc.nombre)}',${h})"
                      ondragend="finArrastre()"
                      onclick="seleccionarDocente('${esc(doc.nombre)}')"
                      title="Clic: resaltar todas sus clases · Arrastra para moverla a otro grupo u hora">
                    <span class="chip-texto">${doc.nombre}</span>
                    <button class="btn-mini" onclick="event.stopPropagation(); desactivarDocente('${esc(doc.nombre)}',${h})" title="Marcar ausente">✕</button>
                  </div>`;
      } else {
        const nota = notaDeCelda(edicionSede, edicionDia, g, h);
        html += nota
          ? `<span class="celda-nota" onclick="abrirModalNotaVacio('${g}',${h})" title="Clic para editar el mensaje">${escHtml(nota)}</span>`
          : `<span class="celda-libre" onclick="abrirModalNotaVacio('${g}',${h})" title="Clic para escribir un mensaje en este bloque">Sin asignar</span>`;
      }
      html += `</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table>`;

  cont.innerHTML = html;
  renderListaDocentes();
  renderDisponibles();
}

/* ---------- Mover bloques (arrastrar y soltar) ---------- */

// Valida un movimiento sin aplicarlo. Devuelve { ok, msg, silencioso, aplicar }.
//  - No se puede mover a un grupo que ya tiene a otro docente a esa hora.
//  - Si cambia de hora, el docente debe estar libre (A.P.) a la hora de destino.
//  - Al cambiar de hora, la hora de origen del docente queda como A.P.
//    (así nunca se supera la permanencia diaria de 6 horas).
function evaluarMovimiento(nombre, horaOrigen, grupoDestino, horaDestino) {
  const doc = DOCENTES.find((d) => d.nombre === nombre);
  if (!doc) return { ok: false, msg: "Docente no encontrado." };
  const dia = edicionDia;

  // Arrastrado desde la lista de docentes (sin hora de origen): solo asignar
  if (horaOrigen === null) {
    const slot = doc.horario[dia][horaDestino - 1];
    if (slot === grupoDestino) return { ok: false, silencioso: true, msg: "" };
    const ocupanteLista = docenteEnCelda(edicionSede, dia, horaDestino, grupoDestino);
    if (ocupanteLista && ocupanteLista !== doc) {
      return {
        ok: false,
        msg: `${codigoEspaciado(grupoDestino)} ya tiene clase con ${ocupanteLista.nombre} a la hora ${horaDestino}.`,
      };
    }
    if (!esLibre(slot)) {
      return {
        ok: false,
        msg: `${doc.nombre} ya está dando ${
          slot === "R.A." ? "reunión de área" : "clase en " + codigoEspaciado(slot)
        } a la hora ${horaDestino}.`,
      };
    }
    return {
      ok: true,
      aplicar: () => {
        doc.horario[dia][horaDestino - 1] = grupoDestino;
      },
    };
  }

  const origen = doc.horario[dia][horaOrigen - 1];
  const destinoSlot = doc.horario[dia][horaDestino - 1];
  const esBloqueSede = sedeDeCodigo(origen) === edicionSede;

  if (horaOrigen === horaDestino && origen === grupoDestino) {
    return { ok: false, silencioso: true, msg: "" };
  }
  if (!esBloqueSede && !esLibre(origen)) {
    return {
      ok: false,
      msg: `${doc.nombre} ya está ocupado a la hora ${horaOrigen} (${origen === "R.A." ? "reunión de área" : "clase en " + codigoEspaciado(origen)}).`,
    };
  }

  const ocupante = docenteEnCelda(edicionSede, dia, horaDestino, grupoDestino);
  if (ocupante && ocupante !== doc) {
    return {
      ok: false,
      msg: `${codigoEspaciado(grupoDestino)} ya tiene clase con ${ocupante.nombre} a la hora ${horaDestino}.`,
    };
  }

  if (horaOrigen === horaDestino) {
    return {
      ok: true,
      aplicar: () => {
        doc.horario[dia][horaDestino - 1] = grupoDestino;
      },
    };
  }

  if (!esLibre(destinoSlot)) {
    return {
      ok: false,
      msg: `${doc.nombre} ya está dando ${
        destinoSlot === "R.A." ? "reunión de área" : "clase en " + codigoEspaciado(destinoSlot)
      } a la hora ${horaDestino}.`,
    };
  }
  return {
    ok: true,
    aplicar: () => {
      doc.horario[dia][horaDestino - 1] = grupoDestino;
      if (esBloqueSede) doc.horario[dia][horaOrigen - 1] = "A.P.";
    },
  };
}

function arrastrarDocente(ev, nombre, hora) {
  window.__arrastre = { nombre, hora };
  ev.dataTransfer.setData("text/plain", nombre);
  ev.dataTransfer.effectAllowed = "move";
}

function arrastrarDocenteLista(ev, nombre) {
  window.__arrastre = { nombre, hora: null };
  ev.dataTransfer.setData("text/plain", nombre);
  ev.dataTransfer.effectAllowed = "move";
}

function finArrastre() {
  window.__arrastre = null;
  document.querySelectorAll(".drop-ok, .drop-no").forEach((el) => el.classList.remove("drop-ok", "drop-no"));
}

// Al pasar sobre una celda: verde si el movimiento es válido, rojo si no
function sobreCelda(ev, grupo, hora) {
  ev.preventDefault();
  const a = window.__arrastre;
  if (!a) return;
  const r = evaluarMovimiento(a.nombre, a.hora, grupo, hora);
  const td = ev.currentTarget;
  td.classList.toggle("drop-ok", r.ok);
  td.classList.toggle("drop-no", !r.ok && !r.silencioso);
}

function salirCelda(ev) {
  if (ev.relatedTarget && ev.currentTarget.contains(ev.relatedTarget)) return;
  ev.currentTarget.classList.remove("drop-ok", "drop-no");
}

function soltarDocente(ev, grupoDestino, horaDestino) {
  ev.preventDefault();
  ev.currentTarget.classList.remove("drop-ok", "drop-no");
  const a = window.__arrastre;
  window.__arrastre = null;
  if (!a) return;
  if (!requiereSesion()) return;
  const r = evaluarMovimiento(a.nombre, a.hora, grupoDestino, horaDestino);
  if (r.silencioso) return;
  if (!r.ok) {
    mostrarAviso(r.msg, "error");
    return;
  }
  r.aplicar();
  ultimoAjuste = null;
  docenteSeleccionado = a.nombre;
  mostrarAviso(`${a.nombre} → ${codigoEspaciado(grupoDestino)}, hora ${horaDestino}.`, "ok");
  renderTodo();
}

function desactivarDocente(nombre, hora) {
  if (!requiereSesion()) return;
  const doc = buscar(nombre);
  if (!doc) return;
  if (confirm(`¿Marcar a ${doc.nombre} como ausente en la hora ${hora} del ${etiquetaDia(edicionDia)}?`)) {
    doc.horario[edicionDia][hora - 1] = "A.P.";
    ultimoAjuste = null;
    renderTodo();
  }
}

function renderDisponibles() {
  const cont = document.getElementById("panel-disponibles");
  let html = `<h4>Docentes libres por hora (para reasignar)</h4>`;
  HORAS.forEach((h) => {
    const libres = docentesDisponibles(edicionDia, h, edicionSede);
    if (libres.length === 0) return;
    html += `<div class="bloque-hora"><strong>Hora ${h}</strong><ul>`;
    libres.forEach((d) => {
      html += `<li>
        <span class="chip-docente chip-disponible" draggable="true"
              ondragstart="arrastrarDocente(event,'${esc(d.nombre)}',${h})"
              ondragend="finArrastre()"
              onclick="clicDocenteLista('${esc(d.nombre)}')"
              title="Clic para ver su horario completo · arrastra a una celda vacía para asignarlo">
          ${d.nombre} <small>(${permanenciaDia(d, edicionDia)}h hoy)</small>
        </span>
      </li>`;
    });
    html += `</ul></div>`;
  });
  html += `<p class="ayuda">Arrastra un docente libre a una celda "Sin asignar" de su misma hora (o de otra hora en que también esté libre).</p>`;
  cont.innerHTML = html;
}

/* ------------------------------------------------------------
   MODAL DE DOCENTE – ver horario completo y ubicarlo
   en el día/sede que se está editando
   (se abre desde la lista "Docentes del día")
   ------------------------------------------------------------ */

function abrirModalDocente(nombre) {
  const doc = buscar(nombre);
  if (!doc) return;
  window.__docenteModal = doc.nombre;
  renderModalDocente();
  document.getElementById("modal-docente").classList.add("activo");
}

function cerrarModalDocente() {
  document.getElementById("modal-docente").classList.remove("activo");
}

function renderModalDocente() {
  const doc = buscar(window.__docenteModal);
  if (!doc) return;
  const cont = document.getElementById("modal-docente-contenido");
  const grupos = gruposDeSede(edicionSede);

  let html = `<h3>${doc.nombre}</h3>`;
  if (doc.dir) html += `<p class="modal-dir">Director(a) de grupo: <strong>${doc.dir}</strong></p>`;
  if (doc.temporal) {
    html += `<p class="modal-dir">Persona agregada solo para ${etiquetaDia(doc.temporalDia)} · ${SEDE_LABEL[doc.temporalSede]} (temporal).</p>`;
  }
  html += `<p class="modal-carga">Carga semanal jornada normal: <strong>${cargaTotalSemana(doc)} horas</strong>${
    doc.contrajornada ? " · tiene además contrajornada (tarde, Media Técnica)" : ""
  }</p>`;

  html += `<p class="modal-subtitulo">Horario semanal completo</p>
    <div class="scroll-x"><table class="tabla-horario tabla-modal"><thead><tr><th>Hora</th>${DIAS.map(
      (d) => `<th>${etiquetaDia(d)}</th>`
    ).join("")}</tr></thead><tbody>`;
  HORAS.forEach((h) => {
    html += `<tr><td class="col-hora">${h}</td>`;
    DIAS.forEach((d) => {
      const c = doc.horario[d][h - 1];
      const esDiaSede = d === edicionDia;
      html += `<td class="${claseCelda(c)}${esDiaSede ? " celda-destacada" : ""}">${textoCelda(c)}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;

  html += `<p class="modal-subtitulo">Ubicar en ${SEDE_LABEL[edicionSede]} · ${etiquetaDia(edicionDia)}</p>
    <div class="scroll-x"><table class="tabla-asignar"><thead><tr><th>Hora</th><th>Actualmente</th><th>Asignar a</th><th></th></tr></thead><tbody>`;
  HORAS.forEach((h) => {
    const actual = doc.horario[edicionDia][h - 1];
    const claseSede = sedeDeCodigo(actual) === edicionSede;
    const bloqueada = !claseSede && !esLibre(actual); // clase en otra sede o reunión de área
    const motivo = bloqueada
      ? actual === "R.A."
        ? "Reunión de área"
        : `Da clase en ${codigoEspaciado(actual)}`
      : "";
    const opciones = grupos
      .map((g) => {
        const ocupante = docenteEnCelda(edicionSede, edicionDia, h, g);
        const ocupado = ocupante && ocupante !== doc;
        return `<option value="${g}" ${actual === g ? "selected" : ""} ${ocupado ? "disabled" : ""}>${g}${
          ocupado ? " (ocupado)" : ""
        }</option>`;
      })
      .join("");
    html += `<tr>
      <td>${h}<br><small>${HORA_RANGOS[h]}</small></td>
      <td class="${claseCelda(actual)}">${textoCelda(actual)}</td>
      <td>${
        bloqueada
          ? `<small class="ayuda">${motivo}</small>`
          : `<select id="sel-asignar-${h}">
               <option value="" ${claseSede ? "" : "selected"}>A.P. / Libre</option>
               ${opciones}
             </select>`
      }</td>
      <td>${bloqueada ? "" : `<button class="btn-mini-aplicar" onclick="aplicarAsignacionModal(${h})">Aplicar</button>`}</td>
    </tr>`;
  });
  html += `</tbody></table></div>
    <p class="ayuda">Los grupos "ocupados" ya tienen otro docente a esa hora. Si el docente ya da clase en otra sede o tiene reunión de área, esa hora no se puede modificar desde aquí.</p>`;

  cont.innerHTML = html;
}

function aplicarAsignacionModal(hora) {
  if (!requiereSesion()) return;
  const doc = buscar(window.__docenteModal);
  if (!doc) return;
  const valor = document.getElementById("sel-asignar-" + hora).value;
  const actual = doc.horario[edicionDia][hora - 1];

  if (valor === "") {
    if (sedeDeCodigo(actual) === edicionSede) {
      doc.horario[edicionDia][hora - 1] = "A.P.";
      ultimoAjuste = null;
      mostrarAviso(`${doc.nombre} queda libre (A.P.) a la hora ${hora}.`, "ok");
    }
  } else {
    const r = evaluarMovimiento(doc.nombre, hora, valor, hora);
    if (r.silencioso) return;
    if (!r.ok) {
      mostrarAviso(r.msg, "error");
      return;
    }
    r.aplicar();
    ultimoAjuste = null;
    mostrarAviso(`${doc.nombre} → ${codigoEspaciado(valor)}, hora ${hora}.`, "ok");
  }
  docenteSeleccionado = doc.nombre;
  renderModalDocente();
  renderTodo();
}

/* ------------------------------------------------------------
   PERSONA TEMPORAL – docente o profesional que participa solo
   en un día/sede (actividad específica, reemplazo, etc.)
   ------------------------------------------------------------ */

function abrirModalNuevoDocente() {
  if (!requiereSesion()) return;
  document.getElementById("input-nuevo-docente").value = "";
  document.getElementById("nuevo-docente-error").textContent = "";
  document.getElementById("nuevo-docente-contexto").textContent =
    `Se agregará para ${SEDE_LABEL[edicionSede]} · ${etiquetaDia(edicionDia)}.`;
  document.getElementById("modal-nuevo-docente").classList.add("activo");
  setTimeout(() => document.getElementById("input-nuevo-docente").focus(), 50);
}

function cerrarModalNuevoDocente() {
  document.getElementById("modal-nuevo-docente").classList.remove("activo");
}

function confirmarNuevoDocente() {
  if (!requiereSesion()) return;
  const errorEl = document.getElementById("nuevo-docente-error");
  const nombre = document
    .getElementById("input-nuevo-docente")
    .value.replace(/\s+/g, " ")
    .trim()
    .toLocaleUpperCase("es");
  if (!nombre) {
    errorEl.textContent = "Escribe el nombre del docente o profesional.";
    return;
  }
  if (DOCENTES.some((d) => d.nombre.toLocaleUpperCase("es") === nombre)) {
    errorEl.textContent = "Ya existe una persona con ese nombre.";
    return;
  }
  const horario = {};
  DIAS.forEach((d) => (horario[d] = [null, null, null, null, null, null]));
  DOCENTES.push({
    nombre,
    dir: "",
    horario,
    temporal: true,
    temporalDia: edicionDia,
    temporalSede: edicionSede,
  });
  cerrarModalNuevoDocente();
  mostrarAviso(`${nombre} agregado/a. Haz clic en su nombre para asignarle grupos.`, "ok");
  renderTodo();
  const lista = document.getElementById("lista-docentes-dia");
  if (lista) lista.scrollTop = lista.scrollHeight;
}

function quitarDocenteTemporal(nombre) {
  if (!requiereSesion()) return;
  const i = DOCENTES.findIndex((d) => d.nombre === nombre && d.temporal);
  if (i < 0) return;
  const d = DOCENTES[i];
  const clases = cargaTotalSemana(d);
  const aviso = clases ? ` Sus ${clases} clase(s) asignadas quedarán "Sin asignar".` : "";
  if (!confirm(`¿Quitar a ${d.nombre} de la lista?${aviso}`)) return;
  DOCENTES.splice(i, 1);
  if (docenteSeleccionado === nombre) docenteSeleccionado = null;
  ultimoAjuste = null;
  renderTodo();
}

/* ------------------------------------------------------------
   AJUSTAR – reorganiza el día de la sede para que los bloques
   "sin asignar" queden SIEMPRE en las primeras horas de cada grupo
   (nunca entre clases ni al final), sin cruzar docentes.
   ------------------------------------------------------------ */

// Calcula (sin aplicar) un horario del día donde cada grupo tiene sus clases
// en las últimas horas. Cada grupo conserva sus mismas clases (mismos
// docentes y cantidad de horas); solo cambian de hora. Restricciones:
//  - un docente nunca queda en dos grupos a la misma hora;
//  - las horas donde el docente ya tiene un compromiso que no se mueve
//    (clase en otra sede, reunión de área) no se tocan;
//  - se prefiere dejar cada clase donde ya está, para mover lo mínimo.
function calcularAjuste(sede, dia) {
  const grupos = gruposDeSede(sede);
  const gset = new Set(grupos);
  const lecciones = {}; // grupo -> Map(docente -> cantidad de horas)
  const actual = {}; // grupo -> { hora: docente } (para preferir lo existente)
  const fijo = new Map(); // docente -> Set(horas con compromiso fijo)
  grupos.forEach((g) => {
    lecciones[g] = new Map();
    actual[g] = {};
  });

  DOCENTES.forEach((d) => {
    d.horario[dia].forEach((c, i) => {
      const h = i + 1;
      if (gset.has(c)) {
        lecciones[c].set(d, (lecciones[c].get(d) || 0) + 1);
        if (!actual[c][h]) actual[c][h] = d;
      } else if (!esLibre(c)) {
        if (!fijo.has(d)) fijo.set(d, new Set());
        fijo.get(d).add(h);
      }
    });
  });

  const n = {}; // grupo -> cantidad de clases del día
  for (const g of grupos) {
    n[g] = 0;
    lecciones[g].forEach((c) => (n[g] += c));
    if (n[g] > HORAS.length) {
      return {
        ok: false,
        msg: `El grupo ${g} tiene más clases que horas (hay docentes cruzados a la misma hora). Corrige ese cruce primero.`,
      };
    }
  }

  // ¿Ya está todo en orden? (sin asignar solo al comienzo de cada grupo)
  const yaOrdenado = grupos.every((g) => {
    const horasConClase = HORAS.filter((h) => actual[g][h]);
    return (
      horasConClase.length === n[g] &&
      horasConClase.every((h, i) => h === HORAS.length - n[g] + 1 + i)
    );
  });
  if (yaOrdenado) return { ok: true, yaOrdenado: true, cambios: 0 };

  // Búsqueda: llenar cada celda (grupo, hora) de las últimas horas con un docente
  const restante = {};
  grupos.forEach((g) => (restante[g] = new Map(lecciones[g])));
  const usado = {};
  HORAS.forEach((h) => (usado[h] = new Set()));
  const asign = new Map();
  const pendientes = new Set();
  grupos.forEach((g) => {
    for (let h = HORAS.length - n[g] + 1; h <= HORAS.length; h++) pendientes.add({ g, h });
  });
  const docentesConClases = new Set();
  grupos.forEach((g) => lecciones[g].forEach((_, d) => docentesConClases.add(d)));

  const ocupadoFijo = (t, h) => fijo.has(t) && fijo.get(t).has(h);
  const candidatosDe = (cell) => {
    const lista = [];
    restante[cell.g].forEach((r, t) => {
      if (r > 0 && !usado[cell.h].has(t) && !ocupadoFijo(t, cell.h)) lista.push(t);
    });
    const pref = actual[cell.g][cell.h];
    lista.sort((a, b) => (b === pref) - (a === pref));
    return lista;
  };

  // Búsqueda con "ramificar y podar": encuentra una solución válida y luego sigue
  // buscando otra que mueva menos bloques (costo = celdas donde cambia el docente).
  let nodos = 0;
  let limite = 250000; // tope para encontrar la primera solución
  const EXTRA_MEJORA = 40000; // nodos adicionales para intentar mejorarla
  let agotado = false;
  let costo = 0;
  let mejorSol = null;
  let mejorCosto = Infinity;

  const resolver = () => {
    if (costo >= mejorCosto) return false;
    if (pendientes.size === 0) {
      mejorSol = new Map(asign);
      mejorCosto = costo;
      limite = Math.min(limite, nodos + EXTRA_MEJORA);
      return costo === 0; // costo 0 = nada que mover: no se puede mejorar
    }
    if (++nodos > limite) {
      agotado = true;
      return false;
    }
    let mejor = null;
    let mejorLista = null;
    const ofertaGrupo = {}; // grupo -> Map(docente -> celdas donde podría ir)
    const ofertaHoras = new Map(); // docente -> Set(horas donde podría ir)
    for (const cell of pendientes) {
      const lista = candidatosDe(cell);
      if (lista.length === 0) return false;
      if (!ofertaGrupo[cell.g]) ofertaGrupo[cell.g] = new Map();
      lista.forEach((t) => {
        ofertaGrupo[cell.g].set(t, (ofertaGrupo[cell.g].get(t) || 0) + 1);
        if (!ofertaHoras.has(t)) ofertaHoras.set(t, new Set());
        ofertaHoras.get(t).add(cell.h);
      });
      if (!mejorLista || lista.length < mejorLista.length) {
        mejor = cell;
        mejorLista = lista;
      }
    }
    // Poda: cada docente debe poder cubrir todas sus clases restantes
    const totalDocente = new Map();
    for (const g of grupos) {
      for (const [t, r] of restante[g]) {
        if (r <= 0) continue;
        const posibles = (ofertaGrupo[g] && ofertaGrupo[g].get(t)) || 0;
        if (posibles < r) return false;
        totalDocente.set(t, (totalDocente.get(t) || 0) + r);
      }
    }
    for (const [t, total] of totalDocente) {
      const horas = ofertaHoras.get(t);
      if (!horas || horas.size < total) return false;
    }

    pendientes.delete(mejor);
    const clave = mejor.g + "|" + mejor.h;
    for (const t of mejorLista) {
      const extra = actual[mejor.g][mejor.h] === t ? 0 : 1;
      costo += extra;
      restante[mejor.g].set(t, restante[mejor.g].get(t) - 1);
      usado[mejor.h].add(t);
      asign.set(clave, t);
      if (resolver()) return true;
      asign.delete(clave);
      usado[mejor.h].delete(t);
      restante[mejor.g].set(t, restante[mejor.g].get(t) + 1);
      costo -= extra;
      if (agotado) break;
    }
    pendientes.add(mejor);
    return false;
  };

  resolver();
  if (!mejorSol) {
    return {
      ok: false,
      msg:
        "No fue posible ajustar: con los docentes de este día, pasar los bloques sin asignar a las primeras horas dejaría a un docente en dos grupos a la misma hora. " +
        "Agrega a alguien con el botón + para cubrir los bloques sin asignar, o reorganiza algún bloque a mano y vuelve a intentar.",
    };
  }

  let cambios = 0;
  for (const g of grupos) {
    HORAS.forEach((h) => {
      const antes = actual[g][h] || null;
      const despues = mejorSol.get(g + "|" + h) || null;
      if (antes !== despues) cambios++;
    });
  }

  return {
    ok: true,
    yaOrdenado: false,
    cambios,
    aplicar: () => {
      DOCENTES.forEach((d) =>
        d.horario[dia].forEach((c, i) => {
          if (gset.has(c)) d.horario[dia][i] = "A.P."; // se libera y luego se vuelve a colocar
        })
      );
      mejorSol.forEach((d, clave) => {
        const [g, h] = clave.split("|");
        d.horario[dia][Number(h) - 1] = g;
      });
    },
  };
}

function ajustarHorarioDia() {
  if (!requiereSesion()) return;
  const r = calcularAjuste(edicionSede, edicionDia);
  if (!r.ok) {
    mostrarAviso(r.msg, "error");
    return;
  }
  if (r.yaOrdenado) {
    mostrarAviso("El horario ya está organizado: los bloques sin asignar están en las primeras horas.", "ok");
    return;
  }
  ultimoAjuste = {
    sede: edicionSede,
    dia: edicionDia,
    snap: DOCENTES.map((d) => ({ d, slots: d.horario[edicionDia].slice() })),
    notas: Object.assign({}, notasSinAsignar),
  };
  r.aplicar();
  mostrarAviso(`Horario ajustado: ${r.cambios} bloque(s) reubicado(s). Puedes deshacerlo con "↩ Deshacer ajuste".`, "ok");
  renderTodo();
}

function deshacerAjuste() {
  if (!ultimoAjuste) return;
  if (!requiereSesion()) return;
  const { dia, snap, notas } = ultimoAjuste;
  snap.forEach(({ d, slots }) => {
    d.horario[dia] = slots.slice();
  });
  notasSinAsignar = Object.assign({}, notas);
  ultimoAjuste = null;
  mostrarAviso("Se deshizo el último ajuste.", "ok");
  renderTodo();
}

/* ------------------------------------------------------------
   MENSAJE EN BLOQUES "SIN ASIGNAR" (para que no salgan vacíos
   al exportar). Se escribe por celda o para todas a la vez.
   ------------------------------------------------------------ */

// g/h = celda concreta; sin argumentos = todos los sin asignar del día y sede
function abrirModalNotaVacio(g, h) {
  if (!requiereSesion()) return;
  const vacias = celdasSinAsignar(edicionSede, edicionDia);
  notaContexto = g ? { g, h } : null;
  const ctx = document.getElementById("nota-vacio-contexto");
  const input = document.getElementById("input-nota-vacio");
  const btnUno = document.getElementById("btn-nota-guardar");
  const btnTodos = document.getElementById("btn-nota-todos");
  const lugar = `${etiquetaDia(edicionDia)} · ${SEDE_LABEL[edicionSede]}`;
  if (g) {
    ctx.textContent = `Grupo ${g} · hora ${h} · ${lugar}`;
    input.value = notaDeCelda(edicionSede, edicionDia, g, h);
    btnUno.style.display = "block";
    btnTodos.textContent = `Poner en los ${vacias.length} bloques sin asignar de este día`;
  } else {
    ctx.textContent = `${vacias.length} bloque(s) sin asignar · ${lugar}`;
    input.value = "";
    btnUno.style.display = "none";
    btnTodos.textContent = "Aplicar a todos (vacío = quitar los mensajes)";
  }
  document.getElementById("modal-nota-vacio").classList.add("activo");
  setTimeout(() => input.focus(), 50);
}

function cerrarModalNotaVacio() {
  document.getElementById("modal-nota-vacio").classList.remove("activo");
}

function guardarNotaVacio(aTodos) {
  if (!requiereSesion()) return;
  const texto = document.getElementById("input-nota-vacio").value.replace(/\s+/g, " ").trim();
  const celdas = aTodos || !notaContexto ? celdasSinAsignar(edicionSede, edicionDia) : [notaContexto];
  celdas.forEach(({ g, h }) => {
    const k = claveNota(edicionSede, edicionDia, g, h);
    if (texto) notasSinAsignar[k] = texto;
    else delete notasSinAsignar[k];
  });
  cerrarModalNotaVacio();
  mostrarAviso(
    texto ? `Mensaje "${texto}" puesto en ${celdas.length} bloque(s).` : `Mensaje quitado de ${celdas.length} bloque(s).`,
    "ok"
  );
  renderEdicion();
}

/* ------------------------------------------------------------
   MODAL OFICIAL – horario individual con el formato exacto
   del documento del colegio (GPS-F-33), con descarga a .docx/.pdf
   ------------------------------------------------------------ */

function abrirModalOficial(nombre) {
  const doc = buscar(nombre);
  if (!doc) return;
  window.__docenteOficial = doc.nombre;
  window.__areaOficial = window.__areaOficial || "";
  renderModalOficial();
  document.getElementById("modal-oficial").classList.add("activo");
}

function cerrarModalOficial() {
  document.getElementById("modal-oficial").classList.remove("activo");
}

function actualizarAreaOficial(valor) {
  window.__areaOficial = valor;
  renderVistaPreviaOficial();
}

function renderVistaPreviaOficial() {
  const doc = buscar(window.__docenteOficial);
  if (!doc) return;
  document.getElementById("oficial-preview").innerHTML = horarioDocenteOficialHTML(
    doc,
    window.__areaOficial
  );
}

function renderModalOficial() {
  const doc = buscar(window.__docenteOficial);
  if (!doc) return;
  const cont = document.getElementById("modal-oficial-contenido");
  cont.innerHTML = `
    <div class="modal-oficial-barra">
      <label>Área(s) del docente (opcional):
        <input type="text" id="input-area-oficial" value="${window.__areaOficial || ""}"
               oninput="actualizarAreaOficial(this.value)" placeholder="Ej: MATEMÁTICAS" />
      </label>
      <div class="modal-oficial-botones">
        <button onclick="exportarDocenteOficialPDF()">📄 Descargar PDF</button>
        <button onclick="exportarDocenteOficialDOCX()">📝 Descargar .docx</button>
      </div>
    </div>
    <div id="oficial-preview" class="oficial-preview"></div>
  `;
  renderVistaPreviaOficial();
}

async function exportarDocenteOficialPDF() {
  const origen = document.getElementById("oficial-preview");
  const { jsPDF } = window.jspdf;
  const canvas = await html2canvas(origen, { scale: 2 });
  const img = canvas.toDataURL("image/png");
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "letter" });
  const w = pdf.internal.pageSize.getWidth() - 40;
  const h = (canvas.height * w) / canvas.width;
  pdf.addImage(img, "PNG", 20, 20, w, h);
  const doc = buscar(window.__docenteOficial);
  pdf.save(`horario-${doc.nombre.replace(/\s+/g, "_")}.pdf`);
}

function exportarDocenteOficialDOCX() {
  const contenido = document.getElementById("oficial-preview").innerHTML;
  const html = `<html><head><meta charset="utf-8"><style>${ESTILOS_OFICIALES_DOCX}</style></head><body>${contenido}</body></html>`;
  const blob = window.htmlDocx.asBlob(html);
  const doc = buscar(window.__docenteOficial);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `horario-${doc.nombre.replace(/\s+/g, "_")}.docx`;
  a.click();
}

// Estilos inline replicados dentro del .docx exportado (Word no lee styles.css externo)
const ESTILOS_OFICIALES_DOCX = `
  table.oficial-header, table.oficial-tabla { border-collapse: collapse; width: 100%; }
  table.oficial-header td { border: 1px solid #000; padding: 4px 8px; font-size: 11px; text-align: center; }
  table.oficial-header .oficial-titulo-doc { font-weight: bold; }
  table.oficial-tabla th, table.oficial-tabla td { border: 1px solid #000; padding: 5px; text-align: center; font-size: 11px; }
  table.oficial-tabla th { background: #eee; font-weight: bold; }
  .oficial-hora { font-weight: bold; }
  .oficial-descanso { font-weight: bold; text-align: center; }
  .oficial-linea { font-size: 12px; margin: 2px 0; }
  .oficial-nota { font-size: 10px; margin-top: 6px; }
  .oficial-titulo-linea { text-align: center; font-weight: bold; font-size: 13px; margin: 2px 0; }
`;

function cambiarSedeEdicion(sede) {
  edicionSede = sede;
  renderEdicion();
}
function cambiarDiaEdicion(dia) {
  edicionDia = dia;
  renderEdicion();
}

/* ------------------------------------------------------------
   NAVEGACIÓN
   ------------------------------------------------------------ */

function mostrarVista(id) {
  document.querySelectorAll(".vista").forEach((v) => v.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
  document.querySelectorAll(".nav-btn").forEach((b) =>
    b.classList.toggle("activo", b.dataset.vista === id)
  );
}

function renderTodo() {
  renderConsolidado();
  SEDES.forEach((s) => renderSede(s));
  renderEdicion();
}

/* ------------------------------------------------------------
   EXPORTAR PDF / DOCX
   ------------------------------------------------------------ */

function abrirExport(vistaId) {
  document.getElementById("modal-export").classList.add("activo");
  window.__vistaAExportar = vistaId;
  const campoTitulo = document.getElementById("campo-titulo-export");
  if (vistaId === "edicion") {
    campoTitulo.style.display = "block";
    const sugerido = `HORARIO ${edicionDia.toUpperCase()}\n${SEDE_LABEL[edicionSede].toUpperCase()}`;
    document.getElementById("input-titulo-export").value = sugerido;
  } else {
    campoTitulo.style.display = "none";
  }
  document.getElementById("btn-export-excel").style.display = vistaId === "consolidado" ? "block" : "none";
}
function cerrarExport() {
  document.getElementById("modal-export").classList.remove("activo");
}

// Contenedor temporal fuera de pantalla para renderizar una versión
// "limpia" (sin scroll ni controles de edición) antes de exportarla,
// para que html2canvas capture SIEMPRE el ancho completo de la tabla.
function construirOrigenExport(id) {
  const div = document.createElement("div");
  div.className = "oficial-temporal";
  if (id === "edicion") {
    const titulo = document.getElementById("input-titulo-export").value;
    div.innerHTML = horarioEdicionOficialHTML(edicionSede, edicionDia, titulo);
  } else {
    const tabla = document.querySelector(
      id === "consolidado" ? "#cont-consolidado table" : `#cont-sede-${id.split("-")[1]} table`
    );
    div.style.width = "max-content";
    div.innerHTML = tabla.outerHTML;
  }
  document.body.appendChild(div);
  return div;
}

async function exportarPDF() {
  const id = window.__vistaAExportar;
  const temporal = construirOrigenExport(id);
  const { jsPDF } = window.jspdf;
  const canvas = await html2canvas(temporal, { scale: 2 });
  const img = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: id === "edicion" ? "portrait" : "landscape",
    unit: "pt",
    format: id === "edicion" ? "letter" : "a2",
  });
  const w = pdf.internal.pageSize.getWidth() - (id === "edicion" ? 40 : 20);
  const h = (canvas.height * w) / canvas.width;
  pdf.addImage(img, "PNG", 20, 20, w, h);
  pdf.save(`horario-${id}.pdf`);
  temporal.remove();
  cerrarExport();
}

async function exportarDOCX() {
  const id = window.__vistaAExportar;
  let html;
  if (id === "edicion") {
    const titulo = document.getElementById("input-titulo-export").value;
    const contenido = horarioEdicionOficialHTML(edicionSede, edicionDia, titulo);
    html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${ESTILOS_OFICIALES_DOCX}</style></head><body>${contenido}</body></html>`;
  } else {
    const tabla = document.querySelector(
      id === "consolidado" ? "#cont-consolidado table" : `#cont-sede-${id.split("-")[1]} table`
    );
    const estilos = `table{border-collapse:collapse;} td,th{border:1px solid #000;padding:3px;font-size:10px;text-align:center;}`;
    html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${estilos}</style></head><body>${tabla.outerHTML}</body></html>`;
  }
  if (!window.htmlDocx || !window.htmlDocx.asBlob) {
    alert("La librería para generar Word aún no ha cargado. Espera un segundo y vuelve a intentar (revisa tu conexión a internet).");
    return;
  }
  const blob = window.htmlDocx.asBlob(html, { orientation: id === "edicion" ? "portrait" : "landscape" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `horario-${id}.docx`;
  a.click();
  cerrarExport();
}

// Exportar el Consolidado a Excel (.xlsx), replicando la estructura del
// documento oficial: encabezado, columnas No/DIR/NOMBRE y 5 días x 6 horas,
// con ancho de columna suficiente para que cada grado se vea completo.
function exportarConsolidadoExcel() {
  if (!window.XLSX) {
    alert("La librería para generar Excel aún no ha cargado. Verifica tu conexión a internet e intenta de nuevo.");
    return;
  }
  const filas = [];
  filas.push(["HORARIO GENERAL DE BÁSICA SECUNDARIA Y MEDIA"]);
  filas.push([]);
  filas.push(["PRESTACIÓN DEL SERVICIO"]);
  filas.push([]);
  filas.push(["SEDES: A, B Y C     JORNADA: MAÑANA     AÑO: 2026"]);

  const filaDias = ["No", "DIR", "NOMBRE"];
  DIAS.forEach((d) => {
    filaDias.push(d.toUpperCase(), "", "", "", "", "");
  });
  filas.push(filaDias);

  const filaHoras = ["", "", ""];
  DIAS.forEach(() => HORAS.forEach((h) => filaHoras.push(h)));
  filas.push(filaHoras);

  DOCENTES.filter(visibleEnConsolidado).forEach((doc, i) => {
    const fila = [i + 1, codigoEspaciado(doc.dir), doc.nombre];
    DIAS.forEach((d) => {
      doc.horario[d].forEach((c) => {
        fila.push(c === "A.P." ? "A.P." : c ? codigoEspaciado(c) : "");
      });
    });
    filas.push(fila);
  });

  const ws = XLSX.utils.aoa_to_sheet(filas);

  // Anchos de columna: suficientes para ver el grado completo ("10-3 A")
  ws["!cols"] = [
    { wch: 4 },
    { wch: 9 },
    { wch: 34 },
    ...Array(30).fill({ wch: 8 }),
  ];

  // Combinar celdas del encabezado como en el documento original
  const ultimaCol = 32; // 0-indexada: 3 (No/DIR/NOMBRE) + 30 columnas de horario - 1
  ws["!merges"] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: ultimaCol } },
    { s: { r: 2, c: 0 }, e: { r: 2, c: ultimaCol } },
    { s: { r: 4, c: 0 }, e: { r: 4, c: ultimaCol } },
  ];
  let col = 3;
  DIAS.forEach(() => {
    ws["!merges"].push({ s: { r: 5, c: col }, e: { r: 5, c: col + 5 } });
    col += 6;
  });

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Consolidado");
  XLSX.writeFile(wb, "horario-consolidado.xlsx");
}

/* ------------------------------------------------------------
   INICIO
   ------------------------------------------------------------ */

/* ------------------------------------------------------------
   SESIÓN (Supabase Auth) Y GUARDAR/CARGAR (Supabase DB)
   Requiere completar config.js con las llaves del proyecto.
   Mientras config.js tenga los valores de ejemplo, el sitio
   funciona igual mostrando el horario, pero iniciar sesión y
   guardar/cargar mostrarán un aviso de "base de datos no
   configurada" en vez de fallar en silencio.
   ------------------------------------------------------------ */

let supabaseClient = null;
try {
  if (
    typeof window !== "undefined" &&
    window.supabase &&
    typeof SUPABASE_URL !== "undefined" &&
    SUPABASE_URL &&
    !SUPABASE_URL.startsWith("PEGA_AQUI")
  ) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.warn("Supabase no está configurado todavía:", e);
}

let sesionUsuario = null;

function requiereSesion() {
  if (!supabaseClient) return true; // sin base de datos configurada, se edita localmente
  if (!sesionUsuario) {
    alert('Debes iniciar sesión para hacer modificaciones. Usa el botón "Iniciar sesión" en la parte superior.');
    return false;
  }
  return true;
}

function actualizarBarraSesion() {
  const info = document.getElementById("sesion-info");
  const btn = document.getElementById("btn-sesion");
  const btnGuardados = document.getElementById("btn-horarios-guardados");
  if (sesionUsuario) {
    info.textContent = `👤 ${sesionUsuario.email}`;
    btn.textContent = "🔓 Cerrar sesión";
    btnGuardados.style.display = "inline-block";
  } else {
    info.textContent = "";
    btn.textContent = "🔒 Iniciar sesión";
    btnGuardados.style.display = "none";
  }
}

function alClicBotonSesion() {
  if (sesionUsuario) {
    cerrarSesion();
  } else {
    abrirModalLogin();
  }
}

function abrirModalLogin() {
  document.getElementById("login-error").textContent = "";
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("modal-login").classList.add("activo");
}
function cerrarModalLogin() {
  document.getElementById("modal-login").classList.remove("activo");
}

async function intentarLogin() {
  const errorEl = document.getElementById("login-error");
  if (!supabaseClient) {
    errorEl.textContent = "La base de datos aún no está configurada (falta completar config.js con tu proyecto de Supabase).";
    return;
  }
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    errorEl.textContent = "Correo o contraseña incorrectos.";
    return;
  }
  sesionUsuario = { email: data.user.email };
  actualizarBarraSesion();
  cerrarModalLogin();
}

async function cerrarSesion() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  sesionUsuario = null;
  actualizarBarraSesion();
}

function abrirGuardarCargar() {
  if (!requiereSesion()) return;
  document.getElementById("modal-guardar-cargar").classList.add("activo");
  document.getElementById("input-nombre-guardar").value = "";
  document.getElementById("guardar-mensaje").textContent = "";
  listarHorariosBD();
}
function cerrarGuardarCargar() {
  document.getElementById("modal-guardar-cargar").classList.remove("activo");
}

async function guardarHorarioBD() {
  if (!requiereSesion()) return;
  const msg = document.getElementById("guardar-mensaje");
  if (!supabaseClient) {
    msg.textContent = "Base de datos no configurada todavía (ver config.js).";
    return;
  }
  const nombre = document.getElementById("input-nombre-guardar").value.trim();
  if (!nombre) {
    msg.textContent = "Escribe un nombre para el horario (ej: Horario 2026, Borrador).";
    return;
  }
  const datos = DOCENTES.map((d) => ({
    nombre: d.nombre,
    dir: d.dir,
    horario: d.horario,
    contrajornada: d.contrajornada || false,
    horarioTarde: d.horarioTarde || null,
    temporal: d.temporal || false,
    temporalDia: d.temporalDia || null,
    temporalSede: d.temporalSede || null,
  }));
  const { error } = await supabaseClient
    .from("tabla_horarios")
    .upsert(
      { nombre, datos, actualizado_por: sesionUsuario.email, actualizado_en: new Date().toISOString() },
      { onConflict: "nombre" }
    );
  if (error) {
    msg.textContent = "Error al guardar: " + error.message;
  } else {
    msg.textContent = `Guardado como "${nombre}".`;
    listarHorariosBD();
  }
}

async function listarHorariosBD() {
  const cont = document.getElementById("lista-horarios-guardados");
  if (!supabaseClient) {
    cont.innerHTML = '<p class="ayuda">Base de datos no configurada todavía (ver config.js y supabase-setup.sql).</p>';
    return;
  }
  const { data, error } = await supabaseClient
    .from("tabla_horarios")
    .select("nombre, actualizado_en, actualizado_por")
    .order("actualizado_en", { ascending: false });
  if (error) {
    cont.innerHTML = `<p class="ayuda">Error al listar: ${error.message}</p>`;
    return;
  }
  if (!data || data.length === 0) {
    cont.innerHTML = '<p class="ayuda">Aún no hay horarios guardados.</p>';
    return;
  }
  cont.innerHTML = data
    .map(
      (h) => `
    <div class="fila-horario-guardado">
      <div>
        <strong>${h.nombre}</strong>
        <div class="ayuda">Actualizado: ${new Date(h.actualizado_en).toLocaleString("es-CO")}${
        h.actualizado_por ? " · " + h.actualizado_por : ""
      }</div>
      </div>
      <button onclick="cargarHorarioBD('${h.nombre.replace(/'/g, "\\'")}')">Cargar</button>
    </div>`
    )
    .join("");
}

async function cargarHorarioBD(nombre) {
  if (!supabaseClient) return;
  if (!confirm(`¿Cargar "${nombre}"? Esto reemplazará el horario que se está viendo ahora en el sitio.`)) return;
  const { data, error } = await supabaseClient.from("tabla_horarios").select("datos").eq("nombre", nombre).single();
  if (error || !data) {
    alert("No se pudo cargar: " + (error ? error.message : "no encontrado"));
    return;
  }
  DOCENTES.length = 0;
  ultimoAjuste = null;
  docenteSeleccionado = null;
  data.datos.forEach((d) => DOCENTES.push(d));
  renderTodo();
  cerrarGuardarCargar();
  alert(`Horario "${nombre}" cargado. El sitio ya está actualizado.`);
}

/* ------------------------------------------------------------
   INICIO
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  renderTodo();
  mostrarVista("vista-consolidado");
  actualizarBarraSesion();
  if (supabaseClient) {
    supabaseClient.auth.getSession().then(({ data }) => {
      if (data && data.session && data.session.user) {
        sesionUsuario = { email: data.session.user.email };
        actualizarBarraSesion();
      }
    });
  }
});
