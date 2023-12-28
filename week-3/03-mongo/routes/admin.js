const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const {Admin} = require('../db/index');
const {Course} = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    });
    res.json({msg: "Admin created succesfully"});
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const get = await Course.create({
        title, 
        description, 
        price, 
        imageLink
    });
    res.status(200).json({
        msg: "Course created successfully",
        courseId: get._id
    });     
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const getCourses = await Course.find({});
    res.status(200).json(getCourses);
});

module.exports = router;