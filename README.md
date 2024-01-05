# Trimly - URL Shortening Service

Trimly is a simple and efficient URL shortening service created using Node.js, Express.js, and MongoDB. This project allows users to generate concise and unique short URLs for their long links, making them easier to share.

## Features

1. **Short URL Generation**: Trimly uses the shortid middleware to generate short and unique identifiers for user-entered links. This ensures that the generated short URLs are concise and easy to remember.

2. **Redirect Mechanism**: The service implements a robust redirect mechanism, enabling users to access the original URLs by using the generated short URLs. This ensures a seamless and efficient redirection process.

3. **Analytics Functionality**: Trimly provides analytics functionality to track the number of clicks on the generated short URLs. Users can gain insights into the popularity of their links and understand the reach of their shared content.

## Technologies Used

- **Node.js**: The server-side JavaScript runtime environment for executing code.
- **Express.js**: A web application framework for Node.js that simplifies the creation of web applications and APIs.
- **MongoDB**: A NoSQL database used for storing and managing data efficiently.

## Getting Started

To get started with Trimly, follow these steps:

1. Clone the repository: `git clone https://github.com/utkarshkrishna2004/trimly`
2. Install dependencies: `npm install`
3. Set up MongoDB: Ensure you have a MongoDB instance running and update the database connection details in the configuration file.
4. Start the server: `npm start`

## Screenshots

![Trimly 1](https://res.cloudinary.com/dt686xyud/image/upload/v1704455563/Screenshot_from_2024-01-05_17-07-32_nhhk9s.png)
![Trimly 2](https://res.cloudinary.com/dt686xyud/image/upload/v1704455563/Screenshot_from_2024-01-05_17-07-49_gzyofm.png)
![Trimly 3](https://res.cloudinary.com/dt686xyud/image/upload/v1704455563/Screenshot_from_2024-01-05_17-08-08_rfc6t0.png)
![Trimly 4](https://res.cloudinary.com/dt686xyud/image/upload/v1704455563/Screenshot_from_2024-01-05_17-20-48_dpbvks.png)
![Trimly 5](https://res.cloudinary.com/dt686xyud/image/upload/v1704455563/Screenshot_from_2024-01-05_17-19-08_kes7qr.png)

Feel free to explore Trimly and use it to shorten your URLs efficiently!
