import { Router } from 'express';
import { Request, Response } from 'express';


const router = Router()
import { contactController } from "../controllers/contactController";
router.get('/allcontacts', async(req :Request, res: Response)=>  /// inja bebin middleware mishe?
{const getAll = new contactController()
const response = await getAll.getAllContacts();
res.send(response)}

//const response = await getAll.getAllContacts(req : Request, res: Response);
//chera error mide req and res ro?;
)

router.get('/CreateContact', async(req :Request, res: Response)=>  
{const create = new contactController()
const response = await create.CreateContact;
res.send(response)})

router.get('/deletecontact', async(req :Request, res: Response)=>  
{const deletee = new contactController()
const response = await deletee.deleteContact;
res.send(response)})

router.get('/updatecontact', async(req :Request, res: Response)=>  
{const update = new contactController()
const response = await update.updateCantact;
res.send(response)})


router.get('/findContact', async(req :Request, res: Response)=>  
{const find = new contactController()
const response = await find.findContact;
res.send(response)})








