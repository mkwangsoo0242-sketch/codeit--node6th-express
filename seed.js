import mongoose from 'mongoose';
import Task from './task.js';
import data from './seedData.js';
import { DATABASE_URL } from './constants.js';

await mongoose.connect(DATABASE_URL);

await Task.deleteMany({});
await Task.insertMany(data, { ordered: true });

await mongoose.connection.close();
