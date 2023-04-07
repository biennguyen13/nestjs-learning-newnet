import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true, collection: 'users' },
);

export { UserSchema };

export interface User extends Document {
  name: string;
  email: string;
  password: string;
}
