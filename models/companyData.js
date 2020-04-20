const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var companyDataSchema = new Schema({
    company_name: {type: String},
    department: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    title: {type: String},
    office: {type: String},
    mobile: {type: String},
    policyName: {type: String},
    policyDetail: {type: String}

});

const Company = mongoose.model('CompanyData', companyDataSchema)

module.exports = Company