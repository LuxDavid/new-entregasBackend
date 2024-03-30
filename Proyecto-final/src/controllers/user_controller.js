import { UserRepository } from "../services/index.js";
import UsersDTO from "../DTO/users-dto.js";

export const changeRole = async (req, res) => {

    const userActive = req?.user?.user

    const userForChangue = await UserRepository.getUserByEmail({ email: userActive.email })

    const roleNewForUser = userForChangue;

    if (userForChangue.role == 'premium') {
        roleNewForUser.role = 'user'
        await UserRepository.updateUser({ _id: userForChangue._id }, roleNewForUser)
        res.send({ result: 'Role of user was changed for user' })
    }

    if(userForChangue.role == 'user'){
        roleNewForUser.role = 'premium'
        await UserRepository.updateUser({ _id: userForChangue._id }, roleNewForUser)
        res.send({ result: 'Role of user was changed for premium' })
    }

}

export const getUsers= async (req, res) =>{

const result= []

const users= await UserRepository.getUsers();

for (const user of users) {

    const filterInformation= new UsersDTO(user);

    result.push(filterInformation);
}

res.send({usersResult:result});

}