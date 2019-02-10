const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const stopText = require('./templates/stop-text')
const readmePath = path.resolve(__dirname, '../../', 'README.md')
const tymlyDataTypes = require('./../../lib')
console.log(`Generating README file at ${readmePath}`)

const data = {
  stopText: stopText,
  domains: tymlyDataTypes.getDomains({ sort: 'name' }),
  categories: tymlyDataTypes.getCategories({ sort: 'name' }),
  dataTypes: tymlyDataTypes.getDataTypes({ sort: 'name' }),
  prettyEnum: function prettyEnum (arr) {
    const parts = []
    if (arr) {
      arr.forEach(
        (value) => {
          parts.push('`' + value + '`')
        }
      )
    }
    return parts.join(', ')
  }
}

ejs.renderFile(
  path.resolve(__dirname, './templates/README.md.ejs'),
  data,
  {},
  function (err, md) {
    if (err) {
      console.error(err)
      throw new Error(err)
    } else {
      fs.writeFile(
        readmePath,
        md,
        (err) => {
          if (err) {
            console.error(err)
            throw new Error(err)
          } else {
            console.log('Done.')
          }
        }
      )
    }
  }
)
