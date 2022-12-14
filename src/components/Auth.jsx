import React, { useState } from 'react';


export default function Auth() {
  const [form, setForm] = useState({});
  const changeHandler = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // console.log(form);

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      window.location.href = '/';
    }
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Login:</label>
          <input
            type="login"
            name="login"
            value={form.login}
            onChange={changeHandler}
            className="form-control"
          id="exampleInputEmail11"
          aria-describedby="emailHelp"
        />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
          <input
            type="password"
            value={form.password}
            onChange={changeHandler}
            name="password"
            className="form-control"
            id="exampleInputPassword11"
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}
