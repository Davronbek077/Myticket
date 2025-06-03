const {Customer_address, Country, Region, District, Customer, Flat} = require("../model");
const {validateCustomerAddress} = require("../validation/customerAddressValidation");
const {Op} = require("sequelize");

exports.createCustomerAddress = async (req, res) => {
    const {error} = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customerAddress = await Customer_address.create(req.body);
        res.status(201).send(customerAddress);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCustomerAddress = async (req, res) => {
    try {
        const customerAddress = await Customer_address.findAll();
        res.status(200).send(customerAddress);
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerAddressById = async (req, res) => {
    try {
        const customerAddress = await Customer_address.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customers",
                },
                {
                    model: Flat,
                    as: "flats",
                },
                {
                    model: Country,
                    as: "countrys",
                },
                {
                    model: Region,
                    as: "regions",
                },
                {
                    model: District,
                    as: "districts",
                },
            ],
        });
        if (!customerAddress) return res.status(404).send("Customer address not found");
        res.status(200).send(customerAddress);
    }catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerAddress = async (req, res) => {
    const {error} = validateCustomerAddress(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customerAddress = await Customer_address.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).send("Customer address not found");
        await customerAddress.update(req.body);
        res.status(200).send(customerAddress);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const customerAddress = await Customer_address.findByPk(req.params.id);
        if (!customerAddress) return res.status(404).send("Customer address not found");

        const customerAddressData = customerAddress.toJSON();

        await customerAddress.destroy();
        res.status(204).send(customerAddressData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.searchCustomerAddress = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const {query} = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const customerAddress = await Customer_address.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.iLike]: `%${query}%`}},
                    {street: {[Op.iLike]: `%${query}%`}},
                    {house: {[Op.iLike]: `%${query}%`}},
                ],
            },
        });

        res.status(200).send(customerAddress);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
