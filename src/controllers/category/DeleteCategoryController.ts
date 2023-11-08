import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController{
    async handle(req: Request, res: Response){

       

        const {id} = req.body;

        const deleteCategoryService = new DeleteCategoryService()

        const userDeleted = await deleteCategoryService.execute({id})


        return res.json(userDeleted)

    }
}

export {DeleteCategoryController}