const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */

/**
 * @swagger
 * /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/admin", adminController.createAdmin);

/**
 * @swagger
 * /api/admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all admin
 *     responses:
 *       200:
 *         description: List of Admin
 *       500:
 *         description: Server error
 */
router.get("/admin", adminController.getAdmin);

/**
 * @swagger
 * /api/admin/search:
 *   get:
 *     tags: [Admin]
 *     summary: Search Admin by name or description
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for admin name
 *     responses:
 *       200:
 *         description: List of admin matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/admin/search", adminController.searchAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.get("/admin/:id", adminController.getAdminById);

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.put("/admin/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.delete("/admin/:id", adminController.deleteAdmin);

module.exports = router;
