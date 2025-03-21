import textInputFabric from "../textInputs/textInputFabric";
import {useEffect, useState} from "react";
import Label from "../labels/Label";
import FilledButton from "../buttons/FilledButton";
import DoubledFormButton from "../buttons/DoubledButton";

const AuthForm = () => {
    const [isLogInOpened, setLogInOpened] = useState(true);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const EmailInput = textInputFabric(email, setEmail, 'email', emailError)
    const PasswordInput = textInputFabric(password, setPassword, 'password', passwordError)
    const ConfirmPasswordInput = textInputFabric(confirmPassword, setConfirmPassword, 'confirmPassword', confirmPasswordError)

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^.{8,}$/;

    function onAuthSubmit(){
        if (isLogInOpened) {
            checkEmail()
            checkPassword()
            if (!emailError && !passwordError) {
                console.log("Success");
            }
        } else {
            checkEmail()
            checkPassword()
            checkConfirmPassword()
            if (!emailError && !passwordError && !confirmPasswordError) {
                console.log("Success");
            }
        }
    }

    function onFormChange() {
        clearAll()
        setLogInOpened(!isLogInOpened);
    }

    function clearAll() {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    }

    function checkEmail() {
        const result = EMAIL_REGEX.test(email);
        if (!result) {
            setEmailError("Invalid email address");
        } else {
            setEmailError('');
        }
    }

    function checkPassword() {
        const result = PASSWORD_REGEX.test(password);
        if (!result) {
            setPasswordError("Password must contain at least 8 characters");
        } else {
            setPasswordError('');
        }
    }

    function checkConfirmPassword() {
        const result = password === confirmPassword;
        if (!result) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError('');
        }
    }


    const formStyles: any = {
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
        width: '100%',
        paddingRight: '50px',
        paddingLeft: '50px',
        paddingTop: '25px',
        paddingBottom: '25px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }


    return (
        <div style={formStyles}>
            <DoubledFormButton isLogInOpened={isLogInOpened} onChange={onFormChange} />
            {isLogInOpened ?
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '300px', justifyContent: 'center'}}>
                    <Label label={'Email'}/>
                    {EmailInput}
                    <Label label={'Password'}/>
                    {PasswordInput}
                </div>
            :
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '300px'}}>
                    <Label label={'Email'}/>
                    {EmailInput}
                    <Label label={'Password'}/>
                    {PasswordInput}
                    <Label label={'Confim Password'}/>
                    {ConfirmPasswordInput}
                </div>
            }
            <FilledButton label={isLogInOpened ? 'Log in' : 'Sign Up'} onClick={onAuthSubmit}/>
        </div>
    )
}

export default AuthForm;
