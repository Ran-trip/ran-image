import React from 'react'
import { useForm } from "react-hook-form"

function ContactsHook() {
    const {
        register,      
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input id="email" defaultValue="email" {...register("email")}/>
            <input id="message" {...register("message", { required: true}) } />
            {errors.message && <p>This field is required</p>}
            <input id="submit" type="submit"/>
            
        </form >
    )
}

export default ContactsHook
