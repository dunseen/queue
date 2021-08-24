import Queue from '../lib/Queue';

export default  {
    async store(req,res){
        const { name,email,pass } = req.body;

        const user = {
            name,
            email,
            pass
        }

        await Queue.add('RegistrationMail',{user});

        return res.json(user)
    }
}