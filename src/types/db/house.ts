export interface House {
    id: number;
    ubicacion: string;
    descripcion: string;
    size: Size;
    precio: number;
    duracion: string;
    tipo: string;
    contacto: string;
}

export interface Size {         //m2
    largo: number;
    ancho: number;
    alto: number;
}