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

const LOGO_B64 =
  "iVBORw0KGgoAAAANSUhEUgAAAOwAAACuCAYAAAA1Q+FzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAIdUAACHVAQSctJ0AAHZ+SURBVHhe7V1lWFVZF6ZUVBRQ7O7u7jGwu7tb6bDKSWGGEAVAVQAKrP67d3e9112v893v8649l5Oq2jOK5X28+85zfzyzS6Wj3t3lvf7P//0PRhhhROyAkbBGGBGLYCSsEUbEIhgJa4QRsQhGwhphRCyCkbBGGBGLYCSsEUbEIhgJa4QRsQhGwhphRCyCkbBxGH/99Rfev3+P16/f4s2bt+p/2FB333/r7m/E7w8jYeMghYKv377FnTp3cOkS5Ldv35r48+fPuHr1Kq5evYrXr1/j8uXLePXqlfJ59eoV5bN69Wry/nfxK1euoEePHjh79ixevnyJ58+fo6CgAO/fv0er1arA8/fv38OHD29ev36N50cPoaCgAKdOnYI//79///4dvHnzBvv27UP89OmjQv68hL9+/Qo//v6O8+eP4c+fP7h9+zbu378PFy9exLdv35r//fsPePEiFhQUsOTBwQE4cOAAbkL+/v78/eM8L126hJcvX8anT5+gq6uLB4cO4vXrl//ffycmHh4e4scHwP7/A4BwAIA/A8C+ffv+PwA=";

