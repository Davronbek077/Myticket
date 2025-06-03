const express = require("express");
const router = express.Router();
const RegionController = require("../controller/RegionController");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Mintaqani boshqarish
 */

/**
 * @swagger
 * /api/region:
 *   post:
 *     tags: [Region]
 *     summary: Yangi mintaqa yaratish
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
 *         description: Mintaqa yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/region", RegionController.createRegion);

/**
 * @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Barcha mintaqalarni olish
 *     responses:
 *       200:
 *         description: Mintaqalarning ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/region", RegionController.getRegion);

/**
 * @swagger
 * /api/region/search:
 *   get:
 *     tags: [Region]
 *     summary: Mintaqa nomi orqali mintaqalarni qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun mintaqa nomi
 *     responses:
 *       200:
 *         description: Mos keluvchi mintaqalar ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/region/search", RegionController.searchRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     tags: [Region]
 *     summary: ID orqali mintaqani olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mintaqa ID raqami
 *     responses:
 *       200:
 *         description: Mintaqa topildi
 *       404:
 *         description: Mintaqa topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/region/:id", RegionController.getRegionById);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Mintaqani yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mintaqa ID raqami
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
 *         description: Mintaqa yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Mintaqa topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/region/:id", RegionController.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Mintaqani o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mintaqa ID raqami
 *     responses:
 *       200:
 *         description: Mintaqa o'chirildi
 *       404:
 *         description: Mintaqa topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/region/:id", RegionController.deleteRegion);

module.exports = router;
