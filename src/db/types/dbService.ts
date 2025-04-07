import {House} from "../../types/db/house";

export interface DBService {
    getHouses(tipo: string, precioMin: number, precioMax: number): Promise<House[]>;
    getHouseById(id: number): Promise<House>;
}