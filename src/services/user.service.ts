import { ISignin, ISignup } from '../interfaces';
import http from './http';

class UserService {
	static signin(data: ISignin) {
		return http.post('/user/sign-in', data);
	}
	static signup(data: ISignup) {
		return http.post('/user/sign-up', data);
	}
	static getUserByToken(token: string) {
		return http.get(`user/token/${token}`);
	}
}
export default UserService;
