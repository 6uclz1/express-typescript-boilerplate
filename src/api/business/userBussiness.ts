import UserModel from '../../database/models/userModel';
import UserService from '../service/userService';

export default class UserBussiness {

    private userService: UserService

    constructor() {

        this.userService = new UserService()

    }

    async getAllUser(): Promise<UserModel[]> {

        return this.userService.selectAll()

    }

}