import { Injectable } from '@nestjs/common';

@Injectable() // injecti l service fi west l controller 

export class ProductsService {
    private products = [
{ id: 1, name: 'Laptop', price: 2500 }, //mock data = fake data to test the code
{ id: 2, name: 'Souris', price: 40 },
];
findAll() { return this.products;} //jibli les produits lkol

findOne(id: number) {
const p = this.products.find(x => x.id === id);
return p;
}

}  