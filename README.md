### Project Setup Guide

This repository contains two separate applications: the **Server** and the **Client**. Below are the steps for setting up and running both applications. 🚀

### Requirements

<ul>
  <li>Node.js (v18 or higher) </li>
  <li>MongoDB database
</li>
</ul>

### Installation

- Clone this repo
- Create MongoDb Cluster and Get Connection MongoDb URI
- Set environment variables in `.env` under `./server/.env`

  - Set `PORT = <PORT>`
  - Set `MONGO_URI = <YOUR_MONGO_URI>`
  - Set `JWT_SECRET_KEY = <YOUR_SECRET_KEY>`
  - Set `JWT_EXPIRE = 60m`
  - Set `JWT_COOKIE_EXPIRE = 60`

```bash
$ cd server
yarn install
yarn run start
$ cd client
yarn install
yarn run dev
```


### Technologies Used

#### Server (NestJS) 🐯

<ul>
  <li> NestJS: A progressive Node.js framework for building efficient and scalable server-side applications. </li>
  <li>MongoDB: NoSQL database used for data storage.</li>
  <li>Prettier & ESLint: Code formatting and linting tools to maintain consistent code style.
</li>
  <li>Jest: Testing framework for unit and integration tests.
</li>
</ul>

#### Client (React + Next.js) ⚛ 🔼

<ul>
  <li>Next.js: React framework for building static and dynamic web applications.
 </li>
  <li>Tailwind CSS: Utility-first CSS framework for styling.
</li>
  <li>Framer Motion: A library for animations in React applications.

</li>
  <li>React Query: A data-fetching and state management library.

</li>
  <li>Formik & Yup: Libraries for handling forms and validation.
</li>
  <li>Storybook: Tool for building and testing UI components in isolation.
</li>
</ul>
