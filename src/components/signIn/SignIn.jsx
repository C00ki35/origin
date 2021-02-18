import React, { Component } from 'react';
import FormInput from '../formInput/FormInput'
import Button from '../customButton/Button'
import './sign-in-styles.scss';

import {signInWithGoogle} from '../../firebase/firebase-utils';

class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
    
handleSubmit = event => {
    event.preventDefault();
    this.setState({email:'', password:''}) 
}

handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]:value});

}
    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    value={this.state.email}
                    required 
                    handleChange={this.handleChange}
                    label='Email'/>
                    
                    <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password}
                    required
                    handleChange={this.handleChange}
                    label='Password'
                    />
                    <div className='buttons'>
                        <Button type='submit'>Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;