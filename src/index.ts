import { envs } from "./config/plugins/dotenv.plugin"
import { MongoDatabase } from "./data/mongo"
import { AppRoutes } from "./presentation/routes"
import { ServerApp } from "./presentation/server"

(async () => {
    main()
})()


async function main() {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGOURL,
        dbName: envs.MONGODBNAME
    })

    const server = new ServerApp({
        port: envs.PORT,
        routes: AppRoutes.routes
    })

    server.start()
}