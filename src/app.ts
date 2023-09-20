import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

export const app = fastify();

const prisma = new PrismaClient();

// prisma.user.create({
//     data: {
//         name: 'Matheus',
//         email: 'matheusdeamorim20@gmail.com'
//     }
// })

// prisma.user.findMany().then((users) => {
//     console.log(users);
// });