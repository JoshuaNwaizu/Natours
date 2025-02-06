const express = require('express');
const { signup, login } = require('../controllers/authController');

const userRouter = express.Router();
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
// userRouter.use(protect);
userRouter.post('/signup', signup);
userRouter.post('/login', login);
// ROUTINGS FOR USERS
userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
