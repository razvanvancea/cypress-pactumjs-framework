const { request, spec } = require('pactum');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('POST posts endpoint - Test suite', () => {
	before(async () => {
		request.setDefaultTimeout(10000);
	});

	it('Create new post', async () => {
		const REQUEST_BODY = {
			title: 'foo',
			body: 'lorem ipsum dolor sit amet',
		};

		await spec()
			.post(BASE_URL + '/posts')
			.withHeaders('Content-Type', 'application/json')
			.withJson(REQUEST_BODY)
			.expectStatus(201);
	});
});
