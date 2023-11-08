import {Router} from 'express'
import multer from 'multer';

import uploadConfig from './config/multer'


import {createUserController} from './controllers/user/createUserController'
import { authUserController } from './controllers/user/authUserController';
import { detailUserController } from './controllers/user/detailUserController';
import { getUserByIdController } from './controllers/user/getUserByIdController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { getAllUsersController } from './controllers/user/getAllUsersController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';
import { PatchCategoryController } from './controllers/category/PatchCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { DeleteItemController } from './controllers/order/DeleteItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp')) //pasta que deseja salvar a foto


//-- ROTAS USERS -- 
router.post('/users', new createUserController().handle) //Criar um novo usuario
router.post('/session', new authUserController().handle) //Logar com seu usuario
router.get('/userDetails', isAuthenticated , new detailUserController().handle) //Pegar dados do usuario LOGADO
router.get('/userid/:id', new getUserByIdController().handle) //Pegar dados do usuario pelo ID passado
router.get('/AllUsers', new getAllUsersController().handle)

//-- ROTAS CATEGORY -- 
router.post('/category', isAuthenticated, new CreateCategoryController().handle) //Criar uma nova categoria
router.get('/AllCategories', isAuthenticated, new ListCategoryController().handle) //Listar todas as categorias cadastradas
router.delete('/deleteCategory', isAuthenticated, new DeleteCategoryController().handle) //Deletar uma categoria
router.patch('/category/:id/patch', isAuthenticated, new PatchCategoryController().handle) //Atualizar uma categoria

//-- ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle) //Criar produto (Obs: esse 'file' é a key que deve ser passada na requisição)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle) //Listar produtos de uma determinada categoria

//-- ROTAS ORDER --
router.post('/createOrder', isAuthenticated, new CreateOrderController().handle) //Criar pedido
router.delete('/deleteOrder', isAuthenticated, new DeleteOrderController().handle) //Deletar pedido
router.post('/addItems', isAuthenticated, new AddItemController().handle) //Adicionar itens a esse pedido
router.delete('/deleteItem', isAuthenticated, new DeleteItemController().handle) //Deletar os itens
router.patch('/sendOrder', isAuthenticated, new SendOrderController().handle) //Enviar pedido
router.get('/allOrders', isAuthenticated, new ListOrdersController().handle) //Lista todas os pedidos que ja foram enviados
router.get('/orderDetail', isAuthenticated, new DetailOrderController().handle) //Detalhes de um pedido
router.patch('/finishOrder', isAuthenticated, new FinishOrderController().handle) //Finalizar pedido

export { router };