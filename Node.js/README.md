Node.js
====


* Introduction to [GraphQL] .
* Getting started with Node.js, Express.js and GraphQL [#1].
* Setup babel with Node [#2]
* Use [async/await] for resolving promises.
* Proper way to structure Node.js with GraphQL [#3]
* Testing Node.js apps with [Mocha + Chai].
* Example of a test in Node.js app with GraphQL. [#4]
* JWT Authentication & Authorization with GraphQL and Express.js [#5].
* Authentication & authorization with Express.js, Passport and JWT [#6] 
* Working with environment variables in Node.js [#7]
* Setup the [database connection] using env variables.
* Follow best practices to handle [errors and exceptions].
* Setup [raven-node] for catching bugs in Node.js.
* To document GraphQL API, write `description` for each field, query, and mutation [documenting-graphql]
* Use airbnb [styleguide].
* Set up eslint in your project [airbnb].
* List of eslint rules [#e01a85e399ab563b1236].
* Create .eslintignore to add directories excluded from eslint check.

[#1]: https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/
[#2]: https://babeljs.io/docs/setup/#installation
[#3]: https://github.com/juffalow/express-graphql-sequelize-example/tree/master/graphql
[#4]: ./samples/user.spec.js
[#5]: https://github.com/aichbauer/express-graphql-boilerplate
[#6]: https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/
[#7]: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
[#e01a85e399ab563b1236]: https://gist.github.com/cletusw/e01a85e399ab563b1236
[airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[styleguide]: https://github.com/airbnb/javascript
[GraphQL]: http://graphql.org/
[Mocha + Chai]: https://medium.com/the-web-tub/mocha-chai-js-unit-testing-for-es6-with-istanbul-code-coverage-11b2a141a446
[async/await]: https://medium.freecodecamp.org/how-to-write-beautiful-node-js-apis-using-async-await-and-the-firebase-database-befdf3a5ffee
[database connection]: ./samples/config.js
[errors and exceptions]: https://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling
[raven-node]: https://docs.sentry.io/clients/node/
[documenting-graphql]: https://blog.codeship.com/documenting-graphql/