//Controllers se comunicam diretamente com as routes

import { Request, Response} from 'express'
import { AuthUserService } from '../../services/user/authUserService'

class authUserController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body

        const authUserService = new AuthUserService()

        const user = await authUserService.execute({email, password})

        return res.json(user)
    }
}

export { authUserController}