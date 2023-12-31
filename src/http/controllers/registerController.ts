import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { hash } from "bcryptjs";
import { registerService } from "@/services/RegisterService";

export async function register(request: FastifyRequest, reply: FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { name, email, password } = registerBodySchema.parse(request.body);

    try {
        await registerService({
            name,
            email, 
            password
        })
        return reply.status(201).send();
    } catch (error) {
        return reply.status(409).send()
    }
}