# uber-for-ticket-app-back-end
Client for the ticket swapping app.

[The Web App](https://uber-for-ticket.netlify.com)

 This app is built using the following stacks:

* JavaScript
* React
* Redux
* CSS

The app is a platform for people to exchange/swap/sell tickets for different events.

Some features of the app:
* Create an user account
* Login as an user
* Searching for events/tickets available without being an user
* Create a new event as an user
* Sell a ticket as an user
* Comment on a ticket as an user
* Edit a ticket if the user is also the author of the ticket
* Each time a ticket is created, a fraud risk of the ticket will be calculated automatically so buyers know which one is more reliable

### Note:
* This is a full-stack app that I built for my final assignment of the Codaisseur web-development program during week 8 (in the total 10-week of the program). 
* It took me 3 days and a half to complete both the front-end and back-end for the app all by myself.

At the back-end, there is an algorithm to calculate the risk of a ticket being fraudulent. Each time a new ticket being created, the app will automatically calculate the fraud risk of the ticket based on the following criteria:
- Price of the ticket compared to the average price of all the other tickets for the event;
- The number of tickets that the current user is selling;
- The time that the ticket is created (during office-hours or outside office-hours);
- The number of comments from people who is interested in buying the ticket.
