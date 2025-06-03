const express = require("express");
const router = express.Router();
const discountController = require("../controller/discountController");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount management
 */

/**
 * @swagger
 * /api/discount:
 *   post:
 *     tags: [Discount]
 *     summary: Create a new discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Discount created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/discount", discountController.createDiscount);

/**
 * @swagger
 * /api/discount:
 *   get:
 *     tags: [Discount]
 *     summary: Get all discount
 *     responses:
 *       200:
 *         description: List of discount
 *       500:
 *         description: Server error
 */
router.get("/discount", discountController.getDiscount);

/**
 * @swagger
 * /api/discount/search:
 *   get:
 *     tags: [Discount]
 *     summary: Search discount by discount
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for discount
 *     responses:
 *       200:
 *         description: List of discount matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/discount/search", discountController.searchDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.get("/discount/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/discount/{id}:
 *   put:
 *     tags: [Discount]
 *     summary: Update discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Discount updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.put("/discount/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       204:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.delete("/discount/:id", discountController.deleteDiscount);

module.exports = router;
