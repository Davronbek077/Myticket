const {Customer_card, Customer} = require("../model");
const {validateCustomerCard} = require("../validation/customerCardValidaton");
const {Op} = require("sequelize");

exports.createCustomerCard = async (req, res) => {
    const {error} = validateCustomerCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const customerCard = await Customer_card.create(req.body);
        res.status(201).send(customerCard);
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
};

exports.getCustomerCard = async (req, res) => {
    try {
        const customerCard = await Customer_card.findAll();
        res.status(200).send(customerCard);
    } catch (error) {
        res.status(500).send(err.message);
    }
};

exports.getCustomerCardById = async (req, res) => {
    try {
        const customerCard = await Customer_card.findByPk(req.params.id, {
            include: [
                {
                    model: Customer,
                    as: "customers",
                },
            ],
        });
        if (!customerCard) return res.status(404).send("Customer card not found");
        res.status(200).send(customerCard);
    }catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCustomerCard = async (req, res) => {
    const {error} = validateCustomerCard(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const customerCard = await Customer_card.findByPk(req.params.id);
        if (!customerCard) return res.status(404).send("Customer card not found");
        await customerCard.update(req.body);
        res.status(200).send(customerCard);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCustomerCard = async (req, res) => {
    try {
        const customerCard = await Customer_card.findByPk(req.params.id);
        if (!customerCard) return res.status(404).send("Customer card not found");

        const customerCardData = customerCard.toJSON();

        await customerCard.destroy();
        res.status(204).send(customerCardData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.searchCustomerCard = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const {query} = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const customerCard = await Customer_card.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.iLike]: `%${query}%`}},
                    {phone: {[Op.iLike]: `%${query}%`}},
                    {number: {[Op.iLike]: `%${query}%`}},
                    {month: {[Op.iLike]: `%${query}%`}},
                ],
            },
        });

        res.status(200).send(customerCard);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
