const express = require("express");
const router = express.Router();
const LangController = require("../controller/LangController");

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: Tilni boshqarish
 */

/**
 * @swagger
 * /api/lang:
 *   post:
 *     tags: [Lang]
 *     summary: Yangi til yaratish
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
 *         description: Til yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/lang", LangController.createLang);

/**
 * @swagger
 * /api/lang:
 *   get:
 *     tags: [Lang]
 *     summary: Barcha tillarni olish
 *     responses:
 *       200:
 *         description: Tillarning ro‘yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/lang", LangController.getLang);

/**
 * @swagger
 * /api/lang/search:
 *   get:
 *     tags: [Lang]
 *     summary: Til nomi orqali tillarni qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun til nomi
 *     responses:
 *       200:
 *         description: Mos keluvchi tillar ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/lang/search", LangController.searchLang);

/**
 * @swagger
 * /api/lang/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: ID orqali tilni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Til ID raqami
 *     responses:
 *       200:
 *         description: Til topildi
 *       404:
 *         description: Til topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/lang/:id", LangController.getLangById);

/**
 * @swagger
 * /api/lang/{id}:
 *   put:
 *     tags: [Lang]
 *     summary: Tilni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Til ID raqami
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
 *         description: Til yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Til topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/lang/:id", LangController.updateLang);

/**
 * @swagger
 * /api/lang/{id}:
 *   delete:
 *     tags: [Lang]
 *     summary: Tilni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Til ID raqami
 *     responses:
 *       200:
 *         description: Til o'chirildi
 *       404:
 *         description: Til topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/lang/:id", LangController.deleteLang);

module.exports = router;
