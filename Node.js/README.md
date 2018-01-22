Node.js
====

* Installing [Node.js].
* Introduction to [GraphQL].
* Getting started with Node.js, Express.js and GraphQL [#1].
* REST API with Node.js, Express.js and Sequelize. [#2].
* Express.js code structure [best practices].
* Setup babel with Node [#3].
* Add [index.js] to root of the project to compile your code with babel.
* Use [async/await] for resolving promises.
* Proper way to structure Node.js with GraphQL [#4].
* Testing Node.js apps with [Mocha + Chai].
* Add test coverage by installing [nyc] and adding it to [package.json].
* Example of a test in Node.js app with GraphQL. [#5].
* JWT Authentication & Authorization with GraphQL and Express.js [#6].
* Authentication & authorization with Express.js, Passport and JWT [#7].
* Working with environment variables in Node.js [#8].
* Setup the [database connection] using env variables.
* Follow best practices to handle [errors and exceptions].
* Setup [raven-node] for catching bugs in Node.js.
* To document GraphQL API, write `description` for each field, query, and mutation [documenting-graphql].
* To document REST API, use [Swagger].
* Use airbnb [styleguide].
* Set up [eslint] in your project.
* List of eslint rules [#e01a85e399ab563b1236].
* Create .eslintignore to add directories excluded from eslint check.

[#1]: https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/
[#2]: https://arjunphp.com/build-restful-api-using-node-express-sequelize/
[#3]: https://babeljs.io/docs/setup/#installation
[#4]: https://github.com/juffalow/express-graphql-sequelize-example/tree/master/graphql
[#5]: ./samples/user.spec.js
[#6]: https://github.com/aichbauer/express-graphql-boilerplate
[#7]: https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/
[#8]: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
[#e01a85e399ab563b1236]: https://gist.github.com/cletusw/e01a85e399ab563b1236
[airbnb]: https://www.npmjs.com/package/eslint-config-airbnb
[styleguide]: https://github.com/airbnb/javascript
[GraphQL]: http://graphql.org/learn
[Mocha + Chai]: https://medium.com/the-web-tub/mocha-chai-js-unit-testing-for-es6-with-istanbul-code-coverage-11b2a141a446
[async/await]: https://medium.freecodecamp.org/how-to-write-beautiful-node-js-apis-using-async-await-and-the-firebase-database-befdf3a5ffee
[database connection]: ./samples/config.js
[errors and exceptions]: https://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling
[raven-node]: https://docs.sentry.io/clients/node/
[documenting-graphql]: https://blog.codeship.com/documenting-graphql/
[Swagger]: http://mherman.org/blog/2016/05/26/swagger-and-nodejs/
[Node.js]: http://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/
[package.json]: ./samples/package.json
[index.js]: ./samples/index.js
[nyc]: https://www.npmjs.com/package/nyc
[best practices]: https://www.terlici.com/2014/08/25/best-practices-express-structure.html
[eslint]: https://medium.com/@StevenLeiva1/configuring-eslint-on-a-nodejs-app-92903cb21038