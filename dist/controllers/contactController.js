import { db } from "../dataSource/db.js";
import { user } from '../models/user.js';
export class contactController {
    async getAllContacts() {
        // async  getAllContacts(req:Request, res:Response)  error dad
        try { // public budano bekhun
            const contactRepository = db.getRepository(user);
            const AllContacts = await contactRepository.find();
            // res.send(user)   error dad tu router camnet kardam
            return AllContacts;
            console.log("listo nagerefti");
        }
        catch (error) {
            // res.send({ error: 'natunesti hame usera ro begiri' })
            // eyne error balaii
            console.log("natunesti hame usera ro begiri");
            return { error: "natunesti hame usera ro begiri" };
        }
    } //???? okeye?
    async CreateContact(req, res) {
        try {
            const contactRepository = db.getRepository(user);
            const newContact = contactRepository.create(req.body);
            await contactRepository.save(newContact);
            res.send(newContact);
            console.log("user sakhte shod");
            ;
        }
        catch (error) {
            console.log("sakhte nashod contact", error);
        }
    }
    async deleteContact(req, res) {
        try {
            const contactRepository = db.getRepository(user);
            const contact = await contactRepository.findOne(req.params);
            if (!contact) {
                res.send({ error: 'Contact peyda nashod' });
                console.log("Contact peyda nashod");
            }
            else {
                await contactRepository.remove(contact);
                res.send("mokhatab hazf shod");
            }
        }
        catch (error) {
            res.send("mokhatab pak nashod");
            console.log("mokhatab pak nashod");
        }
    }
    async findContact(req, res) {
        const contactRepository = db.getRepository(user);
        const contact = await contactRepository.findOne(req.params);
        if (!contact) {
            res.send({ error: 'Contact peyda nashod' });
            console.log("Contact peyda nashod");
        }
        else {
            res.send(contact);
        }
    }
    async updateCantact(req, res) {
        // const contactProp =  this.findContact
        const contactRepository = db.getRepository(user);
        const contact1 = await contactRepository.findOne(req.params);
        if (!contact1) {
            res.send({ error: 'Contact peyda nashod' });
            console.log("Contact peyda nashod");
        }
        let { name1, number1, company1 } = req.body;
        name1 = contact1?.name, // doroste?
            number1 = contact1?.company,
            company1 = contact1?.number;
    }
}
