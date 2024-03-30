export default class UserServices {

    constructor(dao) {
        this.dao = dao
    }

    getUsers = async () => { return this.dao.getUsers() }
    getUserByEmail = async emailUser => { return this.dao.getUserByEmail(emailUser) }
    updateUser = async (idUser, newValue) => { return this.dao.updateUser(idUser, newValue) }

}