import axios from "axios";
const BACKEND_API = 'http://51.21.246.83/api';
const LOGIN_ENDPOINT = "/auth/login";
const SIGNUP_ENDPOINT = "/auth/signup";


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
