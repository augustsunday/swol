import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: false},
})

const Exercise = mongoose.model("User", exerciseSchema)

const addUser = async (user_data) => {
    const user = new User(user_data);
    return user.save()
}

const retrieveUser = async (filter) => {
    const query = User.find(filter)
    return query.exec()
}

const updateUser = async (filter, update) => {
    const result = await User.updateOne(filter,update);
    return result.modifiedCount;
}

const deleteUser = async (filter) => {
    const result = await User.deleteMany(filter);
    return result.deletedCount;
}

export {addUser, retrieveUser, updateUser, deleteUser}