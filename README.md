# Wikipedia Web Scraper API

A versatile API designed to scrape Wikipedia and deliver concise summaries of topics. This API simplifies access to information and makes it readily available for developers and applications. Hosted live at [Wikipedia Web Scraper API](https://wikipedia-web-scraper.onrender.com).

## Overview

The Wikipedia Web Scraper API offers a straightforward way to access Wikipedia's wealth of knowledge. Developers can retrieve topic summaries by making HTTP requests, all without the need for complex web scraping. This project simplifies data acquisition and content retrieval from Wikipedia.

## Documentation

For detailed API documentation, please refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YR6ZtEC).


## Getting Started

To set up and utilize the Wikipedia Web Scraper API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Wikipedia-Web-Scraper-API.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Wikipedia-Web-Scraper-API
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Set up your environment variables in a `.env` file with the following variables (replace placeholders with actual values):

   ```env
    API_DOCUMENTATION_URL=https://documenter.getpostman.com/view/29278179/2s9YR6ZtEC
    APP_NAME=Wikipedia Web Scraper API
    MAIL_ADDRESS=xxxx@mail.com
    MAIL_PASSWORD=xxxx
    SITE_LINK=https://wikipedia-web-scraper.onrender.com
    USERNAME=user@mail.com
   ```

5. Build the application:

   ```shell
   npm run build
   ```

6. Start the server:

   ```shell
   npm start
   ```

The Wikipedia Web Scraper API will be accessible at `http://localhost:5000` by default.

## Features

- **Web Scraping Simplified**: Retrieve Wikipedia topic summaries with ease through straightforward API endpoints.

- **Quick Access to Knowledge**: Get concise summaries of topics without the need for complex web scraping or parsing.

- **Simplified Data Retrieval**: Bridge the gap between your application and Wikipedia's vast knowledge repository.

## Sample Scenario

**Developer Scenario**:
To retrieve a Wikipedia summary, follow these steps:

**API Usage**:

1. **API Request**: Make a GET request to `http://localhost:5000/wiki-summary?subject=Node.js`.

2. **Processing Request**: The API processes the request, scrapes the Wikipedia page for "Node.js," and returns the summary.

3. **Result**: You will receive a JSON response with the summary:

   ```json
   {
     "subject": "Node.js",
     "summary": "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser."
   }
   ```


## Contributing

Contributions to the Wikipedia Web Scraper API are highly welcomed. To contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Implement your improvements or additions.

4. Thoroughly test your changes.

5. Submit a pull request with a clear description of your modifications.
