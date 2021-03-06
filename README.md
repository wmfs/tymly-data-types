
<!--     SSSSSSSSSSSSSSS TTTTTTTTTTTTTTTTTTTTTTT     OOOOOOOOO     PPPPPPPPPPPPPPPPP    !!!   -->
<!--   SS:::::::::::::::ST:::::::::::::::::::::T   OO:::::::::OO   P::::::::::::::::P  !!:!!  -->
<!--  S:::::SSSSSS::::::ST:::::::::::::::::::::T OO:::::::::::::OO P::::::PPPPPP:::::P !:::!  -->
<!--  S:::::S     SSSSSSST:::::TT:::::::TT:::::TO:::::::OOO:::::::OPP:::::P     P:::::P!:::!  -->
<!--  S:::::S            TTTTTT  T:::::T  TTTTTTO::::::O   O::::::O  P::::P     P:::::P!:::!  -->
<!--  S:::::S                    T:::::T        O:::::O     O:::::O  P::::P     P:::::P!:::!  -->
<!--   S::::SSSS                 T:::::T        O:::::O     O:::::O  P::::PPPPPP:::::P !:::!  -->
<!--    SS::::::SSSSS            T:::::T        O:::::O     O:::::O  P:::::::::::::PP  !:::!  -->
<!--      SSS::::::::SS          T:::::T        O:::::O     O:::::O  P::::PPPPPPPPP    !:::!  -->
<!--         SSSSSS::::S         T:::::T        O:::::O     O:::::O  P::::P            !:::!  -->
<!--              S:::::S        T:::::T        O:::::O     O:::::O  P::::P            !!:!!  -->
<!--              S:::::S        T:::::T        O::::::O   O::::::O  P::::P             !!!   -->
<!--  SSSSSSS     S:::::S      TT:::::::TT      O:::::::OOO:::::::OPP::::::PP                 -->
<!--  S::::::SSSSSS:::::S      T:::::::::T       OO:::::::::::::OO P::::::::P           !!!   -->
<!--  S:::::::::::::::SS       T:::::::::T         OO:::::::::OO   P::::::::P          !!:!!  -->
<!--   SSSSSSSSSSSSSSS         TTTTTTTTTTT           OOOOOOOOO     PPPPPPPPPP           !!!   -->
<!--                                                                                          -->
<!--             T H I S   R E A D M E . M D   F I L E   I S   G E N E R A T E D !            -->
<!--                                                                                          -->
<!--     IF YOU EDIT IT DIRECTLY YOUR CHANGES WILL BE WASHED AWAY THE NEXT TIME THIS FILE     -->
<!--      GETS GENERATED (EDIT "/lib/docs/templates" AND USE "npm run generate" INSTEAD!)     -->


# tymly-data-types

> A work-in-progress library of data types often found in digital services.

## <a name="install"></a>Install
```bash
$ npm install @wmfs/tymly-data-types --save
```

## Reference

**The full list of 31 data-types currently defined by *tymly-data-types* is shown below.**

