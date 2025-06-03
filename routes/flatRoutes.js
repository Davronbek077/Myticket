const express = require("express");
const router = express.Router();
const flatController = require("../controller/flatController");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flat:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: string
 *               condition:
 *                 type: string
 *     responses:
 *       201:
 *         description: Flat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/flat", flatController.createFlat);

/**
 * @swagger
 * /api/flat:
 *   get:
 *     tags: [Flat]
 *     summary: Get all flat
 *     responses:
 *       200:
 *         description: List of flat
 *       500:
 *         description: Server error
 */
router.get("/flat", flatController.getFlat);

/**
 * @swagger
 * /api/flat/search:
 *   get:
 *     tags: [Flat]
 *     summary: Search flat by etaj or condition
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for etaj or condition
 *     responses:
 *       200:
 *         description: List of flat matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/flat/search", flatController.searchFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Flat details
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.get("/flat/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/flat/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: string
 *               condition:
 *                 type: string
 *     responses:
 *       200:
 *         description: Flat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.put("/flat/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/flat/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       204:
 *         description: Flat deleted
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.delete("/flat/:id", flatController.deleteFlat);

module.exports = router;
