import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

interface RegisterUseCaseRequest {
    name: string;
    email: string;
    password: string;
}

export async function registerService({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithEmailAlreadyExists = await prisma.user.findUnique({
        where: {
            email,
        }
    });

    if (userWithEmailAlreadyExists) {
        throw new Error('E-mail already exists');
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash,
        },
    });

}