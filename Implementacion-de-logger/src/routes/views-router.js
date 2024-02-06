import { Router } from "express";
import passport from "passport";
import {homeProducts, realTimeProducts, cartUser, register, login, profile } from "../controllers/views_controllers.js";
import {justPublicWitoutSession} from '../middlewares/middlewares.js'

const router=Router();

router.get('/', justPublicWitoutSession ,passport.authenticate('current', { session: false }), homeProducts);

router.get('/realTimeProducts', realTimeProducts );

router.get('/carts/:cid', cartUser)

router.get('/api/session/register', register );

router.get('/api/session/login', login);

router.get('/api/session/current',passport.authenticate('current', { session: false }), profile);

export default router