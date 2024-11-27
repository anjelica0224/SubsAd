const Teacher = require("../models/teacher");

const createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).json({ message: "Teacher created successfully!", teacher });
    } catch (error) {
        console.error("Error creating teacher:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateTeacher = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTeacher) return res.status(404).json({ message: "Teacher not found" });
        res.status(200).json({ message: "Teacher updated successfully!", updatedTeacher });
    } catch (error) {
        console.error("Error updating teacher:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        console.error("Error fetching teachers:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { createTeacher, updateTeacher, getAllTeachers };
