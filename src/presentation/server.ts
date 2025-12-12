import express, { Router } from 'express'
import cors from 'cors'
import { envs } from '../config/plugins/dotenv.plugin';

interface ServerOptions {
    port: number;
    routes: Router;
}

export class ServerApp {

    private app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(options: ServerOptions) {
        const { port, routes } = options

        this.routes = routes
        this.port = port
    }

    public start() {

        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(this.routes)

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        });
    }
}