const mongoose = require('mongoose');
const studentsSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    enrolledDepartment:{
        type: String,
        require: true
    },
    enrolledDate: {
        type: Date,
        default: Date.now()
    }
}
);

module.exports = mongoose.model(`studentsModel`,studentsSchema);