
![QA-Automation](https://github.com/ahmedx3/WebQATask/assets/45081989/7e328c0f-f4c3-40f0-934d-90f4d3f5b155)

<h3 align="center">QA Automation</h3>

<div align="center">

[![GitHub contributors](https://img.shields.io/github/contributors/ahmedx3/WebQATask)](https://github.com/ahmedx3/WebQATask/contributors)
[![GitHub issues](https://img.shields.io/github/issues/ahmedx3/WebQATask)](https://github.com/ahmedx3/WebQATask/issues)
[![GitHub forks](https://img.shields.io/github/forks/ahmedx3/WebQATask)](https://github.com/ahmedx3/WebQATask/network)
[![GitHub stars](https://img.shields.io/github/stars/ahmedx3/WebQATask)](https://github.com/ahmedx3/WebQATask/stargazers)
<img src="https://img.shields.io/github/languages/count/ahmedx3/WebQATask" />
<img src="https://img.shields.io/github/languages/top/ahmedx3/WebQATask" />
<img src="https://img.shields.io/github/languages/code-size/ahmedx3/WebQATask" />
<img src="https://img.shields.io/github/issues-pr-raw/ahmedx3/WebQATask" />

[![CircleCI](https://circleci.com/gh/ahmedx3/WebQATask.svg?style=shield)](https://circleci.com/gh/ahmedx3/WebQATask)

</div>

## Table of Contents

- [About the Project](#about-the-project)
  - [Build with](#build-with)
- [Getting Started](#getting-started)
  - [Installation](#Installation-And-Running)
- [Screenshots](#screenshots)
- [File Structure](#file-structure)

## About The Project
> **QA Automaion** contains two automation tasks one for UI automation that tests this site [My Store](multiformis.com) using NightwatchJS and the other for the API automation that tests all the API routes found on [the mock-user-auth npm page](https://www.npmjs.com/package/mock-user-auth).

### Build with
- [Nightwatch JS](https://nightwatchjs.org/)
- [Jest JS](https://jestjs.io/)
- [SuperTest](https://www.npmjs.com/package/supertest)

## Getting Started
> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructions.

### Installation And Running

**_Clone the repository_**

```sh
$ git clone https://github.com/ahmedx3/WebQATask.git
```

### For The UI Tests

**_To run UI Tests Navigate to UI_Tests folder_**
```sh
$ cd UI_Tests
```

**_Install dependencies_**

```sh
$ npm install
```

**_Run Tests_**

```sh
$ npm run test
```

### For The API Tests

**_To run API Tests Navigate to API_Tests folder_**
```sh
$ cd API_Tests
```

**_Install dependencies_**

```sh
$ npm install
```

**_Run Tests_**

```sh
$ npm test
```

### Screenshots

#### UI HTML Report
![UI_Html_Report](https://github.com/ahmedx3/WebQATask/assets/45081989/16ef43d0-a170-4884-88d9-669cc71b6335)

<hr />

#### API HTML Report
![API_Html_Report](https://github.com/ahmedx3/WebQATask/assets/45081989/f3f7f91b-1c3e-434f-9671-c2bbaa104bdb)

<hr />

## File Structure
                                    
    WebQATask
    .
    ├── API_Tests
    │   ├── Bug Report (API).pdf
    │   ├── auth.test.js
    │   ├── coverage
    │   ├── create.test.js
    │   ├── delete.test.js
    │   ├── deleteAll.test.js
    │   ├── get.test.js
    │   ├── jest.config.json
    │   ├── node_modules
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── patch.test.js
    │   ├── setup.js
    │   └── test-report.html
    └── UI_Tests
        ├── Bug Report (UI).pdf
        ├── Test cases document.pdf
        ├── logs
        ├── nightwatch
        ├── nightwatch.conf.js
        ├── node_modules
      ├── package-lock.json
      ├── package.json
      ├── tests
      └── tests_output
