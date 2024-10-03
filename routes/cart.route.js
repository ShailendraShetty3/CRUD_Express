const express = require("express");
const router = express.Router();

const {
    getCarts,
    getCart,
    postCart,
    updateCart,
    deleteCart,
    patchCart
} = require("../controllers/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: API for managing carts
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Retrieve a list of carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: A list of carts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */
router.get("/", getCarts);

/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     summary: Retrieve a single cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cart
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single cart
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       404:
 *         description: Cart not found
 */
router.get("/:id", getCart);

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       201:
 *         description: Cart created successfully
 */
router.post("/", postCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cart
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *       404:
 *         description: Cart not found
 */
router.put("/:id", updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   patch:
 *     summary: Partially update a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cart
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *       404:
 *         description: Cart not found
 */
router.patch("/:id", patchCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Delete a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the cart
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cart deleted successfully
 *       404:
 *         description: Cart not found
 */
router.delete("/:id", deleteCart);

module.exports = router;
