import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

  setLoading(true);

  setTimeout(() => {

    console.log(data);

    setLoading(false);

    navigate("/dashboard");

  }, 1500);
};

  return (
    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="mb-4 text-center">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "El email es obligatorio",

                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un email válido"
                }


              })}
            />

            {errors.email && (
              <p className="text-danger">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label>Contraseña</label>

            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres"
                }
              })}
            />

            {errors.password && (
              <p className="text-danger">
                {errors.password.message}
              </p>
            )}
          </div>

            <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
            >

            {loading ? "Ingresando..." : "Ingresar"}

            </button>

        </form>

      </div>

    </div>
  );
}

export default Login;