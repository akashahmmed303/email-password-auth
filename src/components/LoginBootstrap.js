import React from 'react';
import { Link } from 'react-router-dom';

const LoginBootstrap = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const email = form.email;
    const password = form.password;
    console.log(email, password);
  };

  return (
    <div className='w-50 mx-auto'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-success'>Please Login !!</h3>
        <div className='mb-3'>
          <label for='formGroupExampleInput' className='form-label'>
            Example label
          </label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Your Email'
            required
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Another label
          </label>
          <input
            type='password'
            name='password'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Your Password'
            required
          />
        </div>
        <button class='btn btn-primary' type='submit'>
          Login
        </button>
      </form>
      <p>
        <small>
          New to this website? Please <Link to='/register'>Register</Link>
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
