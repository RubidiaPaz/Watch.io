function handleError(erro) {
    switch (erro) {
      case "Firebase: Error (auth/user-not-found).":
        return 'Correo/Usuario no encontrado'


      default:
        return erro
        
    }
}
export default handleError