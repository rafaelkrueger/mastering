/* eslint-disable no-unused-vars */
import UserService from '../../services/user.service';

// eslint-disable-next-line @typescript-eslint/no-shadow
export const signin = (signin: any) => async (dispatch: any) => {
	dispatch({
		type: 'signin',
	});

	try {
		const { data } = await UserService.signin(signin);
		const { accessToken } = data;

		dispatch({
			type: 'signin-success',
			payload: { accessToken },
		});
	} catch (err: any) {
		dispatch({
			type: 'signin-error',
			payload: err.message,
		});
	}
};
