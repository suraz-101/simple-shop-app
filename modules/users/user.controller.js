const userSchema = require("./user.model");

const createUser = (payload) => {
  return userSchema.create(payload);
};

const getAllUsers = () => {
  return userSchema.find();
};

const getUser = (_id) => {};

const updateUserDetails = (_id, payload) => {};
const deleteUser = (_id) => {};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUserDetails,
  deleteUser,
};
