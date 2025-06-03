const express = require("express");
const router = express.Router();
const cart_itemController = require("../controller/cart_itemController");

/**
 * @swagger
 * tags:
 *   name: Cart_item
 *   description: Cart item management
 */

/**
 * @swagger
 * /api/cart_item:
 *   post:
 *     tags: [Cart_item]
 *     summary: Create a new cart item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Cart item created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart_item", cart_itemController.createCartItem);

/**
 * @swagger
 * /api/cart_item:
 *   get:
 *     tags: [Cart_item]
 *     summary: Get all cart item
 *     responses:
 *       200:
 *         description: List of cart item
 *       500:
 *         description: Server error
 */
router.get("/cart_item", cart_itemController.getCartItem);

/**
 * @swagger
 * /api/cart_item/search:
 *   get:
 *     tags: [Cart_item]
 *     summary: Search cart item by quantity
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for quantity
 *     responses:
 *       200:
 *         description: List of cart item matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/cart_item/search", cart_itemController.searchCartItem);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   get:
 *     tags: [Cart_item]
 *     summary: Get cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart item ID
 *     responses:
 *       200:
 *         description: Cart item details
 *       404:
 *         description: Cart item not found
 *       500:
 *         description: Server error
 */
router.get("/cart_item/:id", cart_itemController.getCartItemById);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   put:
 *     tags: [Cart_item]
 *     summary: Update cart item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart_item updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart_item not found
 *       500:
 *         description: Server error
 */
router.put("/cart_item/:id", cart_itemController.updateCartItem);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   delete:
 *     tags: [Cart_item]
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     responses:
 *       204:
 *         description: Cart_item deleted
 *       404:
 *         description: Cart_item not found
 *       500:
 *         description: Server error
 */
router.delete("/cart_item/:id", cart_itemController.deleteCartItem);

module.exports = router;
