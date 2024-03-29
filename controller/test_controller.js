const service = require("../service/test_service")

const index = (req, res)=>{
    const member = service.index();
    //console.log("controller")
    //console.log(member)
    res.render("index", {member});
}

const test1 = (req, res)=>{
    console.log("=== test1 ===")
    console.log("req.query : ", req.query)
    console.log("req.query.id : ", req.query.id)
    console.log("req.query[pwd]: ", req.query['pwd'])
   
    /* 이렇게 쓰면 test1 파일이 필요하지 않다
    let msg = `<script>
        alert('성공');
        lcation,href="/test2";
        </script>`
        res.send(msg);
        */
      // res.render("test1");
      if(rws.query).id === 'aaa'

      res.redirect("/") 
      //서버안에서 서버끼리 요청하는 리다이렉트
      //render와 send는 사용자에게 보내는 값
      //redirect는 서버안에서 자기자신에게 해당 경로를 호출
}

const test2 = (req, res)=>{
    res.render("test2");
}

const info = (req, res)=>{
    console.log(req.param("uid"))
    //.param > 파라미터를 가져오겠다는 메소드
    const mem = service.getMember(req.param("uid"))
    res.render("info", {mem});
}

module.exports = {index:index, test1, t2:test2, info};
//중괄호로 묶으면 여러개를 한번에 보낼수 있지만, 키와 밸류로 묶어야 한다.
//할당 변수와 보내는 변수의 이름이 같으면 ㅁ:ㅁ를 생략해서 ㅁ으로만 적을 수 있다