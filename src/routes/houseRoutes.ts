import express, { Request, Response, NextFunction } from 'express';
import {HouseHandler} from "../handler/houseHandler";
import {HouseController} from "../controller/houseController";
import {FakeService} from "../db/fake/fakeService";
import {PostgresService} from "../db/postgres/postgresService";

const router=express.Router();

const fs= new FakeService();
const ps=new PostgresService("");
const houseController= new HouseController(ps);

//handle instance
const houseHandler= new HouseHandler(houseController);

router.get('/', houseHandler.getHouses.bind(houseHandler));

export default router;