export const justPublicWitoutSession = (req, res, next) => {
    if (!req.cookies.cookieUS) return res.redirect('/api/session/login')

    return next()
}

export const authorization = (role) => {

    return async (req, res, next) => {

        const { user } = req.user;

        if (!user) return res.status(400).send({ error: 'Error' })
        if (user.role != role) return res.status(403).send({ error: 'No permisions' })


        return next()
    }
}

export const chatOnlyForUser = (role) => {

    return async (req, res, next) => {
        const { user } = req.user;

        if (user.role !== role) return res.send({ Answer: 'Este apartado es solo para usuarios' })

        return next()
    }
}

