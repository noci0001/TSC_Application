import {faker} from '@faker-js/faker';
import { Mappable } from './CustomMap';

//We can user Latitude and Longitude to model a physical location in the world.
//lat and lng indicate where the reference is in the Google Maps Inferface.
//lat and lng are received as strings are then parsed to be accepted as numbers
export class User implements Mappable {
    name:string;
    product: string;
    color: string = 'red';
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.product = faker.commerce.product();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            Name of the user: ${this.name} <br>
            Purchased product: ${this.product}
            `;
    }
}