import React from "react";
import { Formik, Form, Field , ErrorMessage } from "formik";

export const UserForm = () => {



    return ( 
        <div>
            <Formik
                initialValues={{
                    //valores iniciales
                    username: "",
                    lastname: "",
                    email: "",
                    password: "",
                }}
                validate={(values ) => {
                    let errors = {};
                    //validaciones
                    if(!values.username){
                        errors.username = "por favor ingrese un nombre"
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.username)){
                        errors.username = "el nombre solo puede contener letras y espacios"
                    }

                    //validacion correo
                    if(!values.email){
                        errors.email = "ingrese un email"
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                        errors.email = "ingrese un correo valido"
                    }
                    
                    return errors;

                }}
                //envio de datos
                onSubmit={(values, { resetForm }) => {
                    localStorage.setItem('user' , values.username);
                }}
            >
                {({ errors }) => (
                    <Form>
                        <Field
                            name="username"
                            type="text"
                            placeholder="username"
                        />
                        <ErrorMessage name="username" component={()=> (<p>{errors.username}</p>)} />
                        <Field
                            name="lastname"
                            type="text"
                            placeholder="lastname"
                        />
                        <Field name="email" type="text" placeholder="email" />

                        <ErrorMessage name="email" component={()=> (<p>{errors.email}</p>)} />
                        <Field
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <button type="submit">enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
