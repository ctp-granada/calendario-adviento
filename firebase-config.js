// =====================================================================
//  CONFIGURACIÓN DEL CALENDARIO DE ADVIENTO · Bioquímica Enfermería UGR
// =====================================================================

// 1) Los datos del proyecto de Firebase están en firebase-applet-config.json
//    (ya rellenos: proyecto adviento-483c6). No hace falta tocarlos.
const resp = await fetch(new URL('./firebase-applet-config.json', import.meta.url));
if (!resp.ok) {
  throw new Error('No se pudo cargar firebase-applet-config.json');
}
export const firebaseConfig = await resp.json();

// 2) Ajustes del juego (esto sí lo puedes cambiar)
export const AJUSTES = {
  // Los alumnos entran con su cuenta de Google de la UGR (identidad real y
  // pueden seguir desde cualquier dispositivo). Es el único modo disponible.
  acceso: "google",

  // Dominios de correo admitidos. Déjalo vacío [] para admitir cualquiera.
  dominios: ["go.ugr.es", "correo.ugr.es", "ugr.es"],

  // Correos de los profesores que pueden entrar en profesor.html
  // (tienen que coincidir con los de firestore.rules).
  profesores: ["ctp@go.ugr.es"],

  // Grupos para que el alumno elija el suyo al entrar. [] = no se pregunta.
  grupos: ["Grupo B", "Grupo C", "Grupo Plan 2010"],

  // Clasificación de la clase visible para los alumnos (nombre + inicial del apellido).
  ranking: true,
  tamRanking: 10
};
