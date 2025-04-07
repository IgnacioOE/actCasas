import { House } from "../types/db/house";
import {FakeService} from "../db/fake/fakeService";
import {DBService} from "../db/types/dbService";

export class HouseController {

    dbService: DBService

    constructor(dbService: DBService){
        this.dbService = dbService;
    }

    async getHousesByType(tipo: string, precioMin: number, precioMax: number): Promise<House[]>{
        const houses=this.dbService.getHouses(tipo, precioMin, precioMax);
        return houses;
    }
}
