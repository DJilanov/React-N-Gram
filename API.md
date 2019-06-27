# API

The following are all of the supported API calls.

## Table of contents

* [API](#api)
* [Table of contents](#table-of-contents)
* [Messages](#Messages)
  * [Get All](#get-all-messages)
  * [Create message](#create-message)
  * [Edit message](#edit-message)
  * [Delete message](#delete-message)

## Messages

### Get all messages

```
get /messages
```

Parameters in the request query:

```
none
```

Headers:

```
Content-Type: application/json
```

Response:

```
[
    {
        "deleted": false,
        "text": "message1",
        "_id": "4ffcf580-f1b6-11e8-9dd2-0b28eeec7d71",
        "__v": 0
    },
    {
        "deleted": false,
        "text": "message2",
        "_id": "681c30e0-f1b6-11e8-82ce-7be4fc698dfa",
        "__v": 0
    }
]
```
### Greate message

```
post /message
```

Parameters in the request body:

```
deleted: boolean
text: string
```

Headers:

```
Content-Type: application/json
```

Response:

```
{
    "deleted": false,
    "text": "message3",
    "_id": "4ffcf580-f1b6-11e8-9dd2-0b28eeec7d71",
    "__v": 0
}
```
### Edit message

```
patch /messages
```

Parameters in the request body:

```
_id: uuid
deleted: boolean
text: string
```

Headers:

```
Content-Type: application/json
```

Response:

```
{
    "deleted": false,
    "text": "message1",
    "_id": "4ffcf580-f1b6-11e8-9dd2-0b28eeec7d71",
    "__v": 0
}
```
### Delete message

```
delete /messages
```

Parameters in the request body:

```
_id: uuid
```

Headers:

```
Content-Type: application/json
```

Response:

```
{
    "deleted": true,
    "text": "message1",
    "_id": "4ffcf580-f1b6-11e8-9dd2-0b28eeec7d71",
    "__v": 0
}
```
