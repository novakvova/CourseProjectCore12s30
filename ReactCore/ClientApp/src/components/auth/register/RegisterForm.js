import React, { Component } from 'react';
import classnames from 'classnames';

class RegisterForm extends Component {
    state = { 
        errors: {
            email: ''
        }
     }
    render() { 
        return ( 
            <form>
                <h1 className="text-center">Реєстрація</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className={classnames('form-control',{'is-invalid': !!this.state.errors.email})}
                        name="email"
                    />
                </div>
            </form>
         );
    }
}
 
export default RegisterForm;