import transactionSchema from "./TransactionSchema.js";

// This functions return promises
export const addTransaction = (obj) => {
  // this code basically returns promise whch goes to the database and insert the given data for us
  // This will basically send whole class not object it will excuted after we dod await on userRouter
  return transactionSchema(obj).save();
};

// // fetch data returns the query not promise but when we do await to thros data in array of object
// export const fetchAllData = () => {
//   return transactionSchema.find();
// };

// export const deleteManyTask = (ids) => {
//   return transactionSchema.deleteMany({
//     _id: {
//       $in: ids,
//     },
//   });
// };

// // What is the different between findOne and findbyid(id);
// export const getOneUser = (filter) => {
//   return transactionSchema.findOne(filter);
// };

// filter is an obj

export const getTransaction = (filter) => {
  return transactionSchema.find(filter);
};

export const deleteTransaction = (filter) => {
  return transactionSchema.findOneAndDelete(filter);
};
