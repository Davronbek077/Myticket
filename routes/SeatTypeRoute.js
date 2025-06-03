const express = require("express");
const router = express.Router();
const SeatTypeController = require("../controller/SeatTypeController");

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: O'rindiq turlarini boshqarish
 */

/**
 * @swagger
 * /api/seattype:
 *   post:
 *     tags: [SeatType]
 *     summary: Yangi o'rindiq turini yaratish
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
 *         description: O'rindiq turi yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/seattype", SeatTypeController.createSeatType);

/**
 * @swagger
 * /api/seattype:
 *   get:
 *     tags: [SeatType]
 *     summary: Barcha o'rindiq turlarini olish
 *     responses:
 *       200:
 *         description: O'rindiq turlarining ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/seattype", SeatTypeController.getSeatType);

/**
 * @swagger
 * /api/seattype/search:
 *   get:
 *     tags: [SeatType]
 *     summary: O'rindiq turi nomi orqali qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun o'rindiq turi nomi
 *     responses:
 *       200:
 *         description: Mos keluvchi o'rindiq turlari ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/seattype/search", SeatTypeController.searchSeatType);

/**
 * @swagger
 * /api/seattype/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: ID orqali o'rindiq turini olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O'rindiq turi ID raqami
 *     responses:
 *       200:
 *         description: O'rindiq turi topildi
 *       404:
 *         description: O'rindiq turi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/seattype/:id", SeatTypeController.getSeatTypeById);

/**
 * @swagger
 * /api/seattype/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: O'rindiq turi ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O'rindiq turi ID raqami
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
 *         description: O'rindiq turi yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: O'rindiq turi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/seattype/:id", SeatTypeController.updateSeatType);

/**
 * @swagger
 * /api/seattype/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: O'rindiq turini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: O'rindiq turi ID raqami
 *     responses:
 *       200:
 *         description: O'rindiq turi o'chirildi
 *       404:
 *         description: O'rindiq turi topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/seattype/:id", SeatTypeController.deleteSeatType);

module.exports = router;
