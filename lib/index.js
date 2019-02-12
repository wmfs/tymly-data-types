const domains = require('./data/domain-list')
const categories = require('./data/categories-list')
const dataTypes = require('./data/data-types')

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

function _getDataItemsByCategoryName (categoryName) {
  return dataTypes.filter(
    (dataType) => {
      return dataType.category === categoryName
    }
  )
}

function _filterCategoriesByDomain (arr, domainRestriction) {
  let filteredArray = arr
  if (domainRestriction && domainRestriction.length > 0) {
    filteredArray = filteredArray.filter(
      (value) => {
        let allDomains = []
        const categoryName = value.name
        const dataItemsInCategory = _getDataItemsByCategoryName(categoryName)
        dataItemsInCategory.forEach(
          (category) => {
            if (category.domains) {
              allDomains = allDomains.concat(category.domains)
            }
          }
        )
        return domainRestriction.some(r => allDomains.includes(r))
      }
    )
  }
  return filteredArray
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
  if (sortFunctions.hasOwnProperty(sortName)) {
    return arr.sort(sortFunctions[sortName])
  } else {
    throw new Error(`Unknown sort option '${sortName}'`)
  }
}

module.exports.getDomains = function getDomains (options) {
  let domainArray = JSON.parse(JSON.stringify(domains))
  if (options) {
    domainArray = _searchArray(domainArray, options.filterString)
    domainArray = _sortArray(domainArray, options.sort || 'seq')
  } else {
    domainArray = _sortArray(domainArray, 'seq')
  }
  return domainArray
}

module.exports.getCategories = function getCategories (options) {
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

module.exports.getDataTypes = function getDataTypes (options) {
  let dataTypesArray = JSON.parse(JSON.stringify(dataTypes))
  if (options) {
    if (options.category) {
      dataTypesArray = dataTypesArray.filter(
        (dataItem) => {
          return dataItem.category === options.category
        }
      )
    }
    dataTypesArray = _searchArray(dataTypesArray, options.filterString)
    dataTypesArray = _filterDataTypesByDomain(dataTypesArray, options.domainRestriction)
    dataTypesArray = _sortArray(dataTypesArray, options.sort || 'seq')
  } else {
    dataTypesArray = _sortArray(dataTypesArray, 'seq')
  }
  return dataTypesArray
}

module.exports.getDataTypeByName = function getDataTypeByName (dataTypeName) {
  let found
  dataTypes.forEach(
    dt => {
      if (dt.name === dataTypeName) {
        found = dt
      }
    }
  )
  return found
}

module.exports.getDataTypeNames = function getDataTypeNames () {
  return dataTypes.map(
    dt => {
      return dt.name
    }
  )
}
