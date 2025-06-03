const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

/**
 * @swagger
 * /api/booking:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAT:
 *                 type: string
 *               fineshed:
 *                 type: string
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/booking", bookingController.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all booking
 *     responses:
 *       200:
 *         description: List of booking
 *       500:
 *         description: Server error
 */
router.get("/booking", bookingController.getBooking);

/**
 * @swagger
 * /api/booking/search:
 *   get:
 *     tags: [Booking]
 *     summary: Search booking by fineshed or createdAT
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for fineshed or createdAT
 *     responses:
 *       200:
 *         description: List of booking matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/booking/search", bookingController.searchBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.get("/booking/:id", bookingController.getBookingById);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: number
 *               createdAT:
 *                 type: string
 *               fineshed:
 *                 type: string
 *               payment_method_id:
 *                 type: number
 *               delivery_method_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Booking updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put("/booking/:id", bookingController.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       204:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.delete("/booking/:id", bookingController.deleteBooking);

module.exports = router;
