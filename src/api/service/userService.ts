import { Transaction } from 'sequelize/types';
import UserModel from '../../database/models/userModel'

export default class UserService {

    selectAll(): Promise<UserModel[]> {

        return UserModel.findAll();

     }

    async asyncSelect(transaction?: Transaction, where?: Partial<UserModel>): Promise<UserModel[]> {

       return await UserModel.findAll(
            {
                where,
                transaction,
            }
        );
    }

    async update(transaction: Transaction, where: Partial<UserModel>, update: Partial<UserModel>): Promise<[affectedCount: number, affectedRows: UserModel[]]> {

        return await UserModel.update(
            update,
            {
                where,
                transaction,
                returning: true,
            }
         );
     }

}