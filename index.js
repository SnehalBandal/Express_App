const express = require('express');
const app = express();

app.use(express.json());      // Automatically parses JSON requests

// First middleware (Logs the reques)
app.use((req, res, next) =>{
    console.log("I am use method");
    next();
});

// POST route for '/login'
app.post('/login', (req, res, next) => {
    console.log("Login api is called..");
    res.status(200).json({
        msg: "Hello I am Login again.."
    });
});
// // GET route for login
// app.get('/login', (req, res, next) => {
//     console.log("Login api is called..");
//     res.status(200).json({
//         msg: "Hello I am Login again.."
//     });
// });

// Second middleware (Logs agian and sends requests)
app.use((req, res, next)=>{
    res.status(200).json({
        msg: "Hello I am use method 2.0"
    });
    next();
    console.log("Use method again");
})

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})