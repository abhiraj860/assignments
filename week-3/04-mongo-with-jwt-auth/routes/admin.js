const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require('../db/index');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password
    });
    res.json({
        msg: "Admin created succesfully"
    });
    
});


router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    });
    
    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(401).json({
            message: "Incorrect email and password"
        });
    }

    
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