const {Admin} = require("../model");
const {validateAdmin} = require("../validation/adminValidation");
const {Op} = require("sequelize");

exports.createAdmin = async (req, res) => {
    const {error} = validateAdmin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const admin = await Admin.create(req.body);
        res.status(201).send(admin);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        res.status(200).send(admin);
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) return res.status(404).send("Admin not found");
        res.status(200).send(admin);
    }catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateAdmin = async (req, res) => {
    const {error} = validateAdmin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) return res.status(404).send("Admin not found");
        await admin.update(req.body);
        res.status(200).send(admin);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (!admin) return res.status(404).send("Admin not found");

        const adminData = admin.toJSON();

        await admin.destroy();
        res.status(204).send(adminData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.searchAdmin = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const {query} = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const admin = await Admin.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.iLike]: `%${query}%`}},
                ],
            },
        });

        res.status(200).send(admin);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
