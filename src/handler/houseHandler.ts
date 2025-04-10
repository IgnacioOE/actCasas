import { HouseController } from "../controller/houseController.js";
import express, { Request, Response } from 'express';

export class HouseHandler{
    houseController: HouseController;
    constructor(houseController: HouseController){
        this.houseController = houseController;
    }
    async getHouses(req: Request, res: Response){ 
        try {
            const houses=this.houseController.getHousesByType("venta",0,1000000);
            res.json(houses);
        } catch (error) {
            res.status(500).json({ error: 'error error error error' });
        }
    }
}