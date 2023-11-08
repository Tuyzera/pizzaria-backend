import prismaClient from "../../prisma";

class ListOrdersService{
    async execute(){

        const orders = await prismaClient.order.findMany({
            where:{
                draft: false
            }
        })

        return orders;

    }
}

export {ListOrdersService}