import { Router } from 'express';
const router = Router();
import { contactController } from "../controllers/contactController";
router.get('/allcontacts', async (req, res) => /// inja bebin middleware mishe?
 {
    const getAll = new contactController();
    const response = await getAll.getAllContacts();
    res.send(response);
}
//const response = await getAll.getAllContacts(req : Request, res: Response);
//chera error mide req and res ro?;
);
router.get('/CreateContact', async (req, res) => {
    const create = new contactController();
    const response = await create.CreateContact;
    res.send(response);
});
router.get('/deletecontact', async (req, res) => {
    const deletee = new contactController();
    const response = await deletee.deleteContact;
    res.send(response);
});
router.get('/updatecontact', async (req, res) => {
    const update = new contactController();
    const response = await update.updateCantact;
    res.send(response);
});
router.get('/findContact', async (req, res) => {
    const find = new contactController();
    const response = await find.findContact;
    res.send(response);
});
