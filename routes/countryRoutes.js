const express = require("express");
const router = express.Router();
const countryController = require("../controller/countryController");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/country:
 *   post:
 *     tags: [Country]
 *     summary: Create a new country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Country created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/country", countryController.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     tags: [Country]
 *     summary: Get all country
 *     responses:
 *       200:
 *         description: List of country
 *       500:
 *         description: Server error
 */
router.get("/country", countryController.getCountry);

/**
 * @swagger
 * /api/country/search:
 *   get:
 *     tags: [Country]
 *     summary: Search country by country
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for country
 *     responses:
 *       200:
 *         description: List of country matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/country/search", countryController.searchCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.get("/country/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.put("/country/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       204:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.delete("/country/:id", countryController.deleteCountry);

module.exports = router;
