import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await prisma.user.findMany();
    return reply.status(200).send(users);
}