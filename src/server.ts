import express, {Request, Response, NextFunction, json} from "express";
import 'express-async-errors'
import cors from 'cors';
import path from 'path'

import { router } from "./routes";

const app = express();

app.use(express.json())
app.use(cors())

app.use(router);

app.use( //Criando uma rota estatica, para acessar a foto enviada e usar no front end
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp')) //dirname(diretorio atual, '/../tmp')
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //Se for uma instancia do tipo Error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'Error',
        msg: 'Internal server error!'
    })
})

app.listen(3333, () => {
    console.log('Servidor on-line')
})




