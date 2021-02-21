# KTCBackEnd

Repository for the backend part of a simple sales consultant training app.
In the first iteration, the server and database are only for storing flashcard
questions and answers, for smoother deployment and maintanance.

Second (possible) feature will be storing time-tracking data submitted by users,
which will give the application a bit more complexity.

## Feature ideas

1. Submitting questions regarding the questions directly to the teacher.
    - Probably easiest just as a wrapper for email
2. User submissions for flashcards.
    - Would naturally bring along proper question & submission management

## TODO

Tasks and a rough roadmap.

### Stack
- MongoDB
- NodeJS
- Express
- React
- React Native

## Database
- [ ] Install & set up MongoDB
- [ ] Design database structure
- [ ] Configure and test entry points
- [ ] Deploy (Heroku / other cloud service)

## Backend
- [x] Setup dev database
    - Decided to use json-server as a placeholder.
- [x] Set up Heroku
- [x] Set up project structure (npm package standards)
- [ ] Write rudimentary functionality (NodeJS / Express)
- [ ] Deploy application and database
- [ ] User roles
- [ ] User authentication (Google Sign In / OAuth 2.0)

## FrontEnd
- [ ] Design
- [ ] create-react-app
- [ ] See if react-native requires any specifics from setup
- [ ] Write rudimentary functionality (pass to Konsta)


