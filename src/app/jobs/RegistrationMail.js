import Mail from "../lib/Mail";

export default  {
    key: 'RegistrationMail',
    async handle({ data }){
        const { user } = data;

        await Mail.sendMail({
            from: 'Queue test <queue@teste.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Queue',
            html: 'This is the queue from Davys node.'
        }); 
    }
}