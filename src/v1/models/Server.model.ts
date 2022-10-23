import express, { Application } from 'express';
import * as routes from '../routes';
import cors from 'cors';



class Server {

    private app:Application;
    private port: string;
    private apiPaths = {
        webhook: '/webhook',
        pubic: '/'
    }

    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT || '4000';

        this.middlewares();
        this.routes();
    }

    middlewares():void {
        this.app.use( cors() )
        this.app.use( express.json() );
    }

    // Routers
    routes():void {
        this.app.use( this.apiPaths.webhook, routes.userRoute);
        this.app.use( this.apiPaths.pubic, routes.publicRoute);
    }

    // Server running
    listen():void {
        this.app.listen( this.port, () => {
            console.log(`Server on port: ${this.port}`);
            console.log(`http://localhost:${this.port}`);
        });
    }

}


export default Server;