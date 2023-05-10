const { request, spec } = require('pactum');
const getCommentResponseSchema = require('../data/response/get-comment-schema.json');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('GET all comments endpoint Test suite', () => {
	before(async () => {
		request.setDefaultTimeout(10000);
	});

	it('GET all comments endpoint test', async () => {
		await spec()
			.get(BASE_URL + '/comments')
			.expectStatus(200)
			.expectBodyContains('id labore ex et quam laborum')
			.expectJsonSchema(getCommentResponseSchema);
	});
});
