const domains = require('./data/domain-list.json')
const categories = require('./data/categories-list.json')
const dataTypes = require('./data/data-types.json')

const sortFunctions = {
  seq: function (a, b) { return a.seq - b.seq },
  name: function (a, b) {
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return 0
  }
}

function _searchArray (arr, filterString) {
  let filteredArray = arr
  if (filterString && filterString !== '') {
    const lowerCaseFilterString = filterString.toLowerCase()
    filteredArray = filteredArray.filter(
      (value) => {
        return value.name.toLowerCase().indexOf(lowerCaseFilterString) !== -1 ||
          value.title.toLowerCase().indexOf(lowerCaseFilterString) !== -1
      }
    )
  }
  return filteredArray
}

function _filterDataTypesByCategoryName (arr, categoryName) {
  if (!categoryName) return arr
  return arr.filter(dt => dt.category === categoryName)
}

function _filterCategoriesByDomain (arr, domainRestriction) {
  if (!domainRestriction || domainRestriction.length === 0) return arr

  return arr.filter(value => {
    let allDomains = []
    const categoryName = value.name
    const dataItemsInCategory = _filterDataTypesByCategoryName(dataTypes, categoryName)
    dataItemsInCategory.forEach(
      (category) => {
        if (category.domains) {
          allDomains = allDomains.concat(category.domains)
        }
      }
    )
    return domainRestriction.some(r => allDomains.includes(r))
  })
}

function _filterDataTypesByDomain (arr, domainRestriction) {
  let filteredArray = arr
  if (domainRestriction && domainRestriction.length > 0) {
    filteredArray = filteredArray.filter(
      (dataItem) => {
        if (dataItem.domains) {
          return domainRestriction.some(r => dataItem.domains.includes(r))
        } else {
          return false
        }
      }
    )
  }
  return filteredArray
}

function _sortArray (arr, sortName) {
  if (Object.prototype.hasOwnProperty.call(sortFunctions, sortName)) {
    return arr.sort(sortFunctions[sortName])
  } else {
    throw new Error(`Unknown sort option '${sortName}'`)
  }
}

function getDomains (options) {
  let domainArray = JSON.parse(JSON.stringify(domains))
  if (options) {
    domainArray = _searchArray(domainArray, options.filterString)
    domainArray = _sortArray(domainArray, options.sort || 'seq')
  } else {
    domainArray = _sortArray(domainArray, 'seq')
  }
  return domainArray
}

function getCategories (options) {
  let categoriesArray = JSON.parse(JSON.stringify(categories))
  if (options) {
    categoriesArray = _searchArray(categoriesArray, options.filterString)
    categoriesArray = _filterCategoriesByDomain(categoriesArray, options.domainRestriction)
    categoriesArray = _sortArray(categoriesArray, options.sort || 'seq')
  } else {
    categoriesArray = _sortArray(categoriesArray, 'seq')
  }
  return categoriesArray
}

function getDataTypes (options = {}) {
  let dataTypesArray = dataTypes
  dataTypesArray = _filterDataTypesByCategoryName(dataTypesArray, options.category)
  dataTypesArray = _searchArray(dataTypesArray, options.filterString)
  dataTypesArray = _filterDataTypesByDomain(dataTypesArray, options.domainRestriction)
  dataTypesArray = _sortArray(dataTypesArray, options.sort || 'seq')
  return dataTypesArray
}

function getDataTypeByName (dataTypeName) {
  return dataTypes.find(dt => dt.name === dataTypeName)
}

function getDataTypeNames () {
  return dataTypes.map(dt => dt.name)
}

function getCategoryDefaultDataTypeNames () {
  const categoryDefaults = {}
  dataTypes.forEach(
    dt => {
      if (dt.categoryDefault) {
        categoryDefaults[dt.category] = dt.name
      }
    }
  )
  return categoryDefaults
}

function getDataItemsByCategory (options) {
  const categories = {}
  const dataTypes = getDataTypes(options)
  dataTypes.forEach(
    dt => {
      if (!Object.prototype.hasOwnProperty.call(categories, dt.category)) {
        categories[dt.category] = []
      }
      categories[dt.category].push(dt)
    }
  )
  return categories
}

module.exports = {
  getDomains,
  getCategories,
  getDataTypes,
  getDataTypeByName,
  getDataTypeNames,
  getCategoryDefaultDataTypeNames,
  getDataItemsByCategory
}
