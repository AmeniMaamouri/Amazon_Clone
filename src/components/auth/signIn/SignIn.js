import React, { useState, useContext } from 'react'
import './signIn.css'
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../../../config'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext';

const SignIn = () => {

    const [data, setData] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()
    const { user } = useContext(AuthContext)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                history.push('/')
            })
            .catch(err => setMessage(err.message))

    }


    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(res => {
                if (res) {
                    history.push('/')
                }
            })
            .catch(err => setMessage(err.message))
    }


    return (
        <div>
            {user ? <Redirect to="/" /> :
                <div className="login">
                    <Link to="/">
                        <img class="login__logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                    </Link>

                    <div class="login__container">
                        <h1>Sign in</h1>
                        <h5 style={{ textAlign: 'center', color: 'red', marginBottom: "15px" }}>{message && message}</h5>
                        <form onSubmit={handleSubmit}>
                            <h5>E-mail</h5>
                            <input type="email" name='email' value={data.email} onChange={handleChange} />
                            <h5>Password</h5>
                            <input type="password" name='password' value={data.password} onChange={handleChange} />
                            <button type="submit" class="login__signInButton">Sign In</button>
                        </form>
                        <p>By signing-in you agree to Amazon Clone Conditions of Use &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                        <button onClick={handleRegister} className="login__registerButton">Create your Amazon Account</button>
                    </div>

                </div>}
        </div>

    );
}

export default SignIn;