import { prisma } from "@/lib/prisma";

export async function getUserService() {
    const users = await prisma.user.findMany();
    return users;
}