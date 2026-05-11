export const login = async (credenciales) => {

  console.log("Login:", credenciales);

  return {
    token: "fake-jwt-token",
    usuario: {
      nombre: "Administrador",
      rol: "ADMIN",
    },
  };
};