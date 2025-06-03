const express = require("express");
const router = express.Router();
const ticket_statusController = require("../controller/ticket_statusController");

/**
 * @swagger
 * tags:
 *   name: Ticket_status
 *   description: Ticket status management
 */

/**
 * @swagger
 * /api/ticket_status:
 *   post:
 *     tags: [Ticket_status]
 *     summary: Create a new ticket status
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
 *         description: ticket status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket_status", ticket_statusController.createTicketStatus);

/**
 * @swagger
 * /api/ticket_status:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Get all ticket status
 *     responses:
 *       200:
 *         description: List of ticket status
 *       500:
 *         description: Server error
 */
router.get("/ticket_status", ticket_statusController.getTicketStatus);

/**
 * @swagger
 * /api/ticket_status/search:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Search ticket status by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for name
 *     responses:
 *       200:
 *         description: List of ticket status matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/ticket_status/search", ticket_statusController.searchTicketStatus);

/**
 * @swagger
 * /api/ticket_status/{id}:
 *   get:
 *     tags: [Ticket_status]
 *     summary: Get ticket status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket status ID
 *     responses:
 *       200:
 *         description: Ticket status details
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.get("/ticket_status/:id", ticket_statusController.getTicketStatusById);

/**
 * @swagger
 * /api/ticket_status/{id}:
 *   put:
 *     tags: [Ticket_status]
 *     summary: Update ticket status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket status ID
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
 *         description: Ticket status updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.put("/ticket_status/:id", ticket_statusController.updateTicketStatus);

/**
 * @swagger
 * /api/ticket_status/{id}:
 *   delete:
 *     tags: [Ticket_status]
 *     summary: Delete ticket status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket status ID
 *     responses:
 *       204:
 *         description: Ticket status deleted
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket_status/:id", ticket_statusController.deleteTicketStatus);

module.exports = router;
