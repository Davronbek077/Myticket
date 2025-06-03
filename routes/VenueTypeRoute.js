const express = require("express");
const router = express.Router();
const VenueTypeController = require("../controller/VenueTypeController");

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: Venue type management
 */

/**
 * @swagger
 * /api/venuetype:
 *   post:
 *     tags: [VenueType]
 *     summary: Create a new venue type
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
 *         description: Venue type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venuetype", VenueTypeController.createVenueType);

/**
 * @swagger
 * /api/venuetype:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all venue types
 *     responses:
 *       200:
 *         description: List of venue types
 *       500:
 *         description: Server error
 */
router.get("/venuetype", VenueTypeController.getVenueType);

/**
 * @swagger
 * /api/venuetype/search:
 *   get:
 *     tags: [VenueType]
 *     summary: Search venue type by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for venue type name
 *     responses:
 *       200:
 *         description: List of matching venue type
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/venuetype/search", VenueTypeController.searchVenueType);

/**
 * @swagger
 * /api/venuetype/{id}:
 *   get:
 *     tags: [VenueType]
 *     summary: Get venue type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue type ID
 *     responses:
 *       200:
 *         description: Venue type details
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.get("/venuetype/:id", VenueTypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venuetype/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update venue type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue type ID
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
 *         description: Venue type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.put("/venuetype/:id", VenueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venuetype/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete venue type
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue type ID
 *     responses:
 *       200:
 *         description: Venue type deleted
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.delete("/venuetype/:id", VenueTypeController.deleteVenueType);

module.exports = router;
