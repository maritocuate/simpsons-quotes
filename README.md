# Simpsons Quotes API

This is a simple API that provides random quotes from the beloved TV show, "The Simpsons." You can use this API to retrieve random quotes from the show or add new quotes to the database. It's a fun and lighthearted project for all Simpsons fans!

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)

## Features

- Get random quotes from "The Simpsons."
- Add new quotes to the database.
- Retrieve all stored quotes.
- Clean and simple API for easy integration.

## Requirements

Before you get started, ensure that you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (or a cloud-based MongoDB service like MongoDB Atlas)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/maritocuate/simpsons-quotes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simpsons-quotes
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## API Endpoints

The API provides the following endpoints:
- GET **/quotes/random**: Retrieves a random quote from "The Simpsons."
- POST **/quotes/create**: Adds a new quote to the database. You should provide the quote in the request body in JSON format.

## Examples

### Get a Random Quote

To get a random quote, make a GET request to the following endpoint:
```bash
https://simpsons-quotes-ten.vercel.app/quotes/random
```

### Add a New Quote

To add a new quote, make a POST request to:
```bash
https://simpsons-quotes-ten.vercel.app/quotes/create
```
You should provide the quote in the request body in the following JSON format:

```bash
{
  "quote": "Your new quote here",
  "character": "Character's name"
}
```