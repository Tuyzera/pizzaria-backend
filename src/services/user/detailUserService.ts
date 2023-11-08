import prismaClient from "../../prisma";


class DetailUserService{
    async execute(user_id: string){
        
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true,
                
            }
        })

        if(!user){
            throw new Error("Usuario não existe, ou não está logado");
            
        }

        return user;
    }
}

export {DetailUserService}