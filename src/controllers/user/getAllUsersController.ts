import { Request, Response } from "express";
import { getAllUsersService } from "../../services/user/getAllUsersService";


class getAllUsersController{
    async handle(req: Request, res: Response){

        const getAllUserService = new getAllUsersService()

        const allUsers = await getAllUserService.execute();


        return res.json(allUsers)


    }
}

export {getAllUsersController}