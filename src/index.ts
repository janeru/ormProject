import "reflect-metadata";
import { createConnections, getConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";

createConnections().then(async connections => {

  // create express app
  const app = express();
  app.use(bodyParser.json());

  // register express routes from defined application routes
  Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : res.send({})).catch(result => res.send(result));
        console.log('Success')
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });

  // start express server
  app.listen(3000);

}).catch(error => console.log(error));
