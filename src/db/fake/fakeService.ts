import { House } from "../../types/db/house";

export const casas: House[]=[
    { 
        id: 1, 
        ubicacion: 'Valle Alto', 
        descripcion: '2 habitaciones, 2 baños, cocina chica',
        size: { largo: 10, ancho: 8, alto: 5 },
        precio: 200000,
        duracion: 'bimestral',
        tipo: 'Renta',
        contacto: 'contacto@gmail.com'
    },
    { 
        id: 2, 
        ubicacion: 'Eugenio Garza Sada', 
        descripcion: '2 habitaciones, 2 baños, vista al cerro',
        size: { largo: 20, ancho: 30, alto: 7 },
        precio: 500000,
        duracion: 'semestral',
        tipo: 'Renta',
        contacto: 'contacto2@gmail.com'
    },
    { 
        id: 3, 
        ubicacion: 'Cerro de la Silla', 
        descripcion: '3 habitaciones, 3 baños, espacios amplios',
        size: { largo: 50, ancho: 30, alto: 11 },
        precio: 1000000,
        duracion: 'anual',
        tipo: 'Venta',
        contacto: 'contacto3@gmail.com'
    },
];

export class FakeService {
    async getHouses(tipo: string, precioMin: number, precioMax: number): Promise<House[]> {
        
        
        return casas;
    }
    
    async getHousebyId(id: number): Promise<House> {
        return casas[id];
    }
}