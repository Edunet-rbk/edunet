const db = require('../database/db');

exports.showCourses = async (req, res, next) =>{
    try{
    
        const courses = await db.Course.findAll({})
        console.log(req.decoded)
        res.status(200).json(courses)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}

exports.createCourses = async (req, res, next) => {
    try{
        const {
            title,
            description,
            category,
            photo
        }= req.body

        const course = await db.Course.create({
            title,
            description,
            category,
            photo
        })
        res.status(201).json(course)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}

exports.getCourse = async (req, res, next) => {
    try{
        const {id} = req.params
        const course = await db.Course.findOne({where: {id : id}})

        if (!course){
            res.status(404).json(" No course with this id")
        }
        res.status(200).json(course)
    }
    catch(err){
        res.status(400)
        next(err)
    }
}

exports.deleteCourses= async (req, res, next) => {
    try{
        const {id} = req.params;
        const course = await db.Course.findOne({where: {id : id}})
        if (!course){
            res.status(404).json(" No course with this id")
        }
        else{
            await course.destroy()
            res.status(202).json(course)
        }
    }
    catch(err){
        res.status(400);
        next(err)
    }
};

exports.showCourseVideos = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const videos = await db.Video.findAll({where:{courseId: id}});
        res.status(200).json(videos)
    }
    catch(err){
        res.status(400);
        next(err)
    }
};

exports.enroll = async(req, res, next) =>{
    try{
        const {id} = req.params;
        const userId = 1;
        const subscribe = await db.Course_Student.create({
            studentId: userId,
            courseId : id
        });
        console.log('SubBBBBBBBB',subscribe)
        res.status(201).json(subscribe);
    }
    catch(err) {
        res.status(400);
        next(err)
    }
};
exports.showCoursesByCategory = async (req, res, next) =>{
    try{
        const {name} = req.params;
        const category = await db.Category.findOne({where : {name : name}});
        const courses = await db.Course.findAll({where : {categoryId : category.id}});
        res.status(200).json(courses)
    }
    catch(err){
        res.status(400);
        next(err)
    }
}