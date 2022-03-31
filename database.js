const { readFile } = require('fs')
const { promisify } = require('util')

/**
 * Another way of code
 * const readFileAsync = require('./heros.json')
 */
const readFileAsync = promisify(readFile)

class Database {

    constructor() {
        this.FILE_NAME = 'heros.json'
    }

    async getDataFile() {
        const file = await readFileAsync(this.FILE_NAME, 'utf-8')

        return JSON.parse(file.toString())
    }

    writeDataFile() {

    }

    async list(id) {
        const data = await this.getDataFile()

        const dataFilter = data.filter(item => (id ? (item.id === id) : true))

        return dataFilter
    }
}

module.exports = new Database()