* The chances are you'll never need to use all these in any one scenario (that's where [domains](#domains) and [categories](#categories) can help narrow things down).

| Data Item Name | Title       | Category | Domain(s) | Description |
| -------------- | ----------- | -------- | --------- | ----------- |
| `address` | Address | `text` | `location` | A string denoting an address which could be used to send a letter. |
| `appointmentTime` | Appointment time | `dateTime` | `general` | A date and time, often originally defined for a point in the future, to express when a particular event should occur. |
| `boolean` | Boolean | `choice` | `general` | A general boolean value of true or false. |
| `choice` | Choice | `choice` | `general` | Use when a value should be taken from a known set, but no other data type is appropriate. |
| `date` | Date | `dateTime` | `general` | General-purpose type for expressing a particular date (without a time component). |
| `dateOfBirth` | Date of birth | `dateTime` | `people` | The date (no time portion) for expressing the date a person was born. |
| `dateTime` | Date/time | `dateTime` | `general` | General-purpose type for expressing a date and time. |
| `email` | Email | `text` | `general`, `computing`, `person` | Used to convey an email address. |
| `ethnicity` | Ethnicity | `choice` | `people` | Used to express the ethnicity of a person. |
| `eventTime` | Event time | `dateTime` | `general` | A date and time relating to when a particular event occurred. |
| `frsCallsign` | Callsign | `text` | `fire` | A unique code to identify a vehicle, officer or other asset. |
| `fsecCode` | FSEC code | `choice` | `fire` | A code to help categorise a premise (as defined by Home Office). |
| `gender` | Gender | `choice` | `people` | For describing a person&#39;s gender. |
| `hostname` | Hostname | `text` | `computing` | Used to convey an internet host name (RFC 5322). |
| `idnHostname` | IDN Hostname | `text` | `computing` | Used to convey an internationalized host name (RFC 5890). |
| `integer` | Integer | `number` | `general` | General-purpose type for expressing an integer value. |
| `ipv4` | IPv4 | `text` | `computing` | Used to convey an IPv4 address. |
| `ipv6` | IPv6 | `text` | `computing` | Used to convey an IPv6 address. |
| `latLong` | Latitude/Longitude | `number` | `location` | A pair of numbers denoting a point on the Earth&#39;s surface. |
| `name` | Person&#39;s name | `text` | `people` | A data-type for expressing a person&#39;s name. |
| `notes` | Notes | `text` | `general` | A data-item for expressing additional free-form notes often to provide deeper context for other data. |
| `text` | Text | `text` | `general` | General-purpose type for expressing textual data (a mixture of letters, numbers and symbols). |
| `time` | Time | `dateTime` | `general` | General-purpose type for expressing a time of day (without being related to any particular date). |
| `title` | Title | `choice` | `people` | Titles used to address people with (Miss, Mr. etc.) |
| `uprn` | UPRN | `number` | `location`, `fire` | Unique Property Reference Number as issued by Ordnance Survey as part of their gazetteer products. |
| `uri` | URI | `text` | `general`, `computing` | A universal resource identifier (URI) according to RFC3986. |
| `usrn` | USRN | `number` | `location`, `fire` | Unique Street Reference Number as issued by Ordnance Survey as part of their gazetteer products. |
| `yesNo` | Yes/No | `choice` | `general` | A data type to express a Yes/No response. |
| `yesNoNa` | Yes/No/Not Applicable | `choice` | `general` | A data type to express a &#39;Yes&#39;, &#39;No&#39; or &#39;Not applicable&#39; response. |
| `yesNoOther` | Yes/No/Other | `choice` | `general` | A data type to express a &#39;Yes&#39;, &#39;No&#39; or &#39;Other&#39; response. |
| `yesNoUnknown` | Yes/No/Unknown | `choice` | `general` | A data type to express a &#39;Yes&#39;, &#39;No&#39; or &#39;Unknown&#39; response. |



## Domains

Data items are grouped into specialist *domains*, this helps narrow lists of data-items to just those suitable to the business domain(s) being addressed:

* A single data-type can feature in multiple domains.
* Note the `general` domain is considered the "default". Without any explicit configuration (i.e. no specialist domains are provided via options), the various methods in the **tymly-data-types** API will return data items to just those within the `general` domain.

| Domain Name | Title       | Description |
| ----------- | ----------- | ----------- |
| `computing` | Computing | Specialist data-types specific to computing. |
| `fire` | Fire Service | Data-types that are often used in the Fire and Rescue sector. |
| `general` | General | A set of general-purpose data types that can be used as a fallback if nothing more specific is available via other domains. |
| `location` | Location | Types often found when dealing with geo-spatial data. |
| `people` | People | Commonplace data-types relating to people (name, date of birth etc.) |


## Categories

As well as being grouped into one-or-more problem domains, each data-type is also assigned to a more functional *category*:

| Category Name | Title       | Description |
| ------------- | ----------- | ----------- |
| `choice` | Choice | Data items that relate to a finite, known set of values. |
| `dateTime` | Date/time | Data items that relate to moments-in-time. |
| `number` | Number | Data items that relate to a numeric value. |
| `ref` | Reference | Data items whose value can relate to another entity |
| `text` | Text | Data items that can contain a mixture of letters, numbers and symbols. |


## API

### `getDomains(options)`

**Use the `getDomains()` method to get an array of available domains.**

#### Options

Supply `options` as an object with the following keys (note all of this is optional):

| Key | Description |
| --- | ----------- |
| `filterString` | If provided will help filter domains to just those matching the supplied string. |
| `sort` | Controls the order of that the domains will be returned. A string of either `seq` (**default**) or  `name`. |

### `getCategories(options)`

Use the `getCategories()` method to grab a list of categories.

#### Options

Supply `options` as an object with the following keys (note all of this is optional):

| Key | Description |
| --- | ----------- |
| `filterString` | If provided will help filter categories to just those matching the supplied string. |
| `sort` | Controls the order of that the categories will be returned. A string of either `seq` (**default**) or  `name`. |
| `domainRestriction`| An array of strings denoting zero-or-more domain names. Only categories with one or more data-items in *any* of these domains will be returned. If no `domainRestriction` array is provided, then any categories used by data-items in just the `general` domain will be returned. |

### getDataTypes(options)

The main event, get a list of data-items as restricted by an object of optional options:

| Key    | Description |
| ------ | ----------- |
| `filterString` | If provided will help filter data-items to just those matching the supplied string. |
| `domainRestriction` | Only data-types belonging to any of the domains provided will be returned. Use just as described in the `getCategories()` method. If omitted, will be restricted to data-types in the `general` domain.|
| `category` | An optional string. Only data-types belonging to the supplied category name will be returned. |
| `sort` | Controls the order of that the data items will be returned. A string of either `seq` (**default**) or  `name`. |

* This method returns an array of zero-or-more `dataType` objects. Take a look [here](https://github.com/wmfs/tymly-data-types/blob/master/lib/data/data-types.json) to see the type of thing returned.

### `getDataTypeByName(dataTypeName)`

Returns the specified data type.

### `getDataTypeNames()`

Returns an array of data-type names.

### `getCategoryDefaultDataTypeNames()`

Returns a key/value object where key is the name of a category and value is the name of a dataType considered the "default" for that category.

``` json
{
  "text": "text",
  "number": "integer",
  "dateTime": "dateTime",
  "choice": "choice"
}
```

### `getDataItemsByCategory(options)`

Just like `getDataTypes()` but returns a key/value object where key is a category name and value is the associated array of data items.

## <a name="test"></a>Testing

```bash
$ npm test
```

## Todo

* Make into an online database! :smiley:
* Modules (having everything in one big JSON file is a bit wrong).
* Introduce versioning solution
* Validation of domains, categories and data-types.
 * Especially integrity checks (data items belong to valid domains/categories), JSON Schema based?

## <a name="license"></a>License
[MIT](https://github.com/wmfs/tymly-data-types/blob/master/LICENSE)
