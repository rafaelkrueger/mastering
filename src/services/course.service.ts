import { IEnroll } from '../interfaces';
import http from './http';

class CourseService {
	static getCourseByUser(userId: any) {
		if (userId) {
			return http.get(`/admin/course/${userId}`);
		} else {
			return null;
		}
	}
	static createCourseByUser(data: any) {
		return http.post(`/admin/course`, data);
	}
	static enrollCourseByUser(data: IEnroll) {
		return http.post(`/course/enroll`, {userId:data.userId, courses:data.courses});
	}
}
export default CourseService;
