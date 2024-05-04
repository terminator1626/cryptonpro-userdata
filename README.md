# User Package

This package allows you to retrieve user information from an external API.

## Installation

To install this package, use the following command:

```
npm install cryptonpro-userdata@latest
```

## Usage

```javascript
const { User } = require("cryptonpro-userdata");

data("USER_ID", "API_KEY");

async function data(user_id, key) {
    const user = new User(user_id, key);
    const detailsDATA = await user.fetchDetails();
    if (detailsDATA) {
        const details = detailsDATA;
        console.log(details);
        console.log(details.username);
        console.log(details.id);
        console.log(details.bitcoinaddress);
        console.log(details.balance);
        console.log(details.balance_bitcoin);
    } else {
        console.log('User not found.');
    }
}
```

## Discord Key

To use this package, an API key is required. To obtain the key, please contact our Discord server [here](https://discord.gg/WN7ggJRKHy).