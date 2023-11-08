import { Request, Response } from "express";
import { PatchCategoryService } from "../../services/category/PatchCategoryService";


class PatchCategoryController{
    async handle(req: Request, res: Response){

        const id = req.params.id;

        const updatedData = req.body
        
        console.log(updatedData)

        const patchCategoryService = new PatchCategoryService()

        const categoryPatched = await patchCategoryService.execute(id, updatedData)
       

        return res.json(categoryPatched)

    }
}

export {PatchCategoryController}