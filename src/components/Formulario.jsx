import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Formulario = () => {
  const nuevoClienteSchema = Yup.object().shape({});
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto ">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <Form className="mt-10">
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="nombre">
                Nombre:
              </label>
              <Field
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="nombre"
                placeholder="Nombre del cliente"
                name="nombre"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="empresa">
                Empresa:
              </label>
              <Field
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="empresa"
                placeholder="Empresa del cliente"
                name="empresa"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                E-mail:
              </label>
              <Field
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="email"
                placeholder="E-mail del cliente"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="telefono">
                Telefono:
              </label>
              <Field
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                id="telefono"
                placeholder="Telefono del cliente"
                name="telefono"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="notas">
                Notas:
              </label>
              <Field
                as="textarea"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                id="notas"
                placeholder="Notas del cliente"
                name="notas"
              />
            </div>

            <input
              type={"submit"}
              value="Agregar Cliente"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
