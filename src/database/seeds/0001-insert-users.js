'use strict'

const { v4: uuidv4 } = require('uuid')
const _ = require('lodash')

const data = [
  {
    name: 'Super Admin',
  },
  {
    name: 'Admin',
  },
  {
    name: 'Test User',
  },
]

const formData = []

if (!_.isEmpty(data)) {
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i]

    formData.push({
      ...item,
      id: uuidv4(),
    })
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', formData)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}