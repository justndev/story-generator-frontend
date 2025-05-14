import axios from "axios";
const BACKEND_API = 'https://storygen.xyz/api';
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
            const dto = {
                email,
                firstName,
                lastName,
                password
            }
            console.log(`DEBUG: url: ${BACKEND_API+SIGNUP_ENDPOINT} dto: ${dto}`)

            const response = await axios.post(`${BACKEND_API}${SIGNUP_ENDPOINT}`, dto, {
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
