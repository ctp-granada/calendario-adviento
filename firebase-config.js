// =====================================================================
//  CONFIGURACIÓN DEL CALENDARIO DE ADVIENTO · Bioquímica Enfermería UGR
//  Este es el ÚNICO archivo que tienes que editar.
// =====================================================================

// 1) Pega aquí los datos de tu app web de Firebase
//    (Consola de Firebase → ⚙️ Configuración del proyecto → Tus apps → SDK → "Config")
export const firebaseConfig = {
  apiKey: "PEGA_AQUI_TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

// 2) Ajustes del juego
export const AJUSTES = {
  // "google": los alumnos entran con su cuenta de Google de la UGR (recomendado:
  //           identidad real y pueden seguir desde cualquier dispositivo).
  // "nombre": escriben nombre y correo, sin contraseña (más sencillo, pero el
  //           progreso queda ligado a ese navegador y cualquiera puede escribir
  //           el nombre de otro).
  acceso: "google",

  // Dominios de correo admitidos. Déjalo vacío [] para admitir cualquiera.
  dominios: ["go.ugr.es", "correo.ugr.es", "ugr.es"],

  // Correos de los profesores que pueden entrar en profesor.html
  // (tienen que coincidir con los de firestore.rules).
  profesores: ["TU_CORREO@go.ugr.es"],

  // Grupos para que el alumno elija el suyo al entrar. [] = no se pregunta.
  grupos: ["Grupo A", "Grupo B", "Grupo C"],

  // Clasificación de la clase visible para los alumnos (nombre + inicial del apellido).
  ranking: true,
  tamRanking: 10
};
