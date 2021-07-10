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
    <section className={form.content}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={form.divide}>
          <input 
            type="text" 
            placeholder="Name" 
            {...register("name", {required: true})}
            className={input.field} 
          />
        </div>

        <hr className="border-t-2 p-1" />

        <div className={form.divide}>
          <input 
            type="email" 
            placeholder="Email Address" 
            {...register("email", {required: true})}
            className={input.field}  
          />
        </div>

        <hr className="border-t-2 p-1" />

        <div className={form.divide}>
          <select 
            {...register("Basic Pack - Free", { required: true })}
          className={input.field} 
          >
            <option value="basic">Basic Pack Free</option>
            <option value="pro">Pro Pack $9.99</option>
            <option value="ultimate">Ultimate Pack $19.99</option>
          </select>
        </div>

        <hr className="border-t-2 p-1" />

        <div className={form.divide}>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            {...register("Phone", {required: true})}
            className={input.field} 
          />
        </div>

        <hr className="border-t-2 p-1" />

        <div className={form.divide}>
          <input 
            type="text" 
            placeholder="Company" 
            {...register("company", {required: true})}
            className={input.field}  
          />
        </div>

        <hr className="border-t-2 p-1" />

        <input 
          type="submit" 
          value="Get on the list"
          className={button.one} />
    </form>
  </section>
  )
};

export default UserForm;