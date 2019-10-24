import { imagenes } from './images';

export class Producto {
    createat: string;
    price: number;
    sku: string;
    pk: number;
    name: string;
    stock: number;
    doscount: string;
    condition: string;
    dimensionesunit: string;
    shippingdepth: string;
    shippingheight: string;
    shippingwidth: string;
    weight: string;
    weightunit: string;
    imagen: imagenes[] = [];
}
