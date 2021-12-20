const Departments = require('../db/models/department');

exports.getAll = async (req, res) => {
  try {
    const ALL = await Departments.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const departments = await Departments.findByPk(req.params.id);
    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const department_Model = {
      id: req.params.id,
      name: req.body.name,
      info: req.body.info,
    };
    try {
      const departments = await Departments.create(department_Model);
      console.log('worker created');
      return res.status(200).json(departments);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const departments = await Departments
      .destroy({ Where: { id: req.params.id } });
    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const department_Model = {
      id: req.params.id,
      name: req.body.name,
      info: req.body.info,
    };
    try {
      const departments = await Departments
        .update(department_Model, { where: { id: req.params.id } });
      return res.status(200).json(departments);
    } catch (error) {
      // eslint-disable-next-line no-console
      return console.log('321');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
