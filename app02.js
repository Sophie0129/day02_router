const ex = require("express");
const router = require("./routes/test_router")

const app = ex();

app.set("views","./views");
app.set("view engine", "ejs");

//const router = ex.Router();
//다른페이지에서 만든 라우터를 가져왔기 때문에 여기서 쓸 필요 없다
app.use("/", router)
// /로 시작하면 라우터로 연결하겠다는 의미


app.listen(3000, ()=>console.log("3000서버 실행"));