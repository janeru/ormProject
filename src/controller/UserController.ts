import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private mysqlConnection;
    private userRepository;
    constructor() {
      this.mysqlConnection = getConnection('postgres')
      this.userRepository = this.mysqlConnection.getRepository(User);
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        return this.userRepository.remove(userToRemove);
    }

}