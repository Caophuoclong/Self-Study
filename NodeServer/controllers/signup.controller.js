
class SignUp{
    get(res,req){

    }
    post(req,res) {
        const username = req.body.username;
        return res.status(200).json(username);
        
    }
}
module.exports = new SignUp();