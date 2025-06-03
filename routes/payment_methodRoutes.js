const express = require("express");
const router = express.Router();
const payment_methodController = require("../controller/payment_methodController");

/**
 * @swagger
 * tags:
 *   name: Payment_method
 *   description: Payment method management
 */

/**
 * @swagger
 * /api/payment_method:
 *   post:
 *     tags: [Payment_method]
 *     summary: Create a new payment method
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/payment_method", payment_methodController.createPaymentMethod);

/**
 * @swagger
 * /api/payment_method:
 *   get:
 *     tags: [Payment_method]
 *     summary: Get all payment method
 *     responses:
 *       200:
 *         description: List of payment method
 *       500:
 *         description: Server error
 */
router.get("/payment_method", payment_methodController.getPaymentMethod);

/**
 * @swagger
 * /api/payment_method/search:
 *   get:
 *     tags: [Payment_method]
 *     summary: Search payment method by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for name
 *     responses:
 *       200:
 *         description: List of payment method matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/payment_method/search", payment_methodController.searchPaymentMethod);

/**
 * @swagger
 * /api/payment_method/{id}:
 *   get:
 *     tags: [Payment_method]
 *     summary: Get payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment method ID
 *     responses:
 *       200:
 *         description: Payment method details
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
router.get("/payment_method/:id", payment_methodController.getPaymentMethodById);

/**
 * @swagger
 * /api/payment_method/{id}:
 *   put:
 *     tags: [Payment_method]
 *     summary: Update payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment method updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
router.put("/payment_method/:id", payment_methodController.updatePaymentMethod);

/**
 * @swagger
 * /api/payment_method/{id}:
 *   delete:
 *     tags: [Payment_method]
 *     summary: Delete payment method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment method ID
 *     responses:
 *       204:
 *         description: Payment method deleted
 *       404:
 *         description: Payment method not found
 *       500:
 *         description: Server error
 */
router.delete("/payment_method/:id", payment_methodController.deletePaymentMethod);

module.exports = router;
