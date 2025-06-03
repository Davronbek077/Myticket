const express = require("express");
const router = express.Router();
const EventTypeController = require("../controller/EventTypeController");

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: Event turlarini boshqarish
 */

/**
 * @swagger
 * /api/eventtype:
 *   post:
 *     tags: [EventType]
 *     summary: Yangi event turi yaratish
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
 *         description: Event turi yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/eventtype", EventTypeController.createEventType);

/**
 * @swagger
 * /api/eventtype:
 *   get:
 *     tags: [EventType]
 *     summary: Barcha event turlarini olish
 *     responses:
 *       200:
 *         description: Event turlarining roy'xati
 *       500:
 *         description: Server xatosi
 */
router.get("/eventtype", EventTypeController.getEventType);

/**
 * @swagger
 * /api/eventtype/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: ID orqali event turini olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event turi ID raqami
 *     responses:
 *       200:
 *         description: Event turi topildi
 *       404:
 *         description: Event turi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/eventtype/:id", EventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/eventtype/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Event turini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event turi ID raqami
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
 *         description: Event turi yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Event turi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/eventtype/:id", EventTypeController.updateEventType);

/**
 * @swagger
 * /api/eventtype/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Event turini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event turi ID raqami
 *     responses:
 *       200:
 *         description: Event turi o'chirildi
 *       404:
 *         description: Event turi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/eventtype/:id", EventTypeController.deleteEventType);

module.exports = router;
