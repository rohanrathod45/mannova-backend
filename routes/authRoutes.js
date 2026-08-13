const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  getProfile,
  updateProfileImage
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// ========================================
// SIGNUP
// POST /api/auth/signup
// ========================================

router.post(
  "/signup",
  signup
);


// ========================================
// LOGIN
// POST /api/auth/login
// ========================================

router.post(
  "/login",
  login
);


// ========================================
// GET PROFILE
// GET /api/auth/profile
// ========================================

router.get(
  "/profile",
  authMiddleware,
  getProfile
);


// ========================================
// UPDATE PROFILE IMAGE
// PUT /api/auth/profile-image
// ========================================

router.put(
  "/profile-image",
  authMiddleware,
  updateProfileImage
);


module.exports = router;