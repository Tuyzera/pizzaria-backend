import { Request, Response } from "express";
import { AddItemsService } from "../../services/order/AddItemsService";

class AddItemController{
    async handle(req: Request, res: Response){

        const {order_id, product_id, amount} = req.body;

        const addItemService = new AddItemsService()

        const item = await addItemService.execute({order_id, product_id, amount})

        return res.json(item)

    }
}

export {AddItemController}