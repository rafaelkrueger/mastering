import http from './http';

class TopicService {
	static create(data: any) {
		return http.post('/admin/topic', data);
	}
}
export default TopicService;
