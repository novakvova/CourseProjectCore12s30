import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

class RegisterForm extends Component {
    state = { 
        email: '111',
        password: '',
        image: 'http://www.unite-saintpaul.be/images/20/staffs/no-photo.jpg',
        
        errors: {
            email: '',
            password: ''
        }
     }
     handleChange= (e) => {
         this.setState({[e.target.name]: e.target.value})
     }

     selectImage = (e) => {
        this.inputPhoto.click();
     }
     onChangeSelectImage = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files && files[0]) {
            if (files[0].type.match(/^image\//)) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.setState({ image: reader.result });
                };
                reader.readAsDataURL(files[0]);
            }
            else {
                alert("Invalid file type");
            }
        }
        else {
            alert("Please select a file.");
        }
     }

     onSubmitForm = e => {
         e.preventDefault();
         const { email, password, image} = this.state;
         let errors = {};
         if (email === "") errors.email = "Поле не може бути пустим!";

         const isValid = Object.keys(errors).length === 0;
         if (isValid) {
             //Відправляємо запит на сервер
            axios.post('/api/Account/register',{email: 'asfasfd'})
                .then(
                    (res) => { console.log('---responce OK---'); },
                    (bad) => { console.log('---badRequest---'); } 
                );
         }
         else {
            this.setState({ errors });
        }
     }

    render() { 
        console.log('---this.state----', this.state);
        const { errors, email, password, image }= this.state;
        return ( 
            <form onSubmit={this.onSubmitForm}>
                <h1 className="text-center">Реєстрація</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className={classnames('form-control',{'is-invalid': !!errors.email})}
                        name="email" id="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    {!!errors.email ? <div className="invalid-feedback">{errors.email}</div> : ""}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className={classnames('form-control',{'is-invalid': !!errors.password})}
                        name="password" id="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    {!!errors.password ? <div className="invalid-feedback">{errors.password}</div> : ""}
                </div>
                <div className="form-group">

                    <img className="photo" src={image} onClick={this.selectImage}/>
                    <input type="file"
                        className="d-none"
                        name="image" id="image"
                        ref={input => this.inputPhoto = input}
                        onChange={this.onChangeSelectImage}
                    />
                    
                </div>
                <input type="submit" 
                    value="Реєструватися" 
                    className="btn btn-primary"/>
            </form>
         );
    }
}
 
export default RegisterForm;