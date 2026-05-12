import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from '../assets/logo.png'
import truckLogo from '../assets/truck.png'

function Login() {

    const navigate = useNavigate();
	  const {
		register,
		handleSubmit,
		formState: { errors }
	  } = useForm();

	  const onSubmit = (data) => {
		navigate("/dashboard");
		console.log(data);
	  };

	return (
		<div className="login-wrapper">
			
			<div className="login-card">

				<div className="login-logo">
					<img src={logo} alt="Logo SSPR" className="logo" />
				</div>
			
				<div className="card">
					<h1 className="title">
						SSPR <br />
						Sistema de seguimiento de Pedidos y Rutas
					</h1>

					<div className="subtitle">
						Inicio de Sesión
					</div>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<input type="email" className="form-control" {...register("email", {required: "El email es obligatorio" })} placeholder="Correo" />
						</div>
						
						{errors.password && (
						  <p classNameName="text-danger">
							{errors.email.message}
						  </p>
						)}
						
						<div className="mb-3">
							<input type="password" className="form-control" {...register("password", {required: "La contraseña es obligatoria", minLength: { value: 6, message: "Mínimo 6 caracteres"} })} placeholder="Contraseña" />
						</div>
						
						{errors.password && (
						  <p classNameName="text-danger">
							{errors.password.message}
						  </p>
						)}

						<div className="mb-3">
							<select className="form-select">
								<option selected disabled>
									Seleccionar Rol...
								</option>

								<option>Administrador</option>
								<option>Supervisor</option>
								<option>Conductor</option>
							</select>
						</div>

						<div className="truck-area">
							<img src={truckLogo} alt="Camión" />
						</div>

						<button type="submit" className="btn btn-login">
							INGRESAR
						</button>

					</form>

				</div>
				
			</div>

		</div>

	);
}

export default Login;