import React from 'react';
import { useForm } from 'react-hook-form';
import { signup } from '../../assets/styles';

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
    <section className={signup.form}>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="p-2"
      >
        <div className="py-1">
          <input 
            type="text" 
            placeholder="Name" 
            {...register("name", {required: true})}
            className={signup.input}
          />
          <hr className="border-t-2 p-1" />
        </div>


        <div className="py-1">
          <input 
            type="email" 
            placeholder="Email Address" 
            {...register("email", {required: true})}
            className={signup.input}
          />
          <hr className="border-t-2 p-1" />
        </div>

        <div className="py-1">
          <select 
              {...register("Basic Pack  Free", { required: true })}
              className={signup.select}
            >
              <option value="basic">Basic Pack Free</option>
              <option value="pro">Pro Pack $9.99</option>
              <option value="ultimate">Ultimate Pack $19.99</option>
            </select>
            <hr className="border-t-2 p-1" />
        </div>

        <div className="py-1">
          <input 
            type="tel" 
            placeholder="Phone Number" 
            {...register("Phone", {required: true})}
            className={signup.input}
          />

          <hr className="border-t-2 p-1" />
        </div>

        <div className="py-1">
          <input 
            type="text" 
            placeholder="Company" 
            {...register("company", {required: true})}
            className={signup.input}
          />

          <hr className="border-t-2 p-1" />
        </div>

        <input 
          type="submit" 
          value="Get on the list"
          className={signup.button}
         />
    </form>
  </section>
  );
};

export default UserForm;