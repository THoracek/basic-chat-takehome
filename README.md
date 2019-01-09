# Basic Chat

This is a React JS FrontEnd Application with a Node.js & socket.io backend service.

The functional requirements are:
* An application that allows two users to send short text messages to each other, like Facebook Messages app or Google Chat.
   
    * It's possible to type a short message and have it sent to another user
    * It's possible to see messages sent from another user appear reasonably soon after they were sent

## Prerequisites
You’ll need to have Node 8.10.0 or later on your local development machine

I recommend using [nvm](https://github.com/creationix/nvm)


## Installation
First, clone this repo and `cd` into the main directory.  Then:
```shell
npm install
```

Then run: 

```shell
cd backend && npm install
```

## Development
To run this project: `cd` into the main directory. Then:
```shell
npm start
```

## Code Linting
To enforce code consistency linting was included.
```shell
npm run lint
```

## Tests
For TDD, invoke testing by:
```shell
npm run test
```

## Build the Server
To compile the code:
```shell
npm run build
```

## Design Decisions
* Basic Backend socket.io service was implemented to handle message transfer.
* All users can see all messages sent
* Users opening the web-page are presented with a card with an input to enter their username.
* Once a username is entered the user can begin to chat with an input at the bottom of the page.
  * Styled with the basic bootstrap component library
  * User's own chat messages are in blue and rendered to the right
  * Other user's chat messages are in grey and rendered to the left with the username below the message.
  * Messages scroll down so that the most recent message is always visible when the chat becomes long.
  * Chat messages cannot be sent without content in the send message input.