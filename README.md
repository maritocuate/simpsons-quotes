# Simpsons API

This is an API developed in [Nest.js](https://nestjs.com/) that provides random quotes from The Simpsons. It also offers the ability to add new quotes to the database.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [License](#license)

## Requirements

Make sure you have the following tools and packages installed in your development environment:

- Node.js and npm (Node Package Manager)
- MongoDB (or a cloud instance like MongoDB Atlas)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/simpsons-api.git


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Configuration

Create a .env file in the project root to store your configuration. You should set the MongoDB connection string in this file:

```bash
MONGODB_URI=your_mongodb_connection_string
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
