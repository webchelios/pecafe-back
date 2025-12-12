import { envs } from "./config/plugins/dotenv.plugin"
import { AppRoutes } from "./presentation/routes"
import { ServerApp } from "./presentation/server"

(async () => {
    await main()
})()


async function main() {

    const server = new ServerApp({
        port: envs.PORT,
        routes: AppRoutes.routes
    })

    server.start()
}