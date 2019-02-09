# tymly-data-types

> A library of data types often found in digital services.

## <a name="install"></a>Install
```bash
$ npm install @wmfs/tymly-data-types --save
```

## <a name="usage"></a>Usage

```javascript
const dataTypes = require('@wmfs/tymly-data-types')
```

## API

### `getDomains(options)`

In **tymly-data-types**, specialist data-types are grouped into *domains* so that they can be included/excluded in user interfaces as-and-when appropriate.
Use the `getDomains()` method to get an array of available domains, for example:

``` javascript
const domains = tymlyDataTypes.getDomains()

// domains:
// [
//   {
//     seq: 0,
//     name: 'general',
//     label: 'General'
//   },
//   {
//     seq: 10,
//     name: 'networking',
//     label: 'Computer networking'
//   },
//   {
//     seq: 100,
//     name: 'frs',
//     label: 'Fire and Rescue Services'
//   }
// ]

```

* Note a single data-type can feature in multiple domains.
* Note the `general` domain is used to signpost typical/generic/general data-items and should be considered the "base" set of data-items onto which more specialist domains can be added.

#### Options

Supply `options` as an object with the following keys (note all of this is optional):

| Key | Description |
| --- | ----------- |
| filterString | If provided will help filter domains to just those matching the supplied string. |

### `getCategories(options)`

As well as being grouped into one-or-more domains, each data-type is also assigned a *category*.
Use the `getCategories()` method to grab a list of categories.

#### Options

Supply `options` as an object with the following keys (note all of this is optional):

| Key | Description |
| --- | ----------- |
| `filterString | If provided will help filter categories to just those matching the supplied string. |
| `domainsRestriction`| An array of strings denoting zero-or-more domain names. Only categories with one or more data-items in *any* of these domains will be returned. If no `domainsRestriction` array is provided, then any categories used by data-items in just the `general` domain will be returned. |


``` javascript
const categories = tymlyDataTypes.getCategories()

// categories:
// [
//   {
//     seq: 0,
//     name: 'text',
//     label: 'Text'
//   },
//   {
//     seq: 1,
//     name: 'numeric',
//     label: 'Numeric'
//   },
//   {
//     seq: 2,
//     name: 'dateTime',
//     label: 'Date/time'
//   },
//   {
//     seq: 3,
//     name: 'Choices',
//     label: 'Choices'
//   },
//   {
//     seq: 4,
//     name: 'ref',
//     label: 'Reference'
//   }
// ]

```

### getDataTypes(options)

The main event, get a list of data-items as restricted by an object of optional options:

| Key    | Description |
| ------ | ----------- |
| `filterString | If provided will help filter data-items to just those matching the supplied string. |
| `domainsRestriction` | Only data-types belonging to any of the domains provided will be returned. Use just as described in the `getCategories()` method. If omitted, will be restricted to data-types in the `general` domain.|
| `category` | An optional string. Only data-types belonging to the supplied category name will be returned. |

``` javascript
const categories = tymlyDataTypes.getDataTypes(
  {
    domainsRestriction: ['general'],
    category: 'text'
  }
)

```

This method returns an array of zero-or-more `dataType` objects:

### `dataType` object

| Key | Description |
| --- | ----------- |
| `name` | A unique name of the data type. |
| `label` | A label that can be presented in from of users. |
| `seq` | An integer, offered as a suggestion to order lists by. |
| `jsonBuilderConfig` | An object to be used in the [json-schema-builder](https://github.com/wmfs/json-schema-builder) package to help construct this data-type within a [JSON Schema](https://json-schema.org/understanding-json-schema/).
| `domains` | An array of domain names associated with this data-type. |
| `category` | A string denoting the category the data-type is associated with.

## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/tymly-data-types/blob/master/LICENSE)
