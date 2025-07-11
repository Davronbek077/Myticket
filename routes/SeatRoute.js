const express = require("express");
const router = express.Router();
const SeatController = require("../controller/SeatController");

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seatlarni boshqarish
 */

/**
 * @swagger
 * /api/seat:
 *   post:
 *     tags: [Seat]
 *     summary: Yangi o'rindiq yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: string
 *               rowNumber:
 *                 type: string
 *               number:
 *                 type: string
 *               venueId:
 *                 type: integer
 *               seatTypeId:
 *                 type: integer
 *               locationInSchema:
 *                 type: string
 *     responses:
 *       201:
 *         description: O'rindiq yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/seat", SeatController.createSeat);

/**
 * @swagger
 * /api/seat:
 *   get:
 *     tags: [Seat]
 *     summary: Barcha o'rindiqlarni olish
 *     responses:
 *       200:
 *         description: O'rindiqlarning ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/seat", SeatController.getSeat);

/**
 * @swagger
 * /api/seat/search:
 *   get:
 *     tags: [Seat]
 *     summary: O'rindiq raqami orqali o'rindiqlarni qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun o'rindiq raqami
 *     responses:
 *       200:
 *         description: Mos keluvchi o'rindiqlar ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/seat/search", SeatController.searchSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: ID orqali o'rindiq olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O'rindiq ID raqami
 *     responses:
 *       200:
 *         description: O'rindiq topildi
 *       404:
 *         description: O'rindiq topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/seat/:id", SeatController.getSeatById);

/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: O'rindiq ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O'rindiq ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: string
 *               rowNumber:
 *                 type: string
 *               number:
 *                 type: string
 *               venueId:
 *                 type: integer
 *               seatTypeId:
 *                 type: integer
 *               locationInSchema:
 *                 type: string
 *     responses:
 *       200:
 *         description: O'rindiq yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: O'rindiq topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/seat/:id", SeatController.updateSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: O'rindiqni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O'rindiq ID raqami
 *     responses:
 *       200:
 *         description: O'rindiq o'chirildi
 *       404:
 *         description: O'rindiq topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/seat/:id", SeatController.deleteSeat);

module.exports = router;
