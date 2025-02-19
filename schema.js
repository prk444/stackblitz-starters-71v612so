const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {type: String,
                required: true,
                unique: true},
    email: {type: String,
            required: true,
            unique: true},
    password: {type: String,
               required: true},
    roles : {type: [String],
             required: true},
});
const ProfileSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,
             ref: 'User'},
    firstname: {type: String,
                required: true},
    lastname: {type: String,
                required: true},
    age: {type: Number, 
          required: true},
});
const TrackingSchema = new mongoose.Schema({
    lastlogin : {type: Date,
                 required: true},
    user: {type: mongoose.Schema.Types.ObjectId,
            ref: 'User'},
});

const UserModel = mongoose.model('User', userSchema);
const ProfileModel = mongoose.model('Profile', ProfileSchema);
const TrackingModel = mongoose.model('Tracking', TrackingSchema);
module.exports = UserModel;
module.exports = ProfileModel;
module.exports = TrackingModel;