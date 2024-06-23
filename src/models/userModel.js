import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
<<<<<<< HEAD
        type: String,
        required: [true, "Please provide a first name"]
    },
    lname: {
        type: String,
        required: [true, "Please provide a last name"]

=======
        type: String,
        required: [true, "Please provide a fname"],
        
    },
    username: {
        type: String,
        required: [true, "Please provide a lname"],
>>>>>>> 965a7003b4c2942f62deb1cb63104d3d59d204dc
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;