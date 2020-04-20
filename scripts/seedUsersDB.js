const mongoose = require("mongoose")
const db = require("../models")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/toolbox")

const usersSeed = [
    {
        "email": "testing@yahoo.com",
        "password": "testing123"
    }
]

db.User.remove({})
    .then( () => db.User.collection.insertMany(usersSeed))
    .then( (data) => {
        console.log(`${data.result.n} records inserted!`)
        process.exit(0)
    })
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
        
    