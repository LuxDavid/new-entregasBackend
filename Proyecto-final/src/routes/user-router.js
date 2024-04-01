import { Router } from "express";
import passport from 'passport';
import { changeRole, getUsers, getUserByEmail, deletUser } from "../controllers/user_controller.js";
import { authorization} from '../middlewares/middlewares.js';

const router=Router();

router.get('/', getUsers);

//---------------------------------------------------------------------

router.get('/:email', getUserByEmail);

//---------------------------------------------------------------------

router.put('/changeRole/:email/:role',
passport.authenticate('current', { session: false }),
authorization(['admin']),
changeRole);

//---------------------------------------------------------------------

router.delete('/:email',
passport.authenticate('current', { session: false }),
authorization(['admin']),
deletUser)

export default router