import AuthForm from "../UI/components/forms/AuthForm";
import Footer from "../UI/components/Footer";

const AuthPage = () => {
    return <div
        style={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', paddingTop: 100}}>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <AuthForm/>

        </div>
        <Footer/>
    </div>
}

export default AuthPage;
