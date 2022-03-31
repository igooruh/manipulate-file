const { deepEqual, ok } = require('assert')

const database = require('./database')

const DEFAULT_ITEM_REGISTER = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

describe('Suite of manipilation of heros', () => {

    it('should search a hero, using file', async () => {
        const expected = DEFAULT_ITEM_REGISTER

        // Destruct return first position
        const [result] = await database.list(expected.id)

        ok(result, expected)
    })
})
