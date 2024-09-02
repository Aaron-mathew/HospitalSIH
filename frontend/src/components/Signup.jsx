import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import '../Design/Signup.css'
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
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                
                <input type='text' placeholder='Username' style={{ marginBottom: '20px' }}
                    onChange={(e) => setUsername(e.target.value)} />

              
                <input type='email' autoComplete='off' placeholder='Email' style={{ marginBottom: '20px' }}
                    onChange={(e) => setEmail(e.target.value)} />

               
                <input type='password' placeholder='Enter Password' style={{ marginBottom: '20px' }} 
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'> Sign Up </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Have an Account? <Link to="/">Login</Link></p>
            </form>
        </div>
    )
}
export default Signup