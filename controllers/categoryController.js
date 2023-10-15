const Fork = require('../models/forkModel');
const Network = require('../models/networkModel');
exports.getCategory = function (req, res) {
    let data = req.body
    
    Fork.find({email:data.email, password:data.password, role:data.role}).exec(function (err, fork) {
        if (err)  return next(err);
        Network.find({email:data.email, password:data.password, role:data.role}).exec(function (err1, network) {
            if (err1)  return next(err1);
            res.send({fork,network})
        })
    })
};

exports.addFork = function (req, res) {
    // console.log(req.body.data)
    let fork = new Fork({fork:req.body.data})
    fork.state = false
    fork.created_at = new Date()/1000
    // console.log(data)
    fork.save(function(err, result){
        if(err) return next (err)
        res.send({result})
    })
};

exports.updateFork = function (req, res){
    Fork.updateOne({_id:req.body._id},req.body).exec((err, result)=>{
        if(err) return next(err)
        res.send(req.body)
    })
 }

exports.deleteFork = function (req, res){
    Fork.deleteOne({_id:req.body.id}).exec((err, result)=>{
        if(err) return next(err)
        res.send(req.body.id)
    })
 }


exports.addNetwork = function (req, res) {
    // console.log(req.body.data)
    let network = new Network({network:req.body.data})
    network.created_at = new Date()/1000
    // console.log(data)
    network.save(function(err, result){
        if(err) return next (err)
        res.send({result})
    })
};

exports.updateNetwork = function (req, res){
    Network.updateOne({_id:req.body._id},req.body).exec((err, result)=>{
        if(err) return next(err)
        res.send(req.body)
    })
 }

exports.deleteNetwork = function (req, res){
    Network.deleteOne({_id:req.body.id}).exec((err, result)=>{
        if(err) return next(err)
        res.send(req.body.id)
    })
 }
 
// exports.signupUser = function (req, res) {
//     let data = req.body
    
//     User.find({email:data.email, role:data.role}).exec(function (err, userlist) {
//         if (err)  return next(err);
//         if(userlist.length==0){
//             let user = new User(req.body)
//             user.created_at = new Date().getTime()/1000
//             
//         }else if(userlist.length>0){
//             res.send('Aleady existing user!')
//         }
//     })
    
// };

// exports.getUser = function (req, res){
//     User.find().exec(function (err, user) {
//         if (err)  return next(err);
//         res.send(user)
//     })
// }

// exports.deadUser = function (req, res){
//     User.findById(req.body.id).exec((err, result)=>{
//         if (err)  return next(err);
//         if(result.dead)result.dead=false
//         else result.dead=true
//         User.updateOne({_id:req.body.id},result).exec((err1,result1)=>{
//             if (err1)  return next(err1);
//             res.send(result)
//         })
//     })
// }



