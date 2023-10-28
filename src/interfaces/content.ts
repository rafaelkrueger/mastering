export interface IContent {
	_id?: string;
	name?: string;
	description?: string;
	image?: string;
	topicRelated?: string;
	videoUrl?: string;
	files?: Array<any>;
	resources?: Array<any>;
	previous?: string;
	next?: string;
}
