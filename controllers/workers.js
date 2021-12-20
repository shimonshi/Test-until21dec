const Workers = require('../db/models/workers');

const getAll = async (req, res) => {
  try {
    const ALL = await Workers.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOne = async (req, res) => {
  try {
    const workers = await Workers.findByPk(req.params.id);
    return res.status(200).json(workers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const Worker_Model = {
      id: req.params.id,
      first_Name: req.body.first_Name,
      last_Name: req.body.last_Name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      about: req.body.about,
    };
    try {
      const workers = await Workers.create(Worker_Model);
      console.log('worker created');
      return res.status(201).json(workers);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const workers = await Workers
      .destroy({ Where: { id: req.params.id } });
    return res.status(200).json(workers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const Worker_Model = {
      id: req.params.id,
      first_Name: req.body.first_Name,
      last_Name: req.body.last_Name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      about: req.body.about,
    };
    try {
      const workers = await Workers
        .update(Worker_Model, { where: { id: req.params.id } });
      return res.status(200).json(workers);
    } catch (error) {
      // eslint-disable-next-line no-console
      return console.log('321');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
