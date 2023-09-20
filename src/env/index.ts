import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z.enum(['dev', 'test', 'prod']),
	PORT: z.coerce.number().default(3333)
});

// safeParse valida se as variáveis de ambiente estão de acordo com o schema
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error('Invalid environment variables', _env.error.format());

	throw new Error('Invalid environment variables');
} 

export const env = _env.data;