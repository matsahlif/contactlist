import { Router } from 'express';
import { contactController } from "../controllers/contactController.js";
export const router = Router();
router.get('/allcontacts', async (req, res) => {
    try {
        const getAll = new contactController();
        const response = await getAll.getAllContacts();
        res.send(response);
        console.log("bia hame contacta");
    }
    catch (error) {
        console.log("errore gereftane hame contacta", error);
        res.send({ error: "failed" });
    }
});
//const response = await getAll.getAllContacts(req : Request, res: Response);
//chera error mide req and res ro?;
router.post('/CreateContact', async (req, res) => {
    const create = new contactController();
    const response = await create.CreateContact(req, res);
    res.send(response);
});
router.delete('/deletecontact', async (req, res) => {
    const deletee = new contactController();
    const response = await deletee.deleteContact(req, res);
    res.send(response);
});
router.put('/updatecontact', async (req, res) => {
    const update = new contactController();
    const response = await update.updateCantact(req, res);
    res.send(response);
});
router.get('/findContact', async (req, res) => {
    const find = new contactController();
    const response = await find.findContact(req, res);
    res.send(response);
});
