const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('Incident', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	it('should be able to create a new incident', async () => {
		const response = await request(app).post('/incidents').set('Authorization', 'dc4fbb77').send({
			title: 'Caso Teste',
			description: 'Deatlhes do caso',
			value: 120
		});

		expect(response.body).toHaveProperty('id');
	});
});
