const axios = require('axios');

class Deposit {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
        this.token = token;
    }
    async create() {
        try {
            const response = await axios.get(`https://cryptonpro.cs2resellers.com/deposit/public/generated?id=${encodeURIComponent(this.name)}&am=${encodeURIComponent(this.amount)}&token=${encodeURIComponent(this.token)}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async displayWithDetails() {
        const details = await this.create();
        if (details) {
            return details;
        } else {
            return null;
        }
    }
}

module.exports = Deposit;
