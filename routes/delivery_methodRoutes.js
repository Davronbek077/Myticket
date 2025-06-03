const express = require("express");
const router = express.Router();
const delivery_methodController = require("../controller/delivery_methodController");

/**
 * @swagger
 * tags:
 *   name: Delivery_method
 *   description: Delivery method management
 */

/**
 * @swagger
 * /api/delivery_method:
 *   post:
 *     tags: [Delivery_method]
 *     summary: Create a new delivery method
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
 *         description: Delivery method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/delivery_method", delivery_methodController.createDelivery_method);

/**
 * @swagger
 * /api/delivery_method:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Get all delivery method
 *     responses:
 *       200:
 *         description: List of delivery method
 *       500:
 *         description: Server error
 */
router.get("/delivery_method", delivery_methodController.getDelivery_method);

/**
 * @swagger
 * /api/delivery_method/search:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Search delivery method by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for name
 *     responses:
 *       200:
 *         description: List of delivery method matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/delivery_method/search", delivery_methodController.searchDelivery_method);

/**
 * @swagger
 * /api/delivery_method/{id}:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Get delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery method ID
 *     responses:
 *       200:
 *         description: Delivery method details
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
router.get("/delivery_method/:id", delivery_methodController.getDelivery_methodById);

/**
 * @swagger
 * /api/delivery_method/{id}:
 *   put:
 *     tags: [Delivery_method]
 *     summary: Update delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery method ID
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
 *         description: Delivery method updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
router.put("/delivery_method/:id", delivery_methodController.updateDelivery_method);

/**
 * @swagger
 * /api/delivery_method/{id}:
 *   delete:
 *     tags: [Delivery_method]
 *     summary: Delete delivery method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery method ID
 *     responses:
 *       204:
 *         description: Delivery method deleted
 *       404:
 *         description: Delivery method not found
 *       500:
 *         description: Server error
 */
router.delete("/delivery_method/:id", delivery_methodController.deleteDelivery_method);

module.exports = router;
