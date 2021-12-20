const Worker = require('../db/models/worker');

const getAll = async (req, res) => {
  try {
    const ALL = await Worker.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOne = async (req, res) => {
  try {
    const worker = await Worker.findByPk(req.params.id);
    return res.status(200).json(worker);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const Worker_Model = {
      id: req.params.id,
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      pNumber: req.body.pNumber,
      about: req.body.about,
    };
    try {
      const worker = await Worker.create(Worker_Model);
      console.log('worker created');
      return res.status(201).json(worker);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const worker = await Worker
      .destroy({ where: { id: req.params.id } });
    return res.status(200).json(worker);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const workerModel = {
      id: req.params.id,
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      pNumber: req.body.pNumber,
      about: req.body.about,
    };
    try {
      const worker = await Worker
        .update(workerModel, { where: { id: req.params.id } });
      return res.status(200).json(worker);
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
