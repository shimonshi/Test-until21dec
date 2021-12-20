const Department = require('../db/models/department');

const getAll = async (req, res) => {
  try {
    const ALL = await Department.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOne = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const department_Model = {
      id: req.params.id,
      name: req.body.name,
      info: req.body.info,
    };
    try {
      const department = await Department.create(department_Model);
      console.log('department created');
      return res.status(200).json(department);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const department = await Department
      .destroy({ where: { id: req.params.id } });
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const department_Model = {
      id: req.params.id,
      name: req.body.name,
      info: req.body.info,
    };
    try {
      const department = await Department
        .update(department_Model, { where: { id: req.params.id } });
      return res.status(200).json(department);
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
  updateOne,
  createOne,
  deleteOne,
};
