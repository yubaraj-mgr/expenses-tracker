import UserSchema from "./UserSchema.js";

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

//@filter shoud be an object
export const getOneUser = (filter) => {
  return UserSchema.findOne(filter);
};
