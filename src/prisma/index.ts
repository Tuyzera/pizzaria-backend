import {PrismaClient} from '@prisma/client';

const prismaClient = new PrismaClient(); //Com isso conseguimos mexer no nosso db

export default prismaClient;