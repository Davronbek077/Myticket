const express = require("express");
const router = express.Router();
const customerAddressController = require("../controller/CustomerAddressController");

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Customer Address management
 */

/**
 * @swagger
 * /api/customerAddress:
 *  post:
 *    tags: [CustomerAddress]
 *    summary: Create a new customer address
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              customer_id:
 *                type: integer
 *              name:
 *                type: string
 *              country_id:
 *                type: integer
 *              region_id:
 *                type: integer
 *              district_id:
 *                type: integer
 *              street:
 *                type: string
 *              house:
 *                type: string
 *              flat:
 *                type: integer
 *              location:
 *                type: string
 *              post_index:
 *                type: string
 *              info:
 *                type: string
 *    responses:
 *     201:
 *       description: Customer address created
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/customerAddress", customerAddressController.createCustomerAddress);

/**
 * @swagger
 * /api/customerAddress:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customer address
 *     responses:
 *       200:
 *         description: List of customer adress
 *       500:
 *         description: Server error
 */
router.get("/customerAddress", customerAddressController.getCustomerAddress);

/**
 * @swagger
 * /api/customerAddress/search:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Search customer address by lastname, firstname, phone
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for lastname, firstname, phone
 *     responses:
 *       200:
 *         description: List of customer address matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/customerAddress/search", customerAddressController.searchCustomerAddress);

/**
 * @swagger
 * /api/customerAddress/{id}:
 *  get:
 *    tags: [CustomerAddress]
 *    summary: Get customer address by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customer address ID
 *    responses:
 *      200:
 *        description: Customer address details
 *      404:
 *        description: Customer address not found
 *      500:
 *        description: Server error
 */
router.get("/customerAddress/:id", customerAddressController.getCustomerAddressById);

/**
 * @swagger
 * /api/customerAddress/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer address ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              customer_id:
 *                type: integer
 *              name:
 *                type: string
 *              country_id:
 *                type: integer
 *              region_id:
 *                type: integer
 *              district_id:
 *                type: integer
 *              street:
 *                type: string
 *              house:
 *                type: string
 *              flat:
 *                type: integer
 *              location:
 *                type: string
 *              post_index:
 *                type: string
 *              info:
 *                type: string
 *     responses:
 *      200:
 *        description: Customer address updated
 *      400:
 *        description: Invalid input
 *      404:
 *        description: Customer address not found
 *      500:
 *        description: Server error
 */
router.put("/customerAddress/:id", customerAddressController.updateCustomerAddress);

/**
 * @swagger
 * /api/customerAddress/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete customer address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer address ID
 *     responses:
 *       204:
 *         description: Customer address deleted
 *       404:
 *         description: Customer address not found
 *       500:
 *         description: Server error
 */
router.delete("/customer/:id", customerAddressController.deleteCustomerAddress);

module.exports = router;
