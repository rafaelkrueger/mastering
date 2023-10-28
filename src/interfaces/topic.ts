export interface ITopic {
	_id?: string;
	name?: string;
	description?: string;
	image?: string;
	courseRelated?: string;
	videoUrl?: string;
	files?: Array<any>;
	resources?: Array<any>;
	content?: string;
	previous?: string;
	next?: string;
}
