const userModel = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const userId = await userModel.createUser(newUser);
    res.status(201).send(`User added with ID: ${userId}`);
  } catch (error) {
    res.status(400).send(`Error adding user: ${error.message}`);
  }
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send(`Error getting user: ${error.message}`);
  }
};
