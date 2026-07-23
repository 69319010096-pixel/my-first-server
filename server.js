// 1. เรียกใช้งาน Module 'http'
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>My Web Server</title>

<style>
    body{
        margin:0;
        font-family: "Kanit", sans-serif;
        background: linear-gradient(135deg,#FFE5EC,#FFF8DC,#E0F7FA);
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
    }

    .card{
        background:white;
        width:500px;
        padding:30px;
        border-radius:25px;
        text-align:center;
        box-shadow:0 10px 25px rgba(0,0,0,.2);
    }

    .cat{
        font-size:90px;
        animation: jump 1s infinite alternate;
    }

    @keyframes jump{
        from{transform:translateY(0);}
        to{transform:translateY(-15px);}
    }

    h1{
        color:#ff69b4;
    }

    p{
        color:#555;
        font-size:18px;
    }

    .footer{
        margin-top:20px;
        color:#888;
        font-size:15px;
    }

    button{
        margin-top:20px;
        background:#ffb6c1;
        color:white;
        border:none;
        padding:12px 25px;
        border-radius:20px;
        font-size:16px;
        cursor:pointer;
    }

    button:hover{
        background:#ff69b4;
    }
</style>
</head>

<body>

<div class="card">

    <div class="cat">🐱</div>

    <h1>สวัสดีครับ!</h1>

    <h2>Web Server ของ</h2>

    <h2 style="color:#ff69b4;">
        นางสาวขวัญศิริ ใจหมั่น
    </h2>

    <p>
        รหัสนักศึกษา : <b>69319010096</b>
    </p>

    <p>
        🎉 เครื่องแม่ข่ายทำงานปกติบนระบบ Railway แล้วครับ 🎉
    </p>

    <button onclick="alert('เหมียว~ 😺 ยินดีต้อนรับเข้าสู่ Web Server')">
        🐾 กดทักทายแมว
    </button>

    <div class="footer">
        ❤️ Made with Node.js & Railway ❤️
    </div>

</div>

</body>
</html>
`);
});

// 4. เปิด Server
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
