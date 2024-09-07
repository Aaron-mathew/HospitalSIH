import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import '../Design/Signup.css'
import Navbar from './Navbar';
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError('Please fill in all fields')
        } else {
            axios.post('http://localhost:3000/auth/signup', {
                username,
                email,
                password,
            }).then(response => {
                if (response.data.status) {
                    navigate("/home");  
                }
            }).catch((err) => {
                console.log(err);
              
            });
        }
    }
    return (
        <> 
        <Navbar />
         <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                
                <h1>Signup</h1> 
                <input type='text' placeholder='Username' style={{ marginBottom: '20px' }}
                    onChange={(e) => setUsername(e.target.value)} />
                <input type='email' autoComplete='off' placeholder='Email' style={{ marginBottom: '20px' }}
                    onChange={(e) => setEmail(e.target.value)} />

               
                <input type='password' placeholder='Enter Password' style={{ marginBottom: '20px' }} 
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'> Sign Up </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Already have an Account? <Link to="/login">Login</Link></p>
                <p className='text-red-700 '>To register as a hospital, email us at registrations@healio.com</p>
            </form>
        </div></>
       
    )
}
export default Signup;