import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'

interface authRequest{ //Dados que devem ser passados para efetuar o login
    email: string,
    password: string
}

class AuthUserService {
    async execute({email, password} : authRequest){
        
        //Vefificar se o email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error("User/password not found");
        }


        //preciso verificar se a senha que mandou esta correta
        const correctPassword = await compare(password, user.password)

        if(!correctPassword){
            throw new Error("Incorrect password");
        }

        //gerar um token JWT e devolver os dados do usuario

        //Se deu tudo certo, vamos gerar o token
        const token = sign({
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        }
        )
        
        return {
            id: user.id,
            email: user.email,
            token: token
        }
    }
}

export {AuthUserService}