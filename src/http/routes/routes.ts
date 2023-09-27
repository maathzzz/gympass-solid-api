import { FastifyInstance } from "fastify";
import { register } from "../controllers/registerController";
import { getUsers } from "../controllers/getUserController";

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', register);

    app.get('/users', getUsers);
}