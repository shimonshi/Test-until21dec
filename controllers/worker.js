const { Worker } = require('../db/models');

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
    if (worker) {
      return res.status(200).json(worker);
    }
    return res.status(404).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createOne = async (req, res) => {
  try {
    const workerData = {
      id: req.params.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      about: req.body.about,
      departmentId: req.body.departmentId,
    };
    const worker = await Worker.create(workerData);
    return res.status(201).json(worker);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const worker = await Worker
      .destroy({ where: { id: req.params.id } });

    if (worker < 1) { return res.status(404).end(); }
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const workerModel = {
      id: req.params.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      about: req.body.about,
    };
    const [amountChanged, [newWorker]] = await Worker
      .update(workerModel, { where: { id: req.params.id }, returning: true });
    if (amountChanged < 1) { return res.status(404).end(); }
    return res.status(200).json(newWorker);
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
