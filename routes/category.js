const express=require('express')
const router=express.Router();


router.route('/').post(createCategory).get(getAllCategories)
router.route("/:id").patch(updateCategory).delete(deleteCategory)