<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Folder Structure

```bash
src/                                      # Main source directory
├── app.controller.ts                     # Handles incoming requests and routes
├── app.module.ts                         # Root module that ties all other modules together
├── app.service.ts                        # Core service for handling app logic
├── filters/                              # Contains custom exception filters
│   └── all-exceptions.filter.ts          # Global exception filter that handles all exceptions
├── helpers/                              # Contains utility helper functions
│   ├── auth/                             # Authentication-related helpers
│   ├── database/                         # Database-related helpers
│   └── slugify.helpers.ts                # Helper function for slugifying strings
├── middlewares/                          # Contains middleware for request processing
│   └── authorization/                    # Authorization-related middleware
│       └── auth.middleware.ts            # Middleware for checking user authorization (JWT)
├── modules/                              # Main app functionality split into modules
│   ├── auth/                             # Authentication module (login, signup, etc.)
│   │   ├── dto/                         # Data Transfer Objects (DTOs) for validation
│   │   ├── auth.controller.spec.ts      # Unit test for the auth controller
│   │   ├── auth.controller.ts           # Controller for handling authentication routes
│   │   ├── auth.module.ts               # Defines the auth module (imports services, controllers)
│   │   ├── auth.service.spec.ts         # Unit test for the auth service
│   │   └── auth.service.ts              # Service for handling authentication logic
│   ├── campaign/                         # Campaign module (handles marketing campaigns)
│   ├── cart/                             # Cart module (handles shopping cart functionality)
│   ├── category/                         # Category module (handles product categories)
│   ├── config/                           # Configuration module (e.g., database settings)
│   ├── product/                          # Product module (handles products)
│   └── user/                             # User module (handles user-related functionality)
├── types/                                # Contains custom types and interfaces
├── utils/                                # Utility functions for common operations
├── main.ts                               # Entry point for the NestJS application
└── test/                                 # Contains test files for various modules and services


```