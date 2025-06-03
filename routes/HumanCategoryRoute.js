const express = require("express");
const router = express.Router();
const HumanCategoryController = require("../controller/HumanCategoryController");

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: Odam kategoriyalarini boshqarish
 */

/**
 * @swagger
 * /api/humancategory:
 *   post:
 *     tags: [HumanCategory]
 *     summary: Yangi odam kategoriyasini yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Kategoriya yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/humancategory", HumanCategoryController.createHumanCategory);

/**
 * @swagger
 * /api/humancategory:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Barcha odam kategoriyalarini olish
 *     responses:
 *       200:
 *         description: Kategoriyalar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/humancategory", HumanCategoryController.getHumanCategory);

/**
 * @swagger
 * /api/humancategory/{id}:
 *   get:
 *     tags: [HumanCategory]
 *     summary: ID orqali odam kategoriyasini olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kategoriya ID raqami
 *     responses:
 *       200:
 *         description: Kategoriya topildi
 *       404:
 *         description: Kategoriya topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/humancategory/:id", HumanCategoryController.getHumanCategoryById);

/**
 * @swagger
 * /api/humancategory/{id}:
 *   put:
 *     tags: [HumanCategory]
 *     summary: Odam kategoriyasini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kategoriya ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: integer
 *               finish_age:
 *                 type: integer
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Kategoriya yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Kategoriya topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/humancategory/:id", HumanCategoryController.updateHumanCategory);

/**
 * @swagger
 * /api/humancategory/{id}:
 *   delete:
 *     tags: [HumanCategory]
 *     summary: Odam kategoriyasini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kategoriya ID raqami
 *     responses:
 *       200:
 *         description: Kategoriya o'chirildi
 *       404:
 *         description: Kategoriya topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/humancategory/:id", HumanCategoryController.deleteHumanCategory);

module.exports = router;
