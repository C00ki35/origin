import React, { Component } from 'react';
import SignIn from '../../components/signIn/SignIn';
import './sign-up-out.scss';


class SignUpOut extends Component {
    render() {
        return (
            <div className='sign-in-out'>
                <SignIn />
            </div>
        );
    }
}

export default SignUpOut;