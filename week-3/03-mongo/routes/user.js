const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const userMiddleware = require("../middleware/user");
const {User} = require('../db/index');
const {Course} = require('../db/index');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password
    });
    res.status(200).json({
        message: 'User Created Successfully'
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const findList = await Course.find({});
    res.status(200).json({findList});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try{
        await User.updateOne({
            username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        })
        res.status(200).send('Course purchased successfully');
    } catch(err) {
        res.status(400).send("Course not found");
    } 
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });
    res.json({
        courses
    });
});

module.exports = router