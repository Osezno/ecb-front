const pageInfo = {
  logo: "img/logo.png",
  cover: "img/home_background.jpg",
  icon: "img/icon.png",
  nombre: "<project>",
  welcomeMessage: "¡Ingresa tu nombre y elige el modelo de tu preferencia!",
  slogan: "Lorem Ipsum dolor amet",
  footerMessage: "© 2020 appName.",
}

const errors = {
  default: "Faltan datos",
  nombre: "La longitud del nombre no es correcta",
  serverError: "Estamos experimentando problemas, nuestros tecnicos estan trabajando para resolverlos."
}

const success = {
  userUpdated: "¡Usuario actualizado exitosamente!",
  login: "Sesión exitosa...",
  verified: "Sesión verificada...",
  logout: "Sesión cerrada.",
  recovery: "Contraseña actualizada.",
  emailSend: "¡Correo enviado! revisa tu bandeja de entrada."
}

const pages = {
  account: "Mi cuenta",
  dashboard: "Dashboard",
  profile: "Perfíl",
  users: "Usuarios",
  newUser: "Nuevo usuario",
  reports: "Reportes",
}

const inputs = {
    // buttons
    load:"Cargando",
    update:"Actualizar información",
    changePassword:"Cambiar contraseña",
    updatePassword:"Solicitar correo",
    login:"Iniciar sesión",
    // Labels
    password:"Contraseña",
    confirmPassword:"Confirmar Contraseña",
    name:"Nombre",
    tel:"Telefóno",
    email:"Correo",
    status:"Estatus",
    rol:"Rol",
}

const rol = {
  "1":"Admin",
  "2":"Manager",
  "3":"Associate"
}

const estatus = {
  "2":"Activo",
  "3":"Pendiente",
  "4":"Suspendido",
  "5":"Eliminado"
}

const Catalogs = {
  vertical:'bottom',
  horizontal:'center',
  inputStr:inputs,
  pageInfo: pageInfo,
  errors:errors,
  success: success,
  rol:rol,
  estatus:estatus,
  pages:pages
}

export default Catalogs;