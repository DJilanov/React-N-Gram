# API

The following are all of the supported API calls.

## Table of contents

* [API](#api)
* [Table of contents](#table-of-contents)
* [Messages](#Messages)
  * [Get ngrams](#get-ngrams)

## Ngrams

### Get ngrams

```
get /ngram
```

Parameters in the request query:

```
{
    string: String
}
```

Headers:

```
Content-Type: application/json
```

Response:

```
{
    "He": 1,
    "el": 1,
    "ll": 1,
    "lo": 1
}
```