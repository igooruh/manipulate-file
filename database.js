const {
    readFile,
    writeFile
} = require('fs')
const { promisify } = require('util')

/**
 * Another way of code
 * const readFileAsync = require('./heros.json')
 */
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {

    constructor() {
        this.FILE_NAME = 'heros.json'
    }

    async getDataFile() {
        const file = await readFileAsync(this.FILE_NAME, 'utf-8')

        return JSON.parse(file.toString())
    }

    async writeDataFile(data) {
        await writeFileAsync(this.FILE_NAME, JSON.stringify(data))

        return true
    }

    async register(hero) {
        const data = await this.getDataFile()

        const id = hero.id <= 2 ? hero.id : Date.now()

        const heroWithId = {
            id,
            nome: 'Batman',
            power: 'Not Had'
        }

        const dataFinal = [ ...data, heroWithId ]

        const result = await this.writeDataFile(dataFinal)

        return result
    }

    async list(id) {
        const data = await this.getDataFile()

        const dataFilter = data.filter(item => (id ? (item.id === id) : true))

        return dataFilter
    }
}

module.exports = new Database()
