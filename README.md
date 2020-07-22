# tech-test
This project contains a node / typescript web API; it was developed in one day for a technical test.





## API design

FIrstly, here's a list of web API endpoints that aim to fulfil the server-side requirements:



- GET, POST, PATCH, DELETE /files
- GET, POST, PATCH, DELETE /users
- GET /reports/files-by-user
- GET /reports/files-by-type
- GET /reports/average-file-size
- GET /reports/average-file-size?userid=1d9e697c-9059-4544-ba46-ef698ea2ee1c
- GET /reports/average-duration
- GET /reports/average-duration?user-userid=1d9e697c-9059-4544-ba46-ef698ea2ee1c

 

For the GET endpoints, the **page** and **page-size** querystring parameters (both optional, with defaults) would provide pagination 

-  e.g. /files?page=3&page-size=10

Regarding filtering by date: no date fields were specified in the pdf document; if we assume that the files resource might have an uploadDate field, we could add **from** and **to** optional parameters

- e.g. /reports/files-by-user?from=2020-010-01





## Approach

The project's main focus was on architecture - providing a base from which the rest of the API development should be relatively straightforward.

Given the limited time available, I decided to develop just one simple endpoint - GET /files without any of the querystring parameters.





## Architecture

The aim was to set out a [clean](https://www.freecodecamp.org/news/a-quick-introduction-to-clean-architecture-990c014448d2/), well-organised, clearly-named, scalable architecture.





## Tests



A very basic test set-up was put in place:

- one unit test for the main business layer class (FilesManager)
- one e2e test for the GET /files endpoint





## How to run the API locally

- The following programs should be running on the developer machine::
  - postgres 
  - node / npm

- Set up the database by restoring the data.sql file in the project folder (this file was made via a 'plain' backup in pgdmin)   