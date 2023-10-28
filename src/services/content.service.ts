import http from './http';

class ContentService {
	static create(data: any) {
		return http.post('content', data);
	}
}
export default ContentService;
