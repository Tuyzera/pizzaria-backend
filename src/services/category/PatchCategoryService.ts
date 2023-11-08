import prismaClient from "../../prisma";

class PatchCategoryService{
    async execute(id: string, updatedData: JSON){
        
        

        const data = await prismaClient.category.update({
            where:{
                id:id
            },
            data: {
                ...updatedData
            }
        })

        if(!data){
            throw new Error("Erro ao atualizar os dados");
            
        }

        return data;
    }
}

export {PatchCategoryService}