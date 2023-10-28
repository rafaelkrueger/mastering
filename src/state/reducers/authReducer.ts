interface AuthState {
	loading: boolean;
	error: string | null;
	data: { accessToken: string | null; modules: string[] };
}

const initialState = {
	loading: false,
	error: null,
	data: { accessToken: null, modules: [] },
};

const reducer = (state: AuthState = initialState, action: any): AuthState => {
	switch (action.type) {
		case 'signin':
			return { loading: true, error: null, data: state.data };
		case 'success':
			return { loading: false, error: null, data: action.payload };
		case 'error':
			return { loading: false, error: action.payload, data: initialState.data };
		default:
			return state;
	}
};

export default reducer;
