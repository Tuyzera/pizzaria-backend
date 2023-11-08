import prismaClient from "../../prisma";

interface ProductRequest{
    category_id: string
}

class ListByCategoryService{
    async execute({category_id}: ProductRequest){

        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            },
            select:{
                id: true,
                name: true,
                description: true
            }
        })

        //Caso não ache nenhum produto
        if(!findByCategory){
            throw new Error("Nenhum produto foi encontrado!!");
        }

        return findByCategory;

    }
}

export { ListByCategoryService}