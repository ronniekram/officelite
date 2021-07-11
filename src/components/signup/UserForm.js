import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from './Dropdown';
import { signup } from '../../assets/styles';

const options = [
  {type: 'Basic Pack', cost: 'Free'}, 
  {type: 'Pro Pack', cost: '$9.99'}, 
  {type: 'Ultimate Pack', cost: '$19.99'}];

const UserForm = () => {
  const [selected, setSelected] = useState(options[0]);
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
    <section>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={signup.form}
      >
        <div>
          <input 
            type="text" 
            placeholder="Name" 
            {...register("name", {required: true})}
            className={signup.input}
          />
        </div>

        <hr className="border-t-2 p-1" />

        <div>
          <input 
            type="email" 
            placeholder="Email Address" 
            {...register("email", {required: true})}
            className={signup.input}
          />
        </div>

        <hr className="border-t-2 p-1" />

        <div>
          <Dropdown selected={selected} setSelected={setSelected} options={options} />
        </div>

        <hr className="border-t-2 p-1" />

        <div>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            {...register("Phone", {required: true})}
            className={signup.input}
          />
        </div>

        <hr className="border-t-2 p-1" />

        <div>
          <input 
            type="text" 
            placeholder="Company" 
            {...register("company", {required: true})}
            className={signup.input}
          />
        </div>

        <hr className="border-t-2 p-1" />

        <input 
          type="submit" 
          value="Get on the list"
          className={signup.buttton}
         />
    </form>
  </section>
  );
};

export default UserForm;