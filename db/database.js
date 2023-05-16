const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //usecreateindex: true
}).then(() => {
    console.log("CONNECTED TO DB");
}).catch(() => {
    console.log("DB CONNECTION FAILED");
})
}

module.exports = dbConnection;