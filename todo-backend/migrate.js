const mongoose = require('mongoose');
const Todo = require("./dbTodos");
const User = require("./dbUsers");

const dotenv = require('dotenv');

dotenv.config();

const connectionURL = process.env.MONGO_URI;

async function migrateData() {
  try {
    await mongoose.connect(connectionURL);

    const defaultUser = await User.create({
        id: "123",
      name: 'default_user',
      email: 'default@example.com',
    });

    await Todo.updateMany({}, { $set: { user: defaultUser._id } });

    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mongoose.disconnect();
  }
}

migrateData();