const DOCENTES_RAW = [
  { nombre: "CARMEN ELIZABETH ARCINIÉGAS MORA", dir: "9-3B", horario: { Lunes: ["A.P.", "A.P.", "9-3B", "9-2B", "8-1B", "9-1B"], Martes: ["9-1B", "9-1B", "A.P.", "8-1B", "9-3B", "A.P."], Miercoles: ["9-3B", "9-3B", "9-2B", "9-2B", "A.P.", "8-1B"], Jueves: ["A.P.", "9-2B", "9-1B", "9-1B", "A.P.", "8-1B"], Viernes: ["9-3B", "9-3B", "8-1B", "8-1B", "A.P.", "9-2B"] } },
  { nombre: "CASTELLANOS APARICIO RITA JULIA", dir: "8-1B", horario: { Lunes: ["8-1B", "8-1B", "A.P.", "9-3B", "7-1B", "A.P."], Martes: ["A.P.", "9-2B", "9-1B", "7-1B", "6-1B", "9-3B"], Miercoles: ["7-1B", "8-1B", "A.P.", "9-1B", "7-1B", "6-1B"], Jueves: ["9-2B", "A.P.", "6-1B", "A.P.", "9-3B", "A.P."], Viernes: ["A.P.", "6-1B", "9-1B", "9-2B", "9-3B", "8-1B"] } },
  { nombre: "CASTRO CONTRERAS MARÍA BELENICE", dir: "", horario: { Lunes: ["9-3B", "A.P.", "10-3A", "11-1A", "A.P.", "A.P."], Martes: ["A.P.", "11-2A", "10-2A", "11-1A", "10-3A", "10-1A"], Miercoles: ["A.P.", "10-3A", "A.P.", "10-1A", "10-2A", "11-2A"], Jueves: ["9-3B", "9-3B", "A.P.", "11-2A", "11-1A", "10-1A"], Viernes: ["10-2A", "10-2A", "11-1A", "10-3A", "11-2A", "A.P."] } },
  { nombre: "COGOLLO TORRES JOANNE", dir: "9-2B", horario: { Lunes: ["9-2B", "9-1B", "A.P.", "A.P.", "6-1B", "7-1B"], Martes: ["9-2B", "A.P.", "9-3B", "A.P.", "8-1B", "A.P."], Miercoles: ["8-1B", "9-2B", "9-1B", "A.P.", "9-3B", "9-3B"], Jueves: ["6-1B", "8-1B", "7-1B", "9-2B", "A.P.", "9-1B"], Viernes: ["8-1B", "A.P.", "6-1B", "9-1B", "7-1B", "9-3B"] } },
  { nombre: "CORZO VELÁSQUEZ NÉSTOR ESTEBAN", dir: "6-2C", horario: { Lunes: ["8-1C", "8-2C", "A.P.", "A.P.", "6-1C", "7-2C"], Martes: ["8-1C", "7-1C", "7-1C", "6-2C", "8-2C", "A.P."], Miercoles: ["6-1C", "A.P.", "8-2C", "6-2C", "7-2C", "7-1C"], Jueves: ["7-2C", "A.P.", "8-1C", "A.P.", "8-2C", "7-1C"], Viernes: ["6-1C", "6-2C", "7-2C", "A.P.", "A.P.", "8-1C"] } },
  { nombre: "CRUZ MEJIA MARTHA ESPERANZA", dir: "", horario: { Lunes: ["A.P.", "9-3B", "9-2B", "A.P.", "9-1B", "8-1B"], Martes: ["11-2A", "10-1A", "11-1A", "10-2A", "A.P.", "10-3A"], Miercoles: ["A.P.", "A.P.", "9-3B", "8-1B", "9-1B", "9-2B"], Jueves: ["11-2A", "10-3A", "10-2A", "11-1A", "10-1A", "A.P."], Viernes: ["8-1C", "8-1C", "A.P.", "8-2C", "8-2C", "A.P."] } },
  { nombre: "GALINDO NARANJO RICARDO", dir: "10-1A", horario: { Lunes: ["11-1A", "A.P.", "11-2A", "A.P.", "10-2A", "10-1A"], Martes: ["10-3A", "A.P.", "10-1A", "A.P.", "11-2A", "11-1A"], Miercoles: ["10-3A", "A.P.", "10-2A", "11-1A", "11-2A", "10-1A"], Jueves: ["11-1A", "A.P.", "11-2A", "10-3A", "A.P.", "10-2A"], Viernes: ["7-1C", "7-2C", "A.P.", "10-2A", "10-1A", "10-3A"] } },
  { nombre: "AROCHA CARLOS ALBERTO", dir: "", horario: { Lunes: ["6-1C", "6-1C", "6-2C", "6-2C", "7-1C", "7-1C"], Martes: [null, null, null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, "6-2C", "6-1C", null, null, null], Viernes: [null, null, null, null, null, null] } },
  { nombre: "GELVES VÁSQUEZ JHONATHAN ISAAC", dir: "7-1C", horario: { Lunes: ["7-2C", "7-2C", "8-1C", "A.P.", "6-2C", "8-2C"], Martes: ["8-2C", "8-2C", "8-1C", "7-1C", "7-2C", "6-1C"], Miercoles: ["6-2C", "6-1C", "A.P.", "7-1C", "6-1C", "7-2C"], Jueves: ["6-1C", "A.P.", "8-2C", "7-1C", "A.P.", "8-1C"], Viernes: ["A.P.", "A.P.", "7-1C", "8-1C", "6-2C", "6-2C"] } },
  { nombre: "GÓMEZ GÓMEZ ISAÍAS", dir: "9-1B", horario: { Lunes: ["11-2A", "10-2A", "10-1A", "10-3A", "11-1A", "A.P."], Martes: ["8-1B", "A.P.", "9-2B", "9-3B", "A.P.", "9-1B"], Miercoles: ["10-2A", "11-2A", "11-1A", "10-3A", "10-1A", "A.P."], Jueves: ["7-1B", "9-1B", "A.P.", "A.P.", "9-2B", "6-1B"], Viernes: ["7-1B", "A.P.", "9-3B", "6-1B", "8-1B", "A.P."] } },
  { nombre: "GONZÁLEZ PÉREZ LYDA AMPARO", dir: "", horario: { Lunes: ["7-1B", "A.P.", "A.P.", "6-1B", "A.P.", "6-1B"], Martes: ["6-1C", "6-2C", "6-1C", "8-1C", "7-1C", "6-2C"], Miercoles: ["8-1C", "8-2C", "6-1C", "7-2C", "6-2C", "A.P."], Jueves: ["7-1C", "8-2C", "A.P.", "6-1C", "7-2C", "6-2C"], Viernes: ["A.P.", "A.P.", "A.P.", "7-1B", "6-1B", "6-1B"] } },
  { nombre: "GUERRERO GARCÍA LUIS JAVIER", dir: "", horario: { Lunes: ["8-2C", "6-2C", "6-1C", "8-1C", "A.P.", "A.P."], Martes: ["7-1B", "9-3B", "8-1B", "9-1B", "A.P.", "9-2B"], Miercoles: ["A.P.", "7-2C", "7-1C", "A.P.", "8-2C", "8-1C"], Jueves: ["9-1B", "A.P.", "9-2B", "7-1B", "8-1B", "9-3B"], Viernes: ["A.P.", "6-1C", "6-2C", "7-1C", "A.P.", "7-2C"] } },
  { nombre: "GUEVARA ORTIZ OLIVO", dir: "", horario: { Lunes: ["9-1B", "6-1B", "8-1B", "7-1B", "9-2B", "9-3B"], Martes: ["6-1B", "7-1B", null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, null, null, null, null, null], Viernes: [null, null, null, null, null, null] }, contrajornada: true, horarioTarde: { Lunes: [null, null, null, null, null, null], Martes: ["A.P.", "11-A", "11-A", "11-A", "11-A", "A.P."], Miercoles: ["A.P.", "10-A", "10-A", "10-A", "10-A", "A.P."], Jueves: ["A.P.", "11-A", "11-A", "11-A", "A.P.", null], Viernes: ["A.P.", "10-A", "10-A", "10-A", "A.P.", null] } },
  { nombre: "HERNÁNDEZ MARTÍNENEZ MARTHA CECILIA", dir: "", horario: { Lunes: ["6-2C", "7-1C", "7-1C", "7-2C", "7-2C", "6-1C"], Martes: [null, null, null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, "6-1C", "6-2C", null, null, null], Viernes: [null, null, null, null, null, null] }, contrajornada: true, horarioTarde: { Lunes: [null, null, null, null, null, null], Martes: ["A.P.", "11-A", "11-A", "11-A", "11-A", "A.P."], Miercoles: ["A.P.", "10-A", "10-A", "10-A", "10-A", "A.P."], Jueves: ["A.P.", "11-A", "11-A", "11-A", "A.P.", null], Viernes: ["A.P.", "10-A", "10-A", "10-A", "A.P.", null] } },
  { nombre: "LEAL SANJUAN MAVELIA NOHEMI", dir: "8-2C", horario: { Lunes: ["A.P.", "A.P.", "7-2C", "8-2C", "8-2C", "8-1C"], Martes: ["A.P.", "7-2C", "7-2C", "8-2C", "8-1C", "7-1C"], Miercoles: ["7-2C", "7-1C", "8-1C", "8-1C", "A.P.", "A.P."], Jueves: ["8-2C", "A.P.", "7-1C", "8-1C", "8-1C", "A.P."], Viernes: ["7-2C", "8-2C", "8-2C", "A.P.", "7-1C", "7-1C"] } },
  { nombre: "LEÓN ISAZA FABIÁN ENRIQUE", dir: "", horario: { Lunes: ["A.P.", "11-2A", "10-2A", "A.P.", "10-1A", "11-1A"], Martes: ["9-3B", "A.P.", "7-1B", "9-2B", "9-1B", "8-1B"], Miercoles: ["8-2C", "A.P.", "A.P.", "10-2A", "11-1A", "10-3A"], Jueves: ["A.P.", "7-1B", "9-3B", "8-1B", "9-1B", "9-2B"], Viernes: ["10-1A", "10-3A", "11-2A", "A.P.", "A.P.", "8-2C"] } },
  { nombre: "LOZANO GONZÁLEZ JOSÉ ERNESTO", dir: "11-2A", horario: { Lunes: ["10-2A", "10-1A", "A.P.", "11-2A", "A.P.", "10-3A"], Martes: ["10-2A", "11-1A", "11-2A", "A.P.", "10-1A", "A.P."], Miercoles: ["11-1A", "10-2A", "10-3A", "A.P.", "8-1C", "8-2C"], Jueves: ["A.P.", "10-1A", "10-3A", "A.P.", "11-2A", "11-1A"], Viernes: ["11-.2A", "11-1A", "10-3A", "10-1A", "A.P.", "10-2A"] } },
  { nombre: "NAVARRO ARANA CRISTIÁN EDGARDO", dir: "6-1B", horario: { Lunes: ["10-1A", "A.P.", "9-1B", "8-1B", "A.P.", "9-2B"], Martes: ["A.P.", "6-1B", "6-1B", "A.P.", "7-1B", "6-1B"], Miercoles: ["A.P.", "6-1B", "8-1B", "6-1B", "6-1B", "7-1B"], Jueves: ["A.P.", "A.P.", "8-1B", "6-1B", "6-1B", "7-1B"], Viernes: ["6-1B", "9-2B", "9-2B", "A.P.", "9-1B", "9-1B"] } },
  { nombre: "MÁRQUEZ ORTIZ DIANA MARÍA", dir: "8-1C", horario: { Lunes: ["A.P.", "A.P.", "8-2C", "7-1C", "8-1C", "A.P."], Martes: ["7-1C", "6-1C", "8-2C", "7-2C", "A.P.", "8-1C"], Miercoles: ["7-1C", "8-1C", "6-2C", "6-1C", "A.P.", "6-2C"], Jueves: ["A.P.", "7-2C", "6-2C", "8-2C", "7-1C", "7-2C"], Viernes: ["6-2C", "A.P.", "6-1C", "7-2C", "6-1C", "A.P."] } },
  { nombre: "LUIS FELIPE MARÍN GUZMAN", dir: "7-1C", horario: { Lunes: ["A.P.", "9-2B", "6-1B", "9-1B", "9-3B", "A.P."], Martes: ["A.P.", "8-1B", "A.P.", "6-1B", "9-2B", "7-1B"], Miercoles: ["9-1B", "7-1B", "6-1B", "9-3B", "8-1B", "A.P."], Jueves: ["6-2C", "6-1B", "A.P.", "9-3B", "7-1B", "A.P."], Viernes: ["9-1B", "8-1B", "A.P.", "9-3B", "9-2B", "7-1B"] } },
  { nombre: "PINTO TOLOZA ADRIANA HUGUET", dir: "6-1C", horario: { Lunes: ["6-1B", "7-1B", "7-1B", "A.P.", "A.P.", "6-2C"], Martes: ["6-2C", "A.P.", "6-2C", "6-1C", "6-1C", "7-2C"], Miercoles: ["6-1B", "A.P.", "7-1B", "7-1B", "A.P.", "A.P."], Jueves: ["A.P.", "8-1C", "7-2C", "6-2C", "6-1C", "6-1C"], Viernes: ["A.P.", "7-1B", "7-1B", "6-2C", "8-1C", "6-1C"] } },
  { nombre: "RAMÍREZ AMOROCHO BRAYÁN SEBASTIÁN", dir: "10-2A", horario: { Lunes: ["A.P.", "10-3A", "A.P.", "A.P.", "11-2A", "10-2A"], Martes: ["11-1A", "10-3A", "A.P.", "10-1A", "A.P.", "10-2A"], Miercoles: ["11-2A", "11-1A", "10-1A", "A.P.", "9-2B", "9-1B"], Jueves: ["10-1A", "11-2A", "11-1A", "10-2A", "A.P.", "10-3A"], Viernes: ["11-1A", "11-2A", "10-2A", "A.P.", "10-3A", "10-1A"] } },
  { nombre: "RUEDA DÍAZ HÉCTOR", dir: "10-3A", horario: { Lunes: ["10-3A", "11-1A", "A.P.", "10-1A", "A.P.", "A.P."], Martes: ["A.P.", "10-2A", "A.P.", "10-3A", "11-1A", "11-2A"], Miercoles: ["9-2B", "9-1B", "A.P.", "11-2A", "A.P.", "11-1A"], Jueves: ["10-2A", "10-2A", "10-1A", "A.P.", "10-3A", "11-2A"], Viernes: ["10-3A", "10-1A", "10-1A", "11-2A", "10-2A", "11-1A"] } },
  { nombre: "SANCHEZ BECERRA LUZBELIA", dir: "11-1A", horario: { Lunes: ["A.P.", "A.P.", "11-1A", "10-2A", "10-3A", "11-2A"], Martes: ["10-1A", "A.P.", "10-3A", "11-2A", "10-2A", "A.P."], Miercoles: ["10-1A", "10-1A", "11-2A", "A.P.", "10-3A", "10-2A"], Jueves: ["10-3A", "11-1A", "A.P.", "10-1A", "10-2A", "A.P."], Viernes: ["9-2B", "9-1B", "A.P.", "11-1A", "11-1A", "11-2A"] } },
  { nombre: "ZAFRA CARRILLO MOISÉS", dir: "7-2C", horario: { Lunes: ["7-1C", "8-1C", "A.P.", "6-1C", "A.P.", "A.P."], Martes: ["7-2C", "8-1C", "A.P.", "A.P.", "6-2C", "8-2C"], Miercoles: ["A.P.", "6-2C", "7-2C", "8-2C", "7-1C", "6-1C"], Jueves: ["8-1C", "7-1C", "A.P.", "7-2C", "6-2C", "8-2C"], Viernes: ["8-2C", "7-1C", "8-1C", "6-1C", "7-2C", "A.P."] } },
  { nombre: "GARCÍA SÁNCHEZ SANDRA LUCÍA", dir: "", horario: { Lunes: [null, null, null, null, null, null], Martes: [null, null, null, null, null, null], Miercoles: [null, null, null, null, null, null], Jueves: [null, null, null, null, null, null], Viernes: [null, null, null, null, null, null] }, contrajornada: true, horarioTarde: { Lunes: [null, null, null, null, null, null], Martes: ["A.P.", "11-A", "11-A", "11-A", "11-A", "A.P."], Miercoles: ["A.P.", "10-A", "10-A", "10-A", "10-A", "A.P."], Jueves: ["A.P.", "11-A", "11-A", "11-A", "A.P.", null], Viernes: ["A.P.", "10-A", "10-A", "10-A", "A.P.", null] } },
];
const DOCENTES = DOCENTES_RAW;

function buscar(nombreParcial) {
  return DOCENTES.find((d) =>
    d.nombre.toLowerCase().includes(nombreParcial.toLowerCase())
  );
}

function codigoEspaciado(c) {
  if (!c || c === "A.P.") return c || "";
  return c.slice(0, -1) + " " + c.slice(-1);
}

function encabezadoOficialHTML(tituloDoc, codigo) {
  return `
  <table class="oficial-header">
    <tbody>
      <tr>
        <td rowspan="4" class="oficial-logo"><img src="data:image/png;base64,${LOGO_B64}" width="72" /></td>
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

function horarioEdicionOficialHTML(sede, dia, titulo) {
  const grupos = gruposDeSede(sede);
  const textoVacio = document.getElementById("input-texto-vacio")?.value || "";
  let filas = "";
  HORAS.forEach((h) => {
    filas += `<tr><td class="oficial-hora">${h}</td>`;
    grupos.forEach((g) => {
      const doc = docenteEnCelda(sede, dia, h, g);
      filas += `<td>${doc ? doc.nombre : textoVacio}</td>`;
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

let edicionSede = "B";
let edicionDia = "Miercoles";
let docenteSeleccionado = null;
let ultimoAjuste = null;
window.__arrastre = null;

const DIA_LABEL = { Miercoles: "Miércoles" };
function etiquetaDia(d) {
  return DIA_LABEL[d] || d;
}

function esc(texto) {
  return String(texto).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

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
  return DOCENTES.filter(
    (d) => esLibre(d.horario[dia][hora - 1]) && (!d.temporal || d.temporalDia === dia)
  );
}

function permanenciaDia(doc, dia) {
  return doc.horario[dia].filter((c) => c && c !== "").length;
}

function horasDocenteEnSede(doc, sede, dia) {
  return doc.horario[dia].filter((c) => sedeDeCodigo(c) === sede).length;
}

function docentesDelDia(sede, dia) {
  const todos = DOCENTES.map((d) => ({ doc: d, horas: horasDocenteEnSede(d, sede, dia) }));
  const regulares = todos
    .filter((x) => !x.doc.temporal && x.horas > 0)
    .sort((a, b) => b.horas - a.horas || a.doc.nombre.localeCompare(b.doc.nombre, "es"));
  const temporales = todos.filter(
    (x) => x.doc.temporal && x.doc.temporalDia === dia && (x.doc.temporalSede === sede || x.horas > 0)
  );
  return regulares.concat(temporales);
}

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

function seleccionarDocente(nombre) {
  docenteSeleccionado = docenteSeleccionado === nombre ? null : nombre;
  renderEdicion();
}

function clicDocenteLista(nombre) {
  docenteSeleccionado = nombre;
  renderEdicion();
  abrirModalDocente(nombre);
}

function renderListaDocentes() {
  const cont = document.getElementById("lista-docentes-dia");
  if (!cont) return;
  const lista = docentesDelDia(edicionSede, edicionDia);
  let html = `<h4>Docentes del día <span class="contador">${lista.length}</span></h4>
    <p class="ayuda">${SEDE_LABEL[edicionSede]} · ${etiquetaDia(edicionDia)}</p>`;
  if (lista.length === 0) {
    html += `<p class="ayuda">Nadie tiene clases en esta sede este día.</p>`;
  }
  lista.forEach(({ doc, horas }) => {
    const activo = docenteSeleccionado === doc.nombre ? " activo" : "";
    const temporal = doc.temporal ? " temporal" : "";
    html += `<div class="item-docente${activo}${temporal}" role="button" tabindex="0"
        draggable="true"
        ondragstart="arrastrarDocenteLista(event,'${esc(doc.nombre)}')"
        ondragend="finArrastre()"
        onclick="clicDocenteLista('${esc(doc.nombre)}')"
        onkeydown="if(event.key==='Enter'){clicDocenteLista('${esc(doc.nombre)}')}"
        title="Arrastra a cualquier celda o haz clic para ver su horario">
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

function encabezadoGrupo(g) {
  const hayVacios = HORAS.some((h) => !docenteEnCelda(edicionSede, edicionDia, h, g));
  const boton = hayVacios
    ? `<button type="button" class="btn-ajustar" onclick="ajustarHorarioDia()" title="Reorganiza el día: los bloques sin asignar pasan a las primeras horas">Ajustar</button>`
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
                      title="Clic para resaltar · Arrastra para mover o cambiar de grupo">
                    <span class="chip-texto">${doc.nombre}</span>
                    <button class="btn-mini" onclick="event.stopPropagation(); desactivarDocente('${esc(doc.nombre)}',${h})" title="Marcar ausente">✕</button>
                  </div>`;
      } else {
        html += `<span class="celda-libre">Sin asignar</span>`;
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

function evaluarMovimientoAsignacion(nombre, grupoDestino, horaDestino) {
  const doc = DOCENTES.find((d) => d.nombre === nombre);
  if (!doc) return { ok: false, msg: "Docente no encontrado." };
  const dia = edicionDia;

  const ocupante = docenteEnCelda(edicionSede, dia, horaDestino, grupoDestino);
  if (ocupante && ocupante !== doc) {
    return {
      ok: false,
      msg: `${codigoEspaciado(grupoDestino)} ya tiene clase con ${ocupante.nombre} a la hora ${horaDestino}.`,
    };
  }

  const slotDestino = doc.horario[dia][horaDestino - 1];
  if (!esLibre(slotDestino)) {
    return {
      ok: false,
      msg: `${doc.nombre} ya está ocupado a la hora ${horaDestino} (${slotDestino === "R.A." ? "reunión de área" : slotDestino}).`,
    };
  }

  return {
    ok: true,
    aplicar: () => {
      doc.horario[dia][horaDestino - 1] = grupoDestino;
    },
  };
}

function evaluarMovimiento(nombre, horaOrigen, grupoDestino, horaDestino) {
  const doc = DOCENTES.find((d) => d.nombre === nombre);
  if (!doc) return { ok: false, msg: "Docente no encontrado." };
  const dia = edicionDia;
  const origen = doc.horario[dia][horaOrigen - 1];
  const destinoSlot = doc.horario[dia][horaDestino - 1];
  const esBloqueSede = sedeDeCodigo(origen) === edicionSede;

  if (horaOrigen === horaDestino && origen === grupoDestino) {
    return { ok: false, silencioso: true, msg: "" };
  }
  if (!esBloqueSede && !esLibre(origen)) {
    return {
      ok: false,
      msg: `${doc.nombre} ya está ocupado a la hora ${horaOrigen}.`,
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
      msg: `${doc.nombre} ya está ocupado a la hora ${horaDestino}.`,
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

function arrastrarDocenteLista(ev, nombre) {
  window.__arrastreLista = nombre;
  ev.dataTransfer.setData("text/plain", nombre);
  ev.dataTransfer.effectAllowed = "copyMove";
}

function arrastrarDocente(ev, nombre, hora) {
  window.__arrastre = { nombre, hora };
  ev.dataTransfer.setData("text/plain", nombre);
  ev.dataTransfer.effectAllowed = "move";
}

function finArrastre() {
  window.__arrastre = null;
  window.__arrastreLista = null;
  document.querySelectorAll(".drop-ok, .drop-no").forEach((el) => el.classList.remove("drop-ok", "drop-no"));
}

function sobreCelda(ev, grupo, hora) {
  ev.preventDefault();
  const arrList = window.__arrastreLista;
  const arrGr = window.__arrastre;
  if (!arrList && !arrGr) return;

  let ok = false;
  if (arrList) {
    const r = evaluarMovimientoAsignacion(arrList, grupo, hora);
    ok = r.ok;
  } else if (arrGr) {
    const r = evaluarMovimiento(arrGr.nombre, arrGr.hora, grupo, hora);
    ok = r.ok;
  }

  const td = ev.currentTarget;
  td.classList.toggle("drop-ok", ok);
  td.classList.toggle("drop-no", !ok);
}

function salirCelda(ev) {
  if (ev.relatedTarget && ev.currentTarget.contains(ev.relatedTarget)) return;
  ev.currentTarget.classList.remove("drop-ok", "drop-no");
}

function soltarDocente(ev, grupoDestino, horaDestino) {
  ev.preventDefault();
  ev.currentTarget.classList.remove("drop-ok", "drop-no");

  const arrList = window.__arrastreLista;
  const arrGr = window.__arrastre;
  window.__arrastre = null;
  window.__arrastreLista = null;

  if (!requiereSesion()) return;

  if (arrList) {
    const r = evaluarMovimientoAsignacion(arrList, grupoDestino, horaDestino);
    if (!r.ok) {
      mostrarAviso(r.msg, "error");
      return;
    }
    r.aplicar();
    ultimoAjuste = null;
    docenteSeleccionado = arrList;
    mostrarAviso(`${arrList} asignado a ${codigoEspaciado(grupoDestino)}, hora ${horaDestino}.`, "ok");
    renderTodo();
  } else if (arrGr) {
    const r = evaluarMovimiento(arrGr.nombre, arrGr.hora, grupoDestino, horaDestino);
    if (r.silencioso) return;
    if (!r.ok) {
      mostrarAviso(r.msg, "error");
      return;
    }
    r.aplicar();
    ultimoAjuste = null;
    docenteSeleccionado = arrGr.nombre;
    mostrarAviso(`${arrGr.nombre} → ${codigoEspaciado(grupoDestino)}, hora ${horaDestino}.`, "ok");
    renderTodo();
  }
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
  let html = `<h4>Docentes libres por hora</h4>`;
  HORAS.forEach((h) => {
    const libres = docentesDisponibles(edicionDia, h, edicionSede);
    if (libres.length === 0) return;
    html += `<div class="bloque-hora"><strong>Hora ${h}</strong><ul>`;
    libres.forEach((d) => {
      html += `<li>
        <span class="chip-docente chip-disponible" draggable="true"
              ondragstart="arrastrarDocenteLista(event,'${esc(d.nombre)}')"
              ondragend="finArrastre()"
              onclick="clicDocenteLista('${esc(d.nombre)}')"
              title="Arrastra directamente a cualquier celda">
          ${d.nombre} <small>(${permanenciaDia(d, edicionDia)}h hoy)</small>
        </span>
      </li>`;
    });
    html += `</ul></div>`;
  });
  cont.innerHTML = html;
}

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
    const bloqueada = !claseSede && !esLibre(actual);
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
  html += `</tbody></table></div>`;

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
  mostrarAviso(`${nombre} agregado/a. Arrastra su tarjeta o haz clic para asignarle grupos.`, "ok");
  renderTodo();
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

function calcularAjuste(sede, dia) {
  const grupos = gruposDeSede(sede);
  const gset = new Set(grupos);
  const lecciones = {};
  const actual = {};
  const fijo = new Map();
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

  const n = {};
  for (const g of grupos) {
    n[g] = 0;
    lecciones[g].forEach((c) => (n[g] += c));
    if (n[g] > HORAS.length) {
      return {
        ok: false,
        msg: `El grupo ${g} tiene más clases que horas disponibles.`,
      };
    }
  }

  const yaOrdenado = grupos.every((g) => {
    const horasConClase = HORAS.filter((h) => actual[g][h]);
    return (
      horasConClase.length === n[g] &&
      horasConClase.every((h, i) => h === HORAS.length - n[g] + 1 + i)
    );
  });
  if (yaOrdenado) return { ok: true, yaOrdenado: true, cambios: 0 };

  const restante = {};
  grupos.forEach((g) => (restante[g] = new Map(lecciones[g])));
  const usado = {};
  HORAS.forEach((h) => (usado[h] = new Set()));
  const asign = new Map();
  const pendientes = new Set();
  grupos.forEach((g) => {
    for (let h = HORAS.length - n[g] + 1; h <= HORAS.length; h++) pendientes.add({ g, h });
  });

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

  let nodos = 0;
  let limite = 250000;
  const EXTRA_MEJORA = 40000;
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
      return costo === 0;
    }
    if (++nodos > limite) {
      agotado = true;
      return false;
    }
    let mejor = null;
    let mejorLista = null;
    const ofertaGrupo = {};
    const ofertaHoras = new Map();
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
      msg: "No fue posible ajustar automáticamente debido a conflictos de cruce de horario.",
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
          if (gset.has(c)) d.horario[dia][i] = "A.P.";
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
    mostrarAviso("El horario ya está organizado.", "ok");
    return;
  }
  ultimoAjuste = {
    sede: edicionSede,
    dia: edicionDia,
    snap: DOCENTES.map((d) => ({ d, slots: d.horario[edicionDia].slice() })),
  };
  r.aplicar();
  mostrarAviso(`Horario ajustado: ${r.cambios} bloque(s) reubicado(s).`, "ok");
  renderTodo();
}

function deshacerAjuste() {
  if (!ultimoAjuste) return;
  if (!requiereSesion()) return;
  const { dia, snap } = ultimoAjuste;
  snap.forEach(({ d, slots }) => {
    d.horario[dia] = slots.slice();
  });
  ultimoAjuste = null;
  mostrarAviso("Se deshizo el último ajuste.", "ok");
  renderTodo();
}

function cambiarSedeEdicion(sede) {
  edicionSede = sede;
  renderEdicion();
}
function cambiarDiaEdicion(dia) {
  edicionDia = dia;
  renderEdicion();
}

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
    alert("La librería para Word aún no ha cargado.");
    return;
  }
  const blob = window.htmlDocx.asBlob(html, { orientation: id === "edicion" ? "portrait" : "landscape" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `horario-${id}.docx`;
  a.click();
  cerrarExport();
}

function exportarConsolidadoExcel() {
  if (!window.XLSX) {
    alert("Librería Excel no cargada.");
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
  ws["!cols"] = [{ wch: 4 }, { wch: 9 }, { wch: 34 }, ...Array(30).fill({ wch: 8 })];

  const ultimaCol = 32;
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
  console.warn("Supabase no configurado:", e);
}

let sesionUsuario = null;

function requiereSesion() {
  if (!supabaseClient) return true;
  if (!sesionUsuario) {
    alert('Debes iniciar sesión para hacer modificaciones.');
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
    errorEl.textContent = "Base de datos no configurada.";
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
  if (!supabaseClient) return;
  const nombre = document.getElementById("input-nombre-guardar").value.trim();
  if (!nombre) {
    msg.textContent = "Escribe un nombre.";
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
    msg.textContent = "Error: " + error.message;
  } else {
    msg.textContent = `Guardado como "${nombre}".`;
    listarHorariosBD();
  }
}

async function listarHorariosBD() {
  const cont = document.getElementById("lista-horarios-guardados");
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("tabla_horarios")
    .select("nombre, actualizado_en, actualizado_por")
    .order("actualizado_en", { ascending: false });
  if (error) {
    cont.innerHTML = `<p class="ayuda">Error: ${error.message}</p>`;
    return;
  }
  if (!data || data.length === 0) {
    cont.innerHTML = '<p class="ayuda">No hay horarios guardados.</p>';
    return;
  }
  cont.innerHTML = data
    .map(
      (h) => `
    <div class="fila-horario-guardado">
      <div>
        <strong>${h.nombre}</strong>
        <div class="ayuda">Actualizado: ${new Date(h.actualizado_en).toLocaleString("es-CO")}</div>
      </div>
      <button onclick="cargarHorarioBD('${h.nombre.replace(/'/g, "\\'")}')">Cargar</button>
    </div>`
    )
    .join("");
}

async function cargarHorarioBD(nombre) {
  if (!supabaseClient) return;
  if (!confirm(`¿Cargar "${nombre}"?`)) return;
  const { data, error } = await supabaseClient.from("tabla_horarios").select("datos").eq("nombre", nombre).single();
  if (error || !data) return;
  DOCENTES.length = 0;
  ultimoAjuste = null;
  docenteSeleccionado = null;
  data.datos.forEach((d) => DOCENTES.push(d));
  renderTodo();
  cerrarGuardarCargar();
}

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