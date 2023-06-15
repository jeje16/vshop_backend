const { register,login } = require("../Controllers/AuthController");

const {userVerification}=require("../Middlewares/AuthMiddleware")
const router = require("express").Router();

router.post('/',userVerification);
router.post("/register", register);
router.post("/login",login);

module.exports = router;