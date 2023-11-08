import prismaClient from "../../prisma";

class getAllUsersService{
    async execute(){

        const allUsers = await prismaClient.user.findMany({
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        return allUsers
    }
}

export {getAllUsersService}