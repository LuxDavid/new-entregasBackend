import { Router } from "express";
import passport from 'passport';
import { changeRole, getUsers } from "../controllers/user_controller.js";

const router=Router();

router.get('/', getUsers);
router.get('/changeRole',passport.authenticate('current', { session: false }), changeRole);

export default router