import prismaClient from "../../prisma";

interface UserDeleted{
    id: string
}

class DeleteCategoryService{
    async execute({id}: UserDeleted){

        

        const userDeleted = await prismaClient.category.delete({
            where:{
                id: id
            }
        })
        console.log(userDeleted)


        if(!userDeleted){
            throw new Error("Categoria inválida!");
        }



        return userDeleted

    }
}

export { DeleteCategoryService}