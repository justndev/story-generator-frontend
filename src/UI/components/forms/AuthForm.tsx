import textInputFabric from "../textInputs/textInputFabric";
import {useState} from "react";
import Label from "../labels/Label";
import FilledButton from "../buttons/FilledButton";
import DoubledFormButton from "../buttons/DoubledButton";
import {authApi} from "../../../api/AuthApi";
import AnimatedAlert from "../animated/AnimatedAlert";
import {animated} from "@react-spring/web";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../../utils/redux/userSlice";
import {useNavigate} from "react-router-dom";


const AuthForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLogInOpened, setLogInOpened] = useState(true);
    const [showSignupAlert, setShowSignupAlert] = useState(false);
    const [showLoginAlert, setShowLoginAlert] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const EmailInput = textInputFabric(email, setEmail, 'email', emailError)
    const FirstNameInput = textInputFabric(firstName, setFirstName, 'firstName', firstNameError)
    const LastNameInput = textInputFabric(lastName, setLastName, 'lastName', lastNameError)
    const PasswordInput = textInputFabric(password, setPassword, 'password', passwordError)
    const ConfirmPasswordInput = textInputFabric(confirmPassword, setConfirmPassword, 'confirmPassword', confirmPasswordError)

    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^.{8,}$/;

    async function onAuthSubmit() {
        if (isLogInOpened) {
            const isEmailValid = checkEmail()
            const isPasswordValid = checkPassword()
            try {
                if (isEmailValid && isPasswordValid) {
                    const responseData = await authApi.login(email, password)
                    if (responseData.jwt) {
                        dispatch(loginSuccess(responseData))
                        navigate('/service')

                    }
                }
            } catch (e) {
                setShowLoginAlert(true);
            }

        } else {
            const isEmailValid = checkEmail()
            const isPasswordValid = checkPassword()
            const isConfirmPasswordValid = checkConfirmPassword()
            const isFirstNameValid = checkFirstName()
            const isLastNameValid = checkLastName()

            if (isEmailValid && isPasswordValid && isConfirmPasswordValid && isFirstNameValid && isLastNameValid) {
                const responseData = await authApi.signup(email, firstName, lastName, password)
                if (responseData == 'success') {
                    setShowSignupAlert(true);
                    clearAll()
                }

            } else {
                console.log("error");

            }
        }
    }

    function onFormChange() {
        setShowSignupAlert(false);
        setShowLoginAlert(false);
        clearAll()
        setLogInOpened(!isLogInOpened);

    }

    function clearAll() {
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setConfirmPassword('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setFirstNameError('');
        setLastNameError('');
    }

    function checkEmail() {
        const result = EMAIL_REGEX.test(email);
        if (!result) {
            setEmailError("Invalid email address");
            return false;
        } else {
            setEmailError('');
            return true;
        }
    }

    function checkPassword() {
        const result = PASSWORD_REGEX.test(password);
        if (!result) {
            setPasswordError("Password must contain at least 8 characters");
            return false;
        } else {
            setPasswordError('');
            return true;

        }
    }

    function checkConfirmPassword() {
        const result = password === confirmPassword;
        if (!result) {
            setConfirmPasswordError("Passwords must match");
            return false;
        } else {
            setConfirmPasswordError('');
            return true;
        }
    }

    function checkFirstName() {
        if (firstName.length === 0) {
            setFirstNameError('First name must not be empty!');
            return false;
        } else {
            setFirstNameError('');
            return true;
        }
    }

    function checkLastName() {
        if (lastName.length === 0) {
            setLastNameError('First name must not be empty!');
            return false;
        } else {
            setLastNameError('');
            return true;
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
        // @ts-ignore
        <div style={formStyles}>
            <DoubledFormButton isLogInOpened={isLogInOpened} onChange={onFormChange}/>
            {isLogInOpened ?
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center'
                }}>
                    <Label label={'Email'}/>
                    {EmailInput}
                    <Label label={'Password'}/>
                    {PasswordInput}
                    <AnimatedAlert isVisible={showLoginAlert} message={"Invalid credentials or user does not exist"} type={'error'}/>

                </div>
                :
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%',}}>
                    <Label label={'Email'}/>
                    {EmailInput}
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'flex-start'}}>
                            <Label label={'First name'}/>
                            {FirstNameInput}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'flex-start'}}>
                            <Label label={'Last name'}/>

                            {LastNameInput}
                        </div>
                    </div>


                    <Label label={'Password'}/>
                    {PasswordInput}
                    <Label label={'Confim Password'}/>
                    {ConfirmPasswordInput}
                    <AnimatedAlert isVisible={showSignupAlert} message={"Check your email box!"} />

                </div>
            }
            <FilledButton label={isLogInOpened ? 'Log in' : 'Sign Up'} onClick={onAuthSubmit}/>
        </div>
    )
}

export default AuthForm;
