import { UserRepository } from "../services/index.js";
import UsersDTO from "../DTO/users-dto.js";

export const changeRole = async (req, res) => {

    const user = req?.params.email

    const role = req?.params.role

    const userForChangue = await UserRepository.getUserByEmail(user);

    const roleNewForUser = userForChangue;

    if(role == roleNewForUser.role ) {

      return  res.status(400).send({result: true});
    }

    if(role != roleNewForUser.role){
        roleNewForUser.role= role
        await UserRepository.updateUser({ _id: userForChangue._id }, roleNewForUser)
        res.send({ result: 'Role of user was changed' })
    }
}

//------------------------------------------------------------------------------------------

export const getUsers= async (req, res) =>{

const result= []

const users= await UserRepository.getUsers();

for (const user of users) {

    const filterInformation= new UsersDTO(user);

    result.push(filterInformation);
}

res.send({usersResult:result});

}

//------------------------------------------------------------------------------------------

export const getUserByEmail= async (req,res)=>{

    try {
        const user = req.params.email;

        const userFounded = await UserRepository.getUserByEmail(user);

        if (!userFounded) {
            req.logger.error("User not founded")
            return res.status(400).send({ error: "User not founded" });
        }

        if (userFounded) {
            req.logger.info("User founded")
            return res.send({ user: userFounded });
        }
    }
    catch (error) {

        return error
    }
}

//------------------------------------------------------------------------------------------

export const deletUser= async (req,res)=>{

    try {
        const userEmail = req.params.email;

        const userFounded = await UserRepository.getUserByEmail(userEmail);

        if (userFounded) {
            await UserRepository.deletUser(userEmail);
            req.logger.info("User Deleted");
            return res.status(200).send({ result: true });
        }

        
        if (!userFounded) {
            req.logger.error("User not founded")
            return res.status(400).send({ result: false });
        }
    }
    catch (error) {

        return error
    }


}