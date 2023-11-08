import prismaClient from "../../prisma";




class GetUserByIdService {
    async execute(id: string){

  
        //verificar se o ID ja existe
        const idUser = await prismaClient.user.findFirst({
            where:{
                id: id
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        console.log(idUser)
        if(!idUser){
            throw new Error("Usuario não encontrado");
        }

        return idUser;
      
    }
}

export {GetUserByIdService}