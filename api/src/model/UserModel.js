import UserSchema from "./UserSchema.js";

// This functions return promises
export const insertUser = (data) => {
  // this code basically returns promise whch goes to the database and insert the given data for us
  // This will basically send whole class not object it will excuted after we do await on userRouter than we will get .save() things
  return UserSchema(data).save();
};

// fetch data returns the query not promise but when we do await to thros data in array of object
export const fetchAllData = () => {
  return UserSchema.find();
};

// export const deleteManyTask = (ids) => {
//   return UserSchema.deleteMany({
//     _id: {
//       $in: ids,
//     },
//   });
// };

// What is the different between findOne and findbyid(id);
export const getOneUser = (filter) => {
  return UserSchema.findOne(filter);
};
