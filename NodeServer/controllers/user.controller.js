const people = require('../assets/people.json');
class UserController {
    get(req,res){
        const filter = req.query.filter;
        console.log(filter);
        const filterPeople = people.filter((phuoclong) => phuoclong.first_name.includes('Alex'));
        return res.status(200).json(filterPeople);
    }
    post(req,res){
        const filter = req.body.filter;
        console.log(filter);
        const filterPeople = people.filter((person) => 
            person.first_name.includes(filter))
        console.log(filterPeople)
        return res.status(200).json(`Xin chao `);
    }
}
module.exports = new UserController();