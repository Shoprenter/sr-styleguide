const attribute = 'id'

const value = addVersionTo('sr-styleguide')

const selector = '#' + value

function addVersionTo (value) {
    const currentVersion = require('../../../package.json').version.toString()
    return value + '-' + currentVersion.replaceAll('.', '-')
}

module.exports = { attribute, value, selector }
