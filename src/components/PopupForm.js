import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const PopupForm = (props) => {
    // form state
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/formtotable', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data inserted successfully');
                }
            })
        props.data();
    };

    console.log(watch("example"));
    return (
        <>
            <form className='form-body' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("name", { required: true })} placeholder="Name" />
                {errors.name && <span className='text-danger ms-2'>Name field is required</span>}<br />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("phone", { required: true })} placeholder="Phone no" />
                {/* errors will return when field validation fails  */}
                {errors.phone && <span className='text-danger ms-2'>Phone field is required</span>}<br />

                <input {...register("email", { required: true })} placeholder="E-mail" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className='text-danger ms-2'>Email field is required</span>}<br />

                <input {...register("hobby", { required: true })} placeholder="Hobby" />
                {/* errors will return when field validation fails  */}
                {errors.hobby && <span className='text-danger ms-2'>Hobby field is required</span>}<br />

                <input className='btn btn-primary' type="submit" />
            </form>
        </>
    );
};

export default PopupForm;