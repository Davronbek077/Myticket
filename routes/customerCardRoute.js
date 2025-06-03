const express = require("express");
const router = express.Router();
const customerCardController = require("../controller/customerCardController");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: Customer card management
 */

/**
 * @swagger
 * /api/customerCard:
 *  post:
 *    tags: [CustomerCard]
 *    summary: Create a new customer card
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
 *              phone:
 *                type: string
 *              number:
 *                type: string
 *              month:
 *                type: string
 *              year:
 *                type: string
 *              is_active:
 *                type: boolean
 *              is_man:
 *                type: boolean
 *    responses:
 *     201:
 *       description: Customer card created
 *     400:
 *       description: Invalid input
 *     500:
 *       description: Server error
 */
router.post("/customerCard", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customerCard:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all customer cards
 *     responses:
 *       200:
 *         description: List of customer cards
 *       500:
 *         description: Server error
 */
router.get("/customerCard", customerCardController.getCustomerCard);

/**
 * @swagger
 * /api/customerCard/search:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Search customer card by last name, firstname, phone
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for name, phone, number, month
 *     responses:
 *       200:
 *         description: List of customer cards matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/customerCard/search", customerCardController.searchCustomerCard);

/**
 * @swagger
 * /api/customerCard/{id}:
 *  get:
 *    tags: [CustomerCard]
 *    summary: Get customer card by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customer card ID
 *    responses:
 *      200:
 *        description: Customer card details
 *      404:
 *        description: Customer card not found
 *      500:
 *        description: Server error
 */
router.get("/customerCard/:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/customerCard/{id}:
 *   put:
 *     tags: [CustomerCard]
 *     summary: Update customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer card ID
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
 *              phone:
 *                type: string
 *              number:
 *                type: string
 *              month:
 *                type: string
 *              is_active:
 *                type: boolean
 *              is_man:
 *                type: boolean
 *     responses:
 *      200:
 *        description: Customer card updated
 *      400:
 *        description: Invalid input
 *      404:
 *        description: Customer card not found
 *      500:
 *        description: Server error
 */
router.put("/customerCard/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customerCard/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete customer card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer card ID
 *     responses:
 *       204:
 *         description: Customer card deleted
 *       404:
 *         description: Customer card not found
 *       500:
 *         description: Server error
 */
router.delete("/customerCard/:id", customerCardController.deleteCustomerCard);

module.exports = router;
