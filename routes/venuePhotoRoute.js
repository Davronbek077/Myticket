const express = require("express");
const router = express.Router();
const venuePhotoController = require("../controller/VenuePhotoController");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: Venue Photo management
 */

/**
 * @swagger
 * /api/venuephoto:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create a new venue photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue photo created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venuephoto", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venuephoto:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all venue photo
 *     responses:
 *       200:
 *         description: List of venue photo
 *       500:
 *         description: Server error
 */
router.get("/venuephoto", venuePhotoController.getVenuePhoto);

/**
 * @swagger
 * /api/venuephoto/search:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Search venue photo by url
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for url
 *     responses:
 *       200:
 *         description: List of venue photo matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/venuephoto/search", venuePhotoController.searchVenuePhoto);

/**
 * @swagger
 * /api/venuephoto/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get venue photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo details
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.get("/venuephoto/:id", venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/venuephoto/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update venue photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.put("/venuephoto/:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venuephoto/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete venue photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue photo ID
 *     responses:
 *       204:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.delete("/venuephoto/:id", venuePhotoController.deleteVenuePhoto);

module.exports = router;
