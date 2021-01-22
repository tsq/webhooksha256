# github-webhook-sha256

A expressjs middleware for handling Github webhook using [X-Hub-Signature-256](https://docs.github.com/en/developers/webhooks-and-events/securing-your-webhooks) header.

## Install

```sh
yarn add webhooksha256
```

## Usage

```js
const express = require('express');
const webhooksha256 = require('webhooksha256');

const key = 'YOUR KEY';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/deploy', webhooksha256(key), (req, res) => {
    // you will be here if the verifying is OK!
});
```
