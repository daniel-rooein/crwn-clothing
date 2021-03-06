import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomerButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmedPassword } = this.state;

        if (password !== confirmedPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmedPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmedPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Display Name"
                        handleChange={this.handleChange}
                        required>
                    </FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="email"
                        handleChange={this.handleChange}
                        required>
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="password"
                        handleChange={this.handleChange}
                        required>
                    </FormInput>
                    <FormInput
                        type="password"
                        name="confirmedPassword"
                        value={confirmedPassword}
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        required>
                    </FormInput>
                    <CustomerButton type="submit">SIGN UP</CustomerButton>
                </form>
            </div>
        )
    }
}

export default SignUp;