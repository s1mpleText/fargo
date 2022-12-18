// const db = require("../models");
// const users = db.users;
//
// exports.findAll = (req,res) => {
//     users.findAll().then( data => {
//             res.send(data);
//         }
//     )
// }
// exports.createUser = (req, res) => {
//     users.create({
//         username: req.body.username,
//         userid: req.body.userid,
//     })
//         .then(cr => {
//             res.send(cr);
//         }).catch(error => {
//         res.status(500).send({message: error.message})
//     })
// }