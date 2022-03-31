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
        
    }
}

module.exports = new Database()
