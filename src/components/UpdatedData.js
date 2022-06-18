import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './Header';
import './UpdateData.css';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const UpdatedData = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        /* console.log(data);
        axios.post('https://safe-journey-03403.herokuapp.com/formtotable', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data inserted successfully');
                    getData();
                }
            })
        // props.data();
        handleClose(); */
    };

    return (
        <div>
            <Header />
            <div className='container'>
                <h3 className='text-center mt-5'>Excuse me sir, Data updating functionality is developing yet</h3>
                <Link to="/"><button className='btn btn-dark text-info rounded-pill btn-sm py-2 px-3'><span className='fs-5'><BiArrowBack /></span>Go Back</button></Link>
                <form className='form-body w-50 my-5 mx-auto ' onSubmit={handleSubmit(onSubmit)}>
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
            </div>
        </div>
    );
};

export default UpdatedData;