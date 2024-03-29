const ex = require("express")
const ctrl = require("../controller/test_controller");
const router = ex.Router();

/*
router.get("/",(req,res)=>{
    res.send("router 분할")
})
*/

router.get("/", ctrl.index)
router.get("/test1", ctrl.test1)
router.get("/test2", ctrl.t2)

router.get("/info", ctrl.info)

module.exports = router;