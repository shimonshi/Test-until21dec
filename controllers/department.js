const { Department } = require('../db/models');

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
    if (department) {
      return res.status(200).json(department);
    }
    return res.status(404).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createOne = async (req, res) => {
  try {
    const departmentData = {
      id: req.params.id,
      name: req.body.name,
      info: req.body.info,
    };
    const department = await Department.create(departmentData);
    return res.status(200).json(department);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const amountDeleted = await Department
      .destroy({ where: { id: req.params.id } });
    if (amountDeleted < 1) { return res.status(404).end(); }
    return res.status(200).end();
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const departmentData = {
      id: req.params.id,
      name: req.body.name,
      info: req.body.info,
    };
    const [amountChanged, [newDepartment]] = await Department
      .update(departmentData, { where: { id: req.params.id }, returning: true });
    if (amountChanged < 1) { return res.status(404).end(); }
    return res.status(200).json(newDepartment);
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
