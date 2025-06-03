const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticketController");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/ticket:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: string
 *               service_fee:
 *                 type: string
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket", ticketController.createTicket);

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all ticket
 *     responses:
 *       200:
 *         description: List of ticket
 *       500:
 *         description: Server error
 */
router.get("/ticket", ticketController.getTicket);

/**
 * @swagger
 * /api/ticket/search:
 *   get:
 *     tags: [Ticket]
 *     summary: Search ticket by price or service_fee
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for price or service_fee
 *     responses:
 *       200:
 *         description: List of ticket matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/ticket/search", ticketController.searchTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.get("/ticket/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: string
 *               service_fee:
 *                 type: string
 *               ticket_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put("/ticket/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket/:id", ticketController.deleteTicket);

module.exports = router;
