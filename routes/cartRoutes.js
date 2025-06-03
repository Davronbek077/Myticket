const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAT:
 *                 type: string
 *               fineshedAT:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart", cartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all cart
 *     responses:
 *       200:
 *         description: List of cart
 *       500:
 *         description: Server error
 */
router.get("/cart", cartController.getCart);

/**
 * @swagger
 * /api/cart/search:
 *   get:
 *     tags: [Cart]
 *     summary: Search cart by createdAT or fineshedAT
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for createdAT or fineshedAT
 *     responses:
 *       200:
 *         description: List of cart matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/cart/search", cartController.searchCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.get("/cart/:id", cartController.getCartById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAT:
 *                 type: string
 *               fineshedAT:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.put("/cart/:id", cartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       204:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.delete("/cart/:id", cartController.deleteCart);

module.exports = router;
