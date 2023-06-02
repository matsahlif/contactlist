import { Router } from 'express';
import { Request, Response } from 'express';
import { contactController } from "../controllers/contactController.js";

export const router = Router()

router.get('/allcontacts', async(req :Request, res: Response)=>  
{const getAll = new contactController()
const response = await getAll.getAllContacts();
res.send(response)
console.log("bia hame contacta")},


//const response = await getAll.getAllContacts(req : Request, res: Response);
//chera error mide req and res ro?;


router.post('/CreateContact', async(req :Request, res: Response)=>  
{const create = new contactController()
const response = await create.CreateContact(req, res);
res.send(response)}),

router.delete('/deletecontact', async(req :Request, res: Response)=>  
{const deletee = new contactController()
const response = await deletee.deleteContact(req, res);
res.send(response)}),

router.put('/updatecontact', async(req :Request, res: Response)=>  
{const update = new contactController()
const response = await update.updateCantact(req, res);
res.send(response)}),


router.get('/findContact', async(req :Request, res: Response)=>  
{const find = new contactController()
const response = await find.findContact(req, res);
res.send(response)})
)






