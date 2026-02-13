const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8000;

let users =[];
let counter = 1;
/**
 * get/users = ดึงข้อมูลผู้ใช้ทั้งหมด
 * post/user = เพิ่่มผู้ใช้ใหม่่
 * get/users/:id = ดึงข้อมูลผู้ใช้ตาม id
 * put/users/:id = เเก้ไขข้อมูลผู็ใช้ตาม id ที่บันทึก
 * delete/users/:id = ลบผู็ใช้ตาม id mี่บันทึก
*/

// path: = GET /users
app.get('/users', (req, res) => {
    res.json(users);
})

// path: = POST /users
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
    message: 'User added successfully',
    user : user
    });
});

// path: = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id =req.params.id;
    let updateUser = req.body;

    // หา user ที่จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id );
    
    //อัพเดทข้อมูล users
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
    
    if (updateUser.firstname ) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname =updateUser.lastname;
    }

    res.json({
        message: 'User updated successfully',
        date: {
            user: updateUser,
            indexUpdated: selectedIndex
        }
    });

    // ส่ง users ที่อัพเดตแล้วกลับไป
})
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    // หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id );
    users.splice(selectedIndex,1);
    

    // ลบ user ออกจาก users
    delete users[selectedIndex];
    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
/*//console.log("Backend sever is running");
//ทำการ import โมดูลhttp
// ทำการ import http module เพื่อสร้าง server
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่าเริ่มต้นของ server เมื่อเปิดใช้งาน เว็บผ่านเบราว์เซอร์ ที่ localhost:8000

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end('My First Server!');
}

//run server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});*/
