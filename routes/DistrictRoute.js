const express = require("express");
const router = express.Router();
const DistrictController = require("../controller/DistrictController");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: Tumanlarni boshqarish
 */

/**
 * @swagger
 * /api/district:
 *   post:
 *     tags: [District]
 *     summary: Yangi tuman yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tuman nomi
 *               regionId:
 *                 type: integer
 *                 description: Mintaqa ID raqami (region bilan bog‘liq)
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/district", DistrictController.createDistrict);

/**
 * @swagger
 * /api/district:
 *   get:
 *     tags: [District]
 *     summary: Barcha tumanlarni olish
 *     responses:
 *       200:
 *         description: Barcha tumanlarning ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/district", DistrictController.getDistrict);

/**
 * @swagger
 * /api/district/search:
 *   get:
 *     tags: [District]
 *     summary: Tuman nomi orqali tumanlarni qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun tuman nomi
 *     responses:
 *       200:
 *         description: Mos keluvchi tumanlar ro‘yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/district/search", DistrictController.searchDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   get:
 *     tags: [District]
 *     summary: ID orqali tumanni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Tuman ID raqami
 *     responses:
 *       200:
 *         description: Tuman topildi
 *       404:
 *         description: Tuman topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/district/:id", DistrictController.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     tags: [District]
 *     summary: Tuman ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Tuman ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Tuman yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Tuman topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/district/:id", DistrictController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Tumanni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Tuman ID raqami
 *     responses:
 *       200:
 *         description: Tuman o'chirildi
 *       404:
 *         description: Tuman topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/district/:id", DistrictController.deleteDistrict);

module.exports = router;
