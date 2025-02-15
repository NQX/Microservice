import React, { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';


function signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   // const [errors, setErrors] = useState([]);
   const { doRequest, errors } = useRequest({
       url: 'api/users/signup',
       method: 'post',
       body: {
           email, password
       },
       onSucess: () => Router.push('/')
   })


    const onSubmit = async (event) => {
        event.preventDefault();

        await doRequest();

    }


    return (
        <form onSubmit={onSubmit} >
            <h1>signup</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="form-control" 
                    type="text"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    className="form-control" 
                    type="password"
                />
            </div>

            {errors}

            <button className="btn btn-primary">Sign Up</button>
        </form>
    )
}

export default signup
