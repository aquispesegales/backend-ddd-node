class UserController{
    sayHello(req,res){
        return res.send({message:"hello world"});
    }
}
module.exports = UserController;