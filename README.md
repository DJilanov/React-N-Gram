# Application

Sample project based on
ReactJS

## Table of contents

- [Application](#Application)
  - [Table of contents](#table-of-contents)
  - [Stack](#stack)
  - [Setup](#setup)
    - [Clone the repository](#clone-the-repository)
    - [Build and run](#build-and-run)
  - [API](#api)
  - [Contact](#contact)
  - [License](#license)

## Stack

- React front end
- NGINX
- Docker

## Setup

### Clone the repository

Clone the repository to your filesystem

```
$ git clone https://github.com/DJilanov/React-N-Gram.git
$ cd React-N-Gram
```

### Build and run

Build images

```
$ docker-compose build
```

Run containers

```
$ docker-compose up
```

Stop containers

```
$ docker-compose down
```

## API

The API documentation is available [here](API.md).

## Contact

[Dimitar Jilanov](http://engineering.jilanov.com)

## License

Copyright (c) Dimitar Jilanov.

Licensed under the [MIT](LICENSE) License.

## TODO:
1. Write FE tests
2. Finish BE tests
3. Add all already calculated sentenses to DB so we dont do calculations when we can just fetch precalculated data ( can use bigQuerry )