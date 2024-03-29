const ex = require("express");
const DBMember = require("./DB/memberDAO");//해당 파일경로에서 내보낸 파일을 가져온다

const app = ex();

app.set("views","./views");
app.set("view engine", "ejs");

const router = ex.Router();
app.use("/", router)

router.get("/",(req,res)=>{
    console.log(DBMember)
    res.render("index");
})

const router2 = ex.Router();
app.use("/member", router2)

router2.get("/list",(req,res)=>{
    console.log("router_M 연결")
    res.send("member 목록을 보여줍니다");
})


/*이부분 윗쪽 라우터로 대체
app.get("/", (req, res)=>{
    res.render("index");
})
*/
app.listen(3000, ()=>console.log("3000서버 실행"));