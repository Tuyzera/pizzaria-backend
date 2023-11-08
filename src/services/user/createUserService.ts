//Service é a logica de tudo para enviar ao banco e etc...

import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    name : string,
    email: string,
    password: string,
}

class CreateUserService{
    async execute({name, email, password} : UserRequest){
        
        //verificar se ele enviou um email
        if(!email){
            throw new Error("Email incorreto")
        }

        //verificar se esse email ja existe no banco
        const userAlreadyExits = await prismaClient.user.findFirst({
            where: {
                email: email //Onde o email for igual a esse email
            }
        })

        if(userAlreadyExits){
            throw new Error("User já existe");
        }

        const passwordHash = await hash(password, 8);

        //Cadastrar o usuario no banco de dados
        const user = await prismaClient.user.create({ 
            data: {
                name: name,
                email: email, 
                password: passwordHash
            },
            select: { //informe o que você quer retornarn o json
                id: true,
                email: true,
                name: true, 
                updated_at: true,
                created_at: true
            }
        })

       

        return user;
    }
}

export {CreateUserService};