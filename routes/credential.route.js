const express = require("express");
const router = express.Router();

const {
    getCredentials,
    getCredential,
    postCredential,
    updateCredential,
    deleteCredential,
    patchCredential
} = require("../controllers/credential.controller");

/**
 * @swagger
 * tags:
 *   name: Credentials
 *   description: API for managing credentials
 */

/**
 * @swagger
 * /api/credential:
 *   get:
 *     summary: Retrieve a list of credentials
 *     tags: [Credentials]
 *     responses:
 *       200:
 *         description: A list of credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Credential'
 */
router.get("/", getCredentials);

/**
 * @swagger
 * /api/credential/{id}:
 *   get:
 *     summary: Retrieve a single credential by ID
 *     tags: [Credentials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the credential
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single credential
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Credential'
 *       404:
 *         description: Credential not found
 */
router.get("/:id", getCredential);

/**
 * @swagger
 * /api/credential:
 *   post:
 *     summary: Create a new credential
 *     tags: [Credentials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Credential'
 *     responses:
 *       201:
 *         description: Credential created successfully
 */
router.post("/", postCredential);

/**
 * @swagger
 * /api/credential/{id}:
 *   put:
 *     summary: Update a credential by ID
 *     tags: [Credentials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the credential
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Credential'
 *     responses:
 *       200:
 *         description: Credential updated successfully
 *       404:
 *         description: Credential not found
 */
router.put("/:id", updateCredential);

/**
 * @swagger
 * /api/credential/{id}:
 *   patch:
 *     summary: Partially update a credential by ID
 *     tags: [Credentials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the credential
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Credential'
 *     responses:
 *       200:
 *         description: Credential updated successfully
 *       404:
 *         description: Credential not found
 */
router.patch("/:id", patchCredential);

/**
 * @swagger
 * /api/credential/{id}:
 *   delete:
 *     summary: Delete a credential by ID
 *     tags: [Credentials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the credential
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Credential deleted successfully
 *       404:
 *         description: Credential not found
 */
router.delete("/:id", deleteCredential);

module.exports = router;
