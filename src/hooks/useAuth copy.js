// In order to use React components with TypeScript this import is required 
import axios from 'axios';
const URI = 'https://front-end-test-u2ogfqvoga-ew.a.run.app'; 

export default function useAuth() {
    const signup = async (payload, cb) => {
        const _pld = {
            username: 'test2',
            email: 'test@@gmail.com',
            password: '123123123',
            confirmPassword: '123123123'
        }
        try {
            await axios.post(`${URI}/user`, _pld);
            alert ('Signed Up!')
        } catch (err) {
            cb(err.response.data);
        }
    }

    return {
        signup
    }

}