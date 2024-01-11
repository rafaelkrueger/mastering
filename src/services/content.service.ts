import http from './http';

class ContentService {
	static create(data: any) {
		return http.post('content', data);
	}
	static update(data: any) {
		return http.patch(`/content`, data);
	}
	static delete(data: any) {
		return http.delete(`/content/${data}`);
	}

}
export default ContentService;
