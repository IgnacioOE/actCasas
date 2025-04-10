import { House } from "../types/db/house";
import {DBService} from "../db/types/dbService";

export class HouseController {

    dbService: DBService

    constructor(dbService: DBService){
        this.dbService = dbService;
    }

    async getHousesByType(tipo: string, precioMin: number, precioMax: number): Promise<House[]>{
        const houses=await this.dbService.getHouses(tipo, precioMin, precioMax);
        return houses;
    }
    sum(p1: number, p2: number): number {
        if (p1<0 || p2 <0){
            throw new Error("number can't be negative");
        }
        return p1 + p2;
    }
}
