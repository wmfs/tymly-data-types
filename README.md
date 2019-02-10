
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

> A library of data types often found in digital services.

## <a name="install"></a>Install
```bash
$ npm install @wmfs/tymly-data-types --save
```

## Reference

**The full list of data-types currently defined by *tymly-data-types* is shown below.**

* The chances are you'll never need to use all these in any one scenario (that's where [domains](#domains) and [categories](#categories) can help narrow things down).

| Data Item Name | Title       | Category | Domain(s) |
| -------------- | ----------- | -------- | --------- |
| `date` | Date | `dateTime` | ``general`` |
| `text` | Text | `text` | ``general`` |
| `dateTime` | Number | `dateTime` | ``general`` |
| `dateOfBirth` | Date of birth | `dateTime` | ``general`` |
| `appointmentTime` | Appointment time | `dateTime` | ``general`` |
| `eventTime` | Event time | `dateTime` | ``general`` |
| `idnHostname` | IDN Hostname | `text` | ``networking`` |
| `integer` | Integer | `number` | ``general`` |
| `email` | Email | `text` | ``general`` |
| `ipv4` | IPv4 | `text` | ``networking`` |
| `ipv6` | IPv6 | `text` | ``networking`` |
| `hostname` | Hostname | `text` | ``networking`` |
| `time` | Time | `dateTime` | ``general`` |
| `url` | URL | `text` | ``general`` |



## Domains

Data items are grouped into specialist *domains*, this helps narrow lists of data-items to just those suitable to the problem domain(s) being addressed:

* A single data-type can feature in multiple domains.
* Note the `general` domain is considered the "default". Without any explicit configuration (i.e. no specialist domains are provided via options), the various methods in the **tymly-data-types** API will return data items to just those within the `general` domain.

| Domain Name | Title       |
| ----------- | ----------- |
| `education` | Education |
| `fire` | Fire Service |
| `general` | General |
| `health` | Health |
| `networking` | Computer networks |


## Categories

As well as being grouped into one-or-more problem domains, each data-type is also assigned to a more functional *category*:

| Category Name | Title       |
| ------------- | ----------- |
| `choice` | Choice |
| `dateTime` | Date/time |
| `number` | Number |
| `ref` | Reference |
| `text` | Text |


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

## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/tymly-data-types/blob/master/LICENSE)
