const { Schema, model } = require('mongoose');

const AuditSchema = Schema({
    date: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    response: {
        type: Array
    },
});

module.exports = model('Audit', AuditSchema);