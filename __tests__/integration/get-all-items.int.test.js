const request = require('supertest')

describe('Test getAllItemsHandler Integration', () => { 

    test('GET all items returns success', async (done) => {
        const baseUrl = process.env.BASE_URL

        request(baseUrl)
            .get('')
            .end(function(err, res) {
                expect(res.statusCode).toStrictEqual(200);
                expect(res.body).toStrictEqual([ { id: 'id1', name: 'name1' }, { id: 'id2', name: 'name2' } ]);
                if (err) {
                    throw err;
                }
                done();
            })
    })
})
