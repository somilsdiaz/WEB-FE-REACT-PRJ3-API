# CRM API Server

A REST API server built with JSON Server to provide CRM (Customer Relationship Management) functionality, including client management, business opportunities tracking, and follow-up activities.
[Demo](https://web-fe-react-prj3-xgdi.onrender.com/) | [Front-end Repository](https://github.com/somilsdiaz/WEB-FE-REACT-PRJ3)
## Overview

This API serves as a backend for a CRM system with the following main features:
- Client management with detailed contact information
- Business opportunities tracking
- Follow-up activities logging and management

## Tech Stack

- Node.js
- json-server
- JavaScript

## Data Structure

### Clients
- Complete client profiles
- Contact information
- Multiple contact persons per client
- Activity status tracking
- Linked opportunities

### Opportunities
- Business opportunity tracking
- Estimated values and dates
- Status monitoring
- Business line categorization

### Follow-up Activities
- Detailed activity logging
- Multiple contact types (Calls, Emails, Meetings)
- Sales executive assignment
- Activity descriptions and notes

## Getting Started

1.  Clone the repository
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Start the server:

    ```bash
    npm start

## API Endpoints

### Clients

-   `GET /clients` - Get all clients
-   `GET /clients/:id` - Get specific client
-   `POST /clients` - Create new client
-   `PUT /clients/:id` - Update client
-   `DELETE /clients/:id` - Delete client

### Opportunities

-   `GET /opportunities` - Get all opportunities
-   `GET /opportunities/:id` - Get specific opportunity
-   `POST /opportunities` - Create new opportunity
-   `PUT /opportunities/:id` - Update opportunity
-   `DELETE /opportunities/:id` - Delete opportunity

### Follow-up Activities

-   `GET /follow` - Get all follow-up activities
-   `GET /follow/:id` - Get specific follow-up record
-   `POST /follow` - Create new follow-up
-   `PUT /follow/:id` - Update follow-up
-   `DELETE /follow/:id` - Delete follow-up

## Data Sources

-   clients.js: Contains the client data.
-   opportunities.js: Contains the opportunities data.
-   follow-up.js: Contains the follow-up activities data.

## Server Configuration

-   db.js: Exports the database containing all the data.
-   index.js: Main file to start the JSON Server.

## Development

The API is built using `json-server`, which provides a full fake REST API with zero coding. The data is stored in JavaScript files under the data directory.

## Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
