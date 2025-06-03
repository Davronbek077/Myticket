const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     tags: [User]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               customer_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               payment_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/user", userController.createUser);

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags: [User]
 *     summary: Get all user
 *     responses:
 *       200:
 *         description: List of user
 *       500:
 *         description: Server error
 */
router.get("/user", userController.getUser);

/**
 * @swagger
 * /api/user/search:
 *   get:
 *     tags: [User]
 *     summary: Search user by name or email
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for name and email
 *     responses:
 *       200:
 *         description: List of user matching the search query
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/user/search", userController.searchUser);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get("/user/:id", userController.getUserById);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     tags: [User]
 *     summary: Update user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put("/user/:id", userController.updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       204:
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
