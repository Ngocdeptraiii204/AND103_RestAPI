const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://ngocnptpd09488:pkonaDmsO1Z1TKP3@cluster0.lowk23q.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
