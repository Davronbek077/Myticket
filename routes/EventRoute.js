const express = require("express");
const router = express.Router();
const EventController = require("../controller/EventController");

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Tadbirlarni boshqarish
 */

/**
 * @swagger
 * /api/event:
 *   post:
 *     tags: [Event]
 *     summary: Yangi tadbir qo'shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: string
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tadbir yaratildi
 *       400:
 *         description: Noto‘g‘ri ma’lumot
 *       500:
 *         description: Server xatosi
 */
router.post("/event", EventController.createEvent);

/**
 * @swagger
 * /api/event:
 *   get:
 *     tags: [Event]
 *     summary: Barcha tadbirlarni olish
 *     responses:
 *       200:
 *         description: Tadbirlar ro'yxati
 *       500:
 *         description: Server xatosi
 */
router.get("/event", EventController.getEvent);

/**
 * @swagger
 * /api/event/search:
 *   get:
 *     tags: [Event]
 *     summary: Tadbir nomi orqali qidirish
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Qidiruv uchun tadbir nomi
 *     responses:
 *       200:
 *         description: Mos tadbirlar ro'yxati
 *       400:
 *         description: Qidiruv so'rovi kerak
 *       500:
 *         description: Server xatosi
 */
router.get("/event/search", EventController.searchEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     tags: [Event]
 *     summary: ID orqali tadbirni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Tadbir ID raqami
 *     responses:
 *       200:
 *         description: Tadbir topildi
 *       404:
 *         description: Tadbir topilmadi
 *       500:
 *         description: Server xatosi
 */
router.get("/event/:id", EventController.getEventById);

/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Tadbirni yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Tadbir ID raqami
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: string
 *               start_time:
 *                 type: string
 *               finish_date:
 *                 type: string
 *               finish_time:
 *                 type: string
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: string
 *               release_date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tadbir yangilandi
 *       400:
 *         description: Noto'g'ri ma'lumot
 *       404:
 *         description: Tadbir topilmadi
 *       500:
 *         description: Server xatosi
 */
router.put("/event/:id", EventController.updateEvent);

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Tadbirni o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Tadbir ID raqami
 *     responses:
 *       200:
 *         description: Tadbir o'chirildi
 *       404:
 *         description: Tadbir topilmadi
 *       500:
 *         description: Server xatosi
 */
router.delete("/event/:id", EventController.deleteEvent);

module.exports = router;
