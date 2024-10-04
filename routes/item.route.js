const express = require("express");
const router = express.Router();

const {
    getItems,
    getItem,
    postItem,
    updateItem,
    deleteItem,
    patchItem
} = require("../controllers/item.controller");

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: API for managing items
 */

/**
 * @swagger
 * /api/item:
 *   get:
 *     summary: Retrieve a list of items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", getItems);

/**
 * @swagger
 * /api/item/{id}:
 *   get:
 *     summary: Retrieve a single item by ID
 *     tags: [Items]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the item
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 */
router.get("/:id", getItem);

/**
 * @swagger
 * /api/item:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Item created successfully
 */
router.post("/", postItem);

/**
 * @swagger
 * /api/item/{id}:
 *   put:
 *     summary: Update an item by ID
 *     tags: [Items]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the item
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */
router.put("/:id", updateItem);

/**
 * @swagger
 * /api/item/{id}:
 *   patch:
 *     summary: Partially update an item by ID
 *     tags: [Items]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the item
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */
router.patch("/:id", patchItem);

/**
 * @swagger
 * /api/item/{id}:
 *   delete:
 *     summary: Delete an item by ID
 *     tags: [Items]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the item
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 */
router.delete("/:id", deleteItem);

module.exports = router;
