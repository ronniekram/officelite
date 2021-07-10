import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { form, input, button } from '../../assets/styles';

const UserForm = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  React.useEffect(() => {
    const fields  = ["name", "email", "phone", "company"]

    fields.forEach(field => {
      setError(field, {
        types: {
          required: "This is required"
        }
      });
    })
  }, [setError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={form.content}>
      <input 
        type="text" 
        placeholder="Name" {...register("name", {required: true})} 
      />
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.required}</p>
      )}
   
      <input 
        type="email" 
        placeholder="Email" {...register("email", {required: true})} 
      />

      <select {...register("Basic Pro Back Free", { required: true })}>
        <option value="basic">Basic Pro Pack Free</option>
        <option value="pro">Pro Pack $9.99</option>
        <option value="ultimate">Ultimate Pack $19.99</option>
      </select>

      <input 
        type="tel" 
        placeholder="Phone Number" {...register("Phone", {required: true})} 
      />

      <input 
        type="text" 
        placeholder="Company" {...register("company", {required: true})} 
      />

      <input type="submit" value="Get on the list" />
  </form>
  )
};

export default UserForm;