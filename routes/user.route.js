const express=require("express");
const router=express.Router();
const userController=require("../controllers/user.controller")

router.route("/create").post(userController.createUser)
router.route("/list").get(userController.listUser)
router.route("/list/:id").get(userController.listSingleUser)
router.route("/delete").delete(userController.deleteUser)
router.route("/update").put(userController.updateUser)





module.exports = router;