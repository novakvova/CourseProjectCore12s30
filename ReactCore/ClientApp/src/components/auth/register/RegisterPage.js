import React, { Component } from 'react';
import './RegisterPage.css';
import RegisterForm from './RegisterForm.js';

class RegisterPage extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        isLoading: false,
        errors: {}
    }
    render() { 
        return ( 
            <div className="page">
                <RegisterForm/>
                
            </div> 
            );
    }
}
 
export default RegisterPage;