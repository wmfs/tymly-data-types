/* eslint-env mocha */

'use strict'
const tymlyDataTypes = require('./../lib')
const chai = require('chai')
const expect = chai.expect

describe('Domain tests', function () {
  it('Get all domains without any options', function () {
    const domains = tymlyDataTypes.getDomains()
    expect(domains).to.have.length.gt(3)
  })

  it('Get all domains with empty options', function () {
    const domains = tymlyDataTypes.getDomains()
    expect(domains).to.have.length.gt(3)
  })

  it('Get all domains with term "Computer" (correct case)', function () {
    const domains = tymlyDataTypes.getDomains({ filterString: 'computer' })
    expect(domains).to.have.length.gt(0)
  })

  it('Fail getting a domains array with bad sort', function () {
    const domains = tymlyDataTypes.getDomains({ filterString: '!"£$}:' })
    expect(domains.length).to.eql(0)
  })

  it('Get an array sorted by seq', function () {
    const domains = tymlyDataTypes.getDomains({ sort: 'seq' })
    console.log(domains)
    // TODO: Somehow prove that worked?
  })

  it('Get an array sorted by seq', function () {
    const domains = tymlyDataTypes.getDomains({ sort: 'name' })
    console.log(domains)
    // TODO: Somehow prove that worked?
  })

  it('Get an array sorted by seq', function () {
    expect(function () {
      tymlyDataTypes.getDomains({ sort: 'badThing' })
    }).to.throw()
  })
})

describe('Category tests', function () {
  let totalCategoryCount
  it('Get all categories without any options', function () {
    const categories = tymlyDataTypes.getCategories()
    totalCategoryCount = categories.length
    expect(categories).to.have.length.gt(3)
  })

  it('Get all categories with empty options', function () {
    const categories = tymlyDataTypes.getCategories()
    expect(categories).to.have.length.gt(3)
  })

  it('Get all domains with term "reference"', function () {
    const domains = tymlyDataTypes.getCategories({ filterString: 'reference' })
    expect(domains.length).to.eql(1)
    expect(domains[0].name).to.eql('ref')
  })

  it('Get an empty array with nonsense filter', function () {
    const categories = tymlyDataTypes.getCategories({ filterString: '!"£$}:' })
    expect(categories.length).to.eql(0)
  })

  it('Get a categories array sorted by seq', function () {
    const categories = tymlyDataTypes.getCategories({ sort: 'seq' })
    console.log(categories)
    // TODO: Somehow prove that worked?
  })

  it('Get a categories array sorted by seq', function () {
    const domains = tymlyDataTypes.getCategories({ sort: 'name' })
    console.log(domains)
    // TODO: Somehow prove that worked?
  })

  it('Fail getting a categories array with bad sort', function () {
    expect(function () {
      tymlyDataTypes.getCategories({ sort: 'badThing' })
    }).to.throw()
  })

  it('get same number of categories when empty domainRestriction is used', function () {
    const categories = tymlyDataTypes.getCategories({ domainRestriction: [] })
    expect(categories.length).to.eql(totalCategoryCount)
  })

  it('get less categories when domainRestriction is set to "networking"', function () {
    const categories = tymlyDataTypes.getCategories({ domainRestriction: ['networking'] })
    expect(categories).length.to.be.lt(totalCategoryCount)
  })

  it('get no categories when domainRestriction is set to nonsense', function () {
    const categories = tymlyDataTypes.getCategories({ domainRestriction: ['!"£$}:'] })
    expect(categories.length).length.to.eql(0)
  })
})

describe('Data type tests', function () {
  let totalCategoryCount
  it('Get all data types without any options', function () {
    const dataTypes = tymlyDataTypes.getDataTypes()
    totalCategoryCount = dataTypes.length
    expect(dataTypes).to.have.length.gt(10)
  })

  it('Get all data types with empty options', function () {
    const dataTypes = tymlyDataTypes.getDataTypes()
    expect(dataTypes).to.have.length.gt(10)
  })

  it('Get all data types with term "url"', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ filterString: 'url' })
    expect(dataTypes.length).to.eql(1)
    expect(dataTypes[0].name).to.eql('url')
  })

  it('Get an empty array with nonsense filter', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ filterString: '!"£$}:' })
    expect(dataTypes.length).to.eql(0)
  })

  it('Get a dataTypes array sorted by seq', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ sort: 'seq' })
    console.log(dataTypes)
    // TODO: Somehow prove that worked?
  })

  it('Get a dataTypes array sorted by seq', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ sort: 'name' })
    console.log(dataTypes)
    // TODO: Somehow prove that worked?
  })

  it('Fail getting a dataTypes array with bad sort', function () {
    expect(function () {
      tymlyDataTypes.getDataTypes({ sort: 'badThing' })
    }).to.throw()
  })

  it('get same number of dataTypes when empty domainRestriction is used', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ domainRestriction: [] })
    expect(dataTypes.length).to.eql(totalCategoryCount)
  })

  it('get less categories when domainRestriction is set to "networking"', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ domainRestriction: ['networking'] })
    expect(dataTypes).length.to.be.lt(totalCategoryCount)
  })

  it('get no categories when domainRestriction is set to nonsense', function () {
    const dataTypes = tymlyDataTypes.getDataTypes({ domainRestriction: ['!"£$}:'] })
    expect(dataTypes.length).length.to.eql(0)
  })

  it('get just general text things', function () {
    const dataTypes = tymlyDataTypes.getDataTypes(
      {
        domainRestriction: ['general'],
        category: 'text'
      }
    )
    expect(dataTypes).to.have.length.gt(2)
    expect(dataTypes).to.have.length.lt(totalCategoryCount)
  })
})
