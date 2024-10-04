const express = require("express");
const router = express.Router();

const {
    getOrderLines,
    getOrderLine,
    postOrderLine,
    updateOrderLine,
    deleteOrderLine,
    patchOrderLine
} = require("../controllers/order_lines.controller");

/**
 * @swagger
 * tags:
 *   name: OrderLines
 *   description: API for managing order lines
 */

/**
 * @swagger
 * /api/order_line:
 *   get:
 *     summary: Retrieve a list of order lines
 *     tags: [OrderLines]
 *     responses:
 *       200:
 *         description: A list of order lines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderLine'
 */
router.get("/", getOrderLines);

/**
 * @swagger
 * /api/order_line/{id}:
 *   get:
 *     summary: Retrieve a single order line by ID
 *     tags: [OrderLines]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the order line
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single order line
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderLine'
 *       404:
 *         description: Order line not found
 */
router.get("/:id", getOrderLine);

/**
 * @swagger
 * /api/order_line:
 *   post:
 *     summary: Create a new order line
 *     tags: [OrderLines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderLine'
 *     responses:
 *       201:
 *         description: Order line created successfully
 */
router.post("/", postOrderLine);

/**
 * @swagger
 * /api/order_line/{id}:
 *   put:
 *     summary: Update an order line by ID
 *     tags: [OrderLines]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the order line
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderLine'
 *     responses:
 *       200:
 *         description: Order line updated successfully
 *       404:
 *         description: Order line not found
 */
router.put("/:id", updateOrderLine);

/**
 * @swagger
 * /api/order_line/{id}:
 *   patch:
 *     summary: Partially update an order line by ID
 *     tags: [OrderLines]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the order line
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderLine'
 *     responses:
 *       200:
 *         description: Order line updated successfully
 *       404:
 *         description: Order line not found
 */
router.patch("/:id", patchOrderLine);

/**
 * @swagger
 * /api/order_line/{id}:
 *   delete:
 *     summary: Delete an order line by ID
 *     tags: [OrderLines]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the order line
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Order line deleted successfully
 *       404:
 *         description: Order line not found
 */
router.delete("/:id", deleteOrderLine);

module.exports = router;
