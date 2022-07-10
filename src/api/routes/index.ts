import { Router } from 'express';
import UserPresentation from '../presentation/userPresentation';
import UserService from '../service/userService';

export default class MainRouter {

    router: Router;
    userPresentation: UserPresentation;
    userService: UserService;

    constructor() {

        this.userPresentation = new UserPresentation();
        // TODO: Service層を直接呼べない設計にするか検討中。
        this.userService = new UserService();

        this.router = Router({ mergeParams: true });
        this.userRoutes();

    }

    private userRoutes() {

        // TODO: Presentation層の呼び出しがうまくできていないので修正が必要
        this.router.route('/users')
            .get(this.userPresentation.readAll)
            .post(this.userPresentation.update)

        // TODO: 疎通確認のため仮で設置
        this.router.route('/users/1')
            .get(this.userService.selectAll)

        // サーバーの状態を返却するAPI
        this.router.get('/health', (req, res) => {
            res.send(
                {
                    uptime: process.uptime(),
                    status: 'Ok',
                    timezone: 'ID',
                    node: process.version,
                    memory: process.memoryUsage,
                    platform: process.platform,
                }
            )
        })
    }
}