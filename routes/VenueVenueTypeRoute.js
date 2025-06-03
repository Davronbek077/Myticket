const express = require("express");
const router = express.Router();
const VenueVenueTypeController = require("../controller/VenueVenueTypeController");

/**
 * @swagger
 * tags:
 *   name: VenueVenueType
 *   description: Venue va VenueTypelarni boshqarish
 */

/**
 * @swagger
 * /api/venuevenuetype:
 *   post:
 *     tags: [VenueVenueType]
 *     summary: Yangi Venue VenueType bog'lanmasini yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               venueTypeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Bog'lanma yaratildi
 *       400:
 *         description: Noto'g'ri ma'lumot kiritildi
 *       500:
 *         description: Server xatosi
 */
router.post("/venuevenuetype", VenueVenueTypeController.createVenueVenueType);

/**
 * @swagger
 * /api/venuevenuetype:
 *   get:
 *     tags: [VenueVenueType]
 *     summary: Barcha Venue VenueType bog'lanmalarini olish
 *     responses:
 *       200:
 *         description: Bog'lanmalar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/venuevenuetype", VenueVenueTypeController.getVenueVenueType);

/**
 * @swagger
 * /api/venuevenuetype/{id}:
 *   get:
 *     tags: [VenueVenueType]
 *     summary: ID bo'yicha bog'lanmani olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bog'lanma ID raqami
 *     responses:
 *       200:
 *         description: Topilgan bog'lanma
 *       404:
 *         description: Bog'lanma topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/venuevenuetype/:id", VenueVenueTypeController.getVenueVenueTypeById);

/**
 * @swagger
 * /api/venuevenuetype/{id}:
 *   put:
 *     tags: [VenueVenueType]
 *     summary: Bog'lanmani ID bo'yicha yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bog'lanma ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               venueTypeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Bog'lanma yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Bog'lanma topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/venuevenuetype/:id", VenueVenueTypeController.updateVenueVenueType);

/**
 * @swagger
 * /api/venuevenuetype/{id}:
 *   delete:
 *     tags: [VenueVenueType]
 *     summary: ID bo'yicha bog'lanmani o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bog'lanma ID raqami
 *     responses:
 *       200:
 *         description: Bog'lanma o'chirildi
 *       404:
 *         description: Bog'lanma topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/venuevenuetype/:id", VenueVenueTypeController.deleteVenueVenueType);

module.exports = router;
