//Controllers se comunicam diretamente com as routes

import { Request, Response} from 'express'
import { GetUserByIdService } from '../../services/user/getUserByIdService';


class getUserByIdController {
    async handle(req: Request, res: Response){
   
        const id = req.params.id;

        const getUserByIdService = new GetUserByIdService()

        const user = await getUserByIdService.execute(id)

        return res.json(user)
    }
}

export { getUserByIdController}