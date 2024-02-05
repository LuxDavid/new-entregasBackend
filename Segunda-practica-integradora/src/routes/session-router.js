import { Router } from "express";
import passport from 'passport';

const router = Router();

//--------------------------------------------------------------------------------------

router.post('/register', passport.authenticate('register', { failureRedirect: '/' }), async (req, res) => {

    res.redirect('/api/session/login');
})


//--------------------------------------------------------------------------------------

router.post('/login', passport.authenticate('login', { failureRedirect: '/' }), async (req, res) => {

    res.cookie('cookieUS', req.user.token).redirect('/');

});


router.post('/current', async (req, res) => {

    req.session.destroy(error => { if (error) return res.send('Error al cerrar session') });
    res.clearCookie('cookieUS');

    return res.redirect('/api/session/login')

});

router.get(
    '/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    async (req, res) => { }
)

router.get(
    '/githubcallback',
    passport.authenticate('github', { failureRedirect: '/error' }),
    (req, res) => {
        res.cookie('cookieUS', req.user.token).redirect('/');
    }
)













export default router