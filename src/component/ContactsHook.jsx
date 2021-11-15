import React from 'react'
import { useForm } from "react-hook-form"

function ContactsHook() {
    const {
        email,
        message,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="email" {...email("example")}/>
            <input {...message("exampleRequired", { required: true}) } />
            {errors.exampleRequired && <p>This field is required</p>}

            <input type="Envoyer"/>
            
        </form >
    )
}

export default ContactsHook
