import axios from 'axios';
const URI = 'https://front-end-test-u2ogfqvoga-ew.a.run.app'; 
type SignupPayload = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}
export default function useAuth() {
    const signup = async (payload: SignupPayload, cb: (error: string) => void) => {
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
            cb((err as any).response.data);
        }
    }

    // Add functions chekEmailAvailability and checkUsernameAvailability here
    

    return {
        signup
    }

}