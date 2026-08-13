const express = require("express");

const router = express.Router();

const {
    createTherapist,
    getAllTherapists,
    getTherapistById,
    updateTherapist,
    deleteTherapist,
} = require("../controllers/therapistController");

router.post("/", createTherapist);
router.get("/", getAllTherapists);
router.get("/:id", getTherapistById);
router.put("/:id", updateTherapist);
router.delete("/:id", deleteTherapist);

module.exports = router;