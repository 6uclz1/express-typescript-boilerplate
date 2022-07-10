import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import MainRouter  from '../src/api/routes';

import { normalizePort } from '../src/lib/port';

export default class Server {

    expressInstance: express.Express;

    constructor() {

        this.expressInstance = express();
        this.middlewareSetup();
        this.routingSetup();
        this.errorHandlerSetup();

    }

    /**
     * ミドルウェアの設定を行う
     */
    private middlewareSetup() {

        // リソースを圧縮するためのmiddleware`compression`を設定
        this.expressInstance.use(compression());

        // 脆弱性対策用のmiddleware`helmet`を設定
        this.expressInstance.use(helmet());

        // Cross Origin access(CORS)対応のmiddleware`cors`を設定
        this.expressInstance.use(cors());

        // JSONをパースするための設定
        this.expressInstance.use(bodyParser.urlencoded({ extended: true }));
        this.expressInstance.use(bodyParser.json());

    }

    /**
     * ルーティングの設定を行う
     */
    private routingSetup() {

        const router = new MainRouter().router;

        this.expressInstance.use('/', router);

    }

    /**
     * エラーハンドリングの設定を行う
     */
     private errorHandlerSetup() {

        this.expressInstance.use('error', onError);

        function onError(error: NodeJS.ErrnoException): void {

            const port = normalizePort(process.env.PORT || 3000);
            if (error.syscall !== 'listen') {
                throw error;
            }
            const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
            switch (error.code) {
                case 'EACCES':
                    console.error(`${bind} requires elevated privileges`);
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(`${bind} is already in use`);
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }
    }

}