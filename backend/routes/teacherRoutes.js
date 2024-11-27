const express = require("express");
const {
    createTeacher,
    updateTeacher,
    getAllTeachers,
} = require("../controllers/teacherController");

const router = express.Router();

router.post("/teachers", createTeacher);
router.put("/teachers/:id", updateTeacher);
router.get("/teachers", getAllTeachers);

module.exports = router;
