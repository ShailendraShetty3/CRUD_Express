const express = require("express");
const router = express.Router();

const {
  getSocials,
  getSocial,
  postSocial,
  updateSocial,
  deleteSocial,
  patchSocial
} = require("../controllers/social_profile.controller.js");

/**
 * @swagger
 * tags:
 *   name: Socials
 *   description: API for managing social profiles
 */

/**
 * @swagger
 * /api/socials:
 *   get:
 *     summary: Retrieve a list of social profiles
 *     tags: [Socials]
 *     responses:
 *       200:
 *         description: A list of social profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Social'
 */
router.get("/", getSocials);

/**
 * @swagger
 * /api/socials/{id}:
 *   get:
 *     summary: Retrieve a single social profile by ID
 *     tags: [Socials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the social profile
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single social profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Social'
 *       404:
 *         description: Social profile not found
 */
router.get("/:id", getSocial);

/**
 * @swagger
 * /api/socials:
 *   post:
 *     summary: Create a new social profile
 *     tags: [Socials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Social'
 *     responses:
 *       201:
 *         description: Social profile created successfully
 */
router.post("/", postSocial);

/**
 * @swagger
 * /api/socials/{id}:
 *   put:
 *     summary: Update a social profile by ID
 *     tags: [Socials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the social profile
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Social'
 *     responses:
 *       200:
 *         description: Social profile updated successfully
 *       404:
 *         description: Social profile not found
 */
router.put("/:id", updateSocial);

/**
 * @swagger
 * /api/socials/{id}:
 *   patch:
 *     summary: Partially update a social profile by ID
 *     tags: [Socials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the social profile
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Social'
 *     responses:
 *       200:
 *         description: Social profile updated successfully
 *       404:
 *         description: Social profile not found
 */
router.patch("/:id", patchSocial);

/**
 * @swagger
 * /api/socials/{id}:
 *   delete:
 *     summary: Delete a social profile by ID
 *     tags: [Socials]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the social profile
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Social profile deleted successfully
 *       404:
 *         description: Social profile not found
 */
router.delete("/:id", deleteSocial);

module.exports = router;
