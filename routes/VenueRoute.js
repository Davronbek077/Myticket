const express = require("express");
const router = express.Router();
const VenueController = require("../controller/VenueController");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Joylarni boshqarish
 */

/**
 * @swagger
 * /api/venue:
 *   post:
 *     tags: [Venue]
 *     summary: Yangi joy yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: object
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Joy yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       500:
 *         description: Server xatosi
 */
router.post("/venue", VenueController.createVenue);

/**
 * @swagger
 * /api/venue:
 *   get:
 *     tags: [Venue]
 *     summary: Barcha joylarni olish
 *     responses:
 *       200:
 *         description: Joylar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/venue", VenueController.getVenue);

/**
 * @swagger
 * /api/venue/search:
 *   get:
 *     tags: [Venue]
 *     summary: Nom orqali joylarni qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun nom
 *     responses:
 *       200:
 *         description: Mos joylar ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/venue/search", VenueController.searchVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: ID orqali joyni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Joy ID raqami
 *     responses:
 *       200:
 *         description: Joy topildi
 *       404:
 *         description: Joy topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/venue/:id", VenueController.getVenueById);

/**
 * @swagger
 * /api/venue/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Joyni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Joy ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: object
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Joy yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Joy topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/venue/:id", VenueController.updateVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Joyni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Joy ID raqami
 *     responses:
 *       200:
 *         description: Joy o'chirildi
 *       404:
 *         description: Joy topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/venue/:id", VenueController.deleteVenue);

module.exports = router;
