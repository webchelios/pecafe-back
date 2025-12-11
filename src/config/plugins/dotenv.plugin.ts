import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
    PORT: env.get('PORT').required().asInt(),
    POSTGRES_URL: env.get('POSTGRES_URL').required().asString(),
    POSTGRES_DB: env.get('POSTGRES_DB').required().asString(),
    POSTGRES_USER: env.get('POSTGRES_USER').required().asString(),
    POSTGRES_PORT: env.get('POSTGRES_PORT').required().asInt()
}