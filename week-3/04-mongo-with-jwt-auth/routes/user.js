const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User} = require('../db/index');
const {Course} = require('../db/index');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const find = await User.findOne({username});
    if(!find) {
        const done = await User.create({
            username,
            password
        });
        res.status(200).json({
            msg: `User successfully created with user name ${username}`
        });
    } else {
        res.status(400).json({
            msg: "Username already found"
        });
    }
    
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const find = await User.findOne({
        username,
        password
    });
    if(find) {
        const token = jwt.sign({username}, JWT_SECRET);
        res.status(200).json({
            token
        });
    } else {
        res.status(403).json({
            msg: "Sorry user not found"
        });
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    const getCourses = await Course.find({});
    res.status(202).json({
        getCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {

    try {
        const id = req.params.courseId;
        const findCourse = await Course.findOne({_id:id});
        const username = req.username;
        const check = await User.findOne({
            username,
            purchasedCourses: {$in:[id]} 
        });
        if (check) {
            return res.status(405).json({
                msg: "Already Purchased"
            })
        }
        const user = await User.findOneAndUpdate({
            username
        }, {
            "$push": {purchasedCourses:id}
        })
        res.status(200).json({
            msg: "Course purchased"
        });
    } catch (error) {
        res.status(404).json({
            msg: "No such course found."
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const username = req.username;
        const findUser = await User.findOne({
            username
        });
        const getCoursesArr = findUser.purchasedCourses;
        const courses = await Course.find({
            _id: {$in : getCoursesArr}
        }).select('title price');
        res.status(200).json({
            username,
            courses
        });
    } catch (error) {
        res.status(404).json({
            msg: "User does not exist"
        })
    }


});

module.exports = router