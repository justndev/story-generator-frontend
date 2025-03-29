import axios from "axios";

const BACKEND_API = 'http://localhost:8080';
const LOGIN_ENDPOINT = "/api/auth/login";
const SIGNUP_ENDPOINT = "/api/auth/signup";


class AuthApi {
    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${BACKEND_API}${LOGIN_ENDPOINT}`, {email, password}, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (e) {
            console.error('@login', e);
            throw e;
        }
    }

    async signup(email: string, firstName: string, lastName: string, password: string) {
        // try {
        //     const response = await axios.get(`${BACKEND_API}/api/auth/check`)
        //     console.log(response.data);
        //
        // } catch (e) {
        // }
        try {
            const response = await axios.post(`${BACKEND_API}${SIGNUP_ENDPOINT}`, {
                email,
                firstName,
                lastName,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (e) {
            console.error('@signup', e);
            return (e as Error).message;
    }

    }
}

export const authApi = new AuthApi();
