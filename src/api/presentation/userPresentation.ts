import UserBussiness from '../business/userBussiness';

import { Request, Response } from 'express';
import db from '../../database/instantiate'
import UserModel from '../../database/models/userModel';

export default class UserPresentation {

    private userBussiness: UserBussiness

    constructor() {
        this.userBussiness = new UserBussiness()
    }

    readAll(req: Request, res: Response) {
        UserModel.findAll()
            .then((users: UserModel[]) => {
                res.json(users);
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    read(req: Request, res: Response) {
        this.userBussiness.getAllUser()
            .then((users: UserModel[]) => {
                res.json(users);
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    public async update(req: Request, res: Response) {

        const tx = await db.sequelize.transaction();

        try {

            this.userBussiness.getAllUser();

            await tx.commit();

        } catch (error) {

            await tx.rollback();

        }
    }
}