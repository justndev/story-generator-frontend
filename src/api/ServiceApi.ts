import axios from "axios";

const BACKEND_API = 'http://51.21.246.83/api';
const GENERATE_ENDPOINT = '/story/generate';
const STATUS_ENDPOINT = '/story/status';
const DOWNLOAD_ENDPOINT = '/story/download';

class ServiceApi {
    async generate(jwt: string, bgVideoId: string, text: string, voice: string): Promise<any> {
        try {
            const response = await axios.post(`${BACKEND_API}${GENERATE_ENDPOINT}`, {bgVideoId, text, voice}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            });
            return response.data;
        } catch (e) {
            console.error('@generate', e);
            throw e;
        }
    }

    async checkStatus(jwt: string, uid: string): Promise<any> {


        try {
            const response = await axios.get(`${BACKEND_API}${STATUS_ENDPOINT}`, {
                params: {
                    uid
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                }
            });
            return response.data;
        } catch (e) {
            console.error('@generate', e);
            throw e;
        }
    }

    async download(jwt: string, uid: string): Promise<void> {
        try {
            console.log('Downloading for user:', uid);

            const response = await fetch(`${BACKEND_API}${DOWNLOAD_ENDPOINT}?fileName=${uid}.mp4`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${jwt}`
                }
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'story.mp4');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            throw error;
        }
    }


}

export const serviceApi = new ServiceApi();
