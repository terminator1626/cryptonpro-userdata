const axios = require('axios');

class User {
    constructor(name, token) {
        this.name = name;
        this.token = token;
    }
    async fetchDetails() {
        try {
            const response = await axios.get(`https://cryptonpro.cs2resellers.com/api/v5/publicdata?user=${encodeURIComponent(this.name)}&token=${encodeURIComponent(this.token)}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async displayWithDetails() {
        const details = await this.fetchDetails();
        if (details) {
            return details;
        } else {
            return null;
        }
    }
}

module.exports = User;
