const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var companySchema = new Schema({
    companyName: {type: String},
    uId: { type: String },
    departments: [
        {
            department: { type: String },
            firstName: { type: String },
            lastName: { type: String },
            title: { type: String },
            office: { type: String },
            mobile: { type: String }
        }
    ],
    policies: [
        {
            policyName: {type: String},
            policyDetail: {type: String}
        }
    ]

});

const Company = mongoose.model('Company', companySchema)

module.exports = Company