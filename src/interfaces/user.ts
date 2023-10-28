export interface IUser {
	_id?: string;
	email: string | undefined;
	cellphone: string | undefined;
	password: string | undefined;
	document: string | undefined;
	birthDate: string | undefined;
	zipCode: string | undefined;
	streetAndNumber: string | undefined;
	city: string | undefined;
	region: string | undefined;
	state: string | undefined;
	country: string | undefined;
	isTeacher: boolean | undefined;
	myCourse: Array<any>;
	relatedCourse: Array<any>;
	afiliatedCourse: Array<any>;
	token?: string;
}
