import {userModel} from '../mongoDB/models/userModel.js'

class userManager{

async getUsers(){

    try {
        const users = await userModel.find();
        return users;

    } catch (error) {
        return [];
    }
}

async getUserByEmail(emailUser){

    try {

        const user= await userModel.findOne({ email: emailUser });

        return user
        
    } catch (error) {
        return false
    }
}

async updateUser(idUser, newValue){

    try {

        const user= await userModel.updateOne({ _id: idUser  }, newValue)

        return user
        
    } catch (error) {
        return false
    }

}

}

export default userManager