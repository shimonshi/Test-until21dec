const User = require('../db/models/users');

exports.getAll = async (req, res) => {
  try {
    const ALL = await User.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};
