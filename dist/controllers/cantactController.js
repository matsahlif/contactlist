import { getTreeRepository } from 'typeorm';
import { user } from '../models/user';
// import { contactRepository } from '../repositories/contactsRepository';
export class cantactController {
    getAllUser = {
        async getAllContacts(req, res) {
            try {
                const contactRepository = getTreeRepository(user);
                const AllContacts = await contactRepository.find();
                res.send(user);
                console.log("listo nagerefti");
            }
            catch (error) {
                res.send({ error: 'natunesti hame usera ro begiri' });
                console.log("natunesti hame usera ro begiri");
            }
        },
        async CreateContact(req, res) {
            try {
                const contactRepository = getTreeRepository(user);
                const newContact = contactRepository.create(req.body);
                await contactRepository.save(newContact);
                res.send(newContact);
                console.log("user sakhte shod");
                ;
            }
            catch (error) {
                res.send({ error: 'natunesti contact besazi' });
                console.log("sakhte nashod contact");
            }
        },
        async deleteContact(req, res) {
            try {
                const contactRepository = getTreeRepository(user);
                const contact = await contactRepository.findOne(req.params);
                if (!contact) {
                    res.send({ error: 'Contact peyda nashod' });
                    console.log("Contact peyda nashod");
                }
                else {
                    contactRepository.remove(contact);
                    res.send("mokhatab hazf shod");
                }
            }
            catch (error) {
                res.send("mokhatab pak nashod");
                console.log("mokhatab pak nashod");
            }
        },
        async findContact(req, res) {
            const contactRepository = getTreeRepository(user);
            const contact = await contactRepository.findOne(req.params);
            if (!contact) {
                res.send({ error: 'Contact peyda nashod' });
                console.log("Contact peyda nashod");
            }
            else {
                res.send(contact);
            }
        },
        async updateCantact(req, res) {
            // const contactProp =  this.findContact
            const contactRepository = getTreeRepository(user);
            const contact1 = await contactRepository.findOne(req.params);
            if (!contact1) {
                res.send({ error: 'Contact peyda nashod' });
                console.log("Contact peyda nashod");
            }
            let { name1, number1, company1 } = req.body;
            name1 = contact1?.name,
                number1 = contact1?.company,
                company1 = contact1?.number;
        }
    };
}
