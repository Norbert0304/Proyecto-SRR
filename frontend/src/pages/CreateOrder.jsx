import { useForm } from "react-hook-form";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

function CreateOrder() {

    const { addOrder } = useContext(OrderContext);
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

  addOrder(data);

  alert("Pedido creado correctamente");

  navigate("/tracking");
};

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Crear Pedido
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">

            <label>Origen</label>

            <input
              type="text"
              className="form-control"
              {...register("origin", {
                required: "El origen es obligatorio"
              })}
            />

            {errors.origin && (
              <p className="text-danger">
                {errors.origin.message}
              </p>
            )}

          </div>

          <div className="mb-3">

            <label>Destino</label>

            <input
              type="text"
              className="form-control"
              {...register("destination", {
                required: "El destino es obligatorio"
              })}
            />

            {errors.destination && (
              <p className="text-danger">
                {errors.destination.message}
              </p>
            )}

          </div>

          <div className="mb-3">

            <label>Cliente</label>

            <input
              type="text"
              className="form-control"
              {...register("client", {
                required: "El cliente es obligatorio"
              })}
            />

            {errors.client && (
              <p className="text-danger">
                {errors.client.message}
              </p>
            )}

          </div>

          <div className="mb-3">

            <label>Descripción</label>

            <textarea
              className="form-control"
              rows="4"
              {...register("description", {
                required: "La descripción es obligatoria",
                minLength: {
                  value: 10,
                  message: "Mínimo 10 caracteres"
                }
              })}
            />

            {errors.description && (
              <p className="text-danger">
                {errors.description.message}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Crear Pedido
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateOrder;