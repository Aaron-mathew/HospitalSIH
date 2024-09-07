import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Design/Login.css'
import UserHome from './UserHome';
import Navbar from './Navbar';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        axios.defaults.withCredentials = true;
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Please fill in both email and password to login');
        }
        else {
            axios.post("http://localhost:3000/login", {
                email,
                password,
            }).then(response => {
                if (response.data.status) {
                    navigate("/home")
                }
                else {
                    setError(response.data.message);
                }

            }).catch((err) => {
                if (err.response.status === 401) {
                    // setError(`Not registered at ${email}`);
                    setError(err.response.data.message);
                } else {
                    console.error(err);
                }
            })
        }
    }
    return (
        <>
            <Navbar />
            <div className='sign-up-container'>
                <Link className="mgt" to="/MgtLogin" >Login as a <span>Hospital?</span></Link>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <h1>User Login</h1>
                    <input type='email' autoComplete='off' placeholder='Email' style={{ marginBottom: '20px' }}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input type='password' placeholder='password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <p>Forgot Password</p>
                    <p>Don't Have Account? <Link to="/signup">Sign Up</Link></p>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type='submit'>   <Link to='/UserHome' >Login</Link>   </button>
                </form>
            </div>    </>

    )
}
export default Login;
