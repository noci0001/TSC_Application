import {faker} from '@faker-js/faker';

//We can user Latitude and Longitude to model a physical location in the world.
//lat and lng indicate where the reference is in the Google Maps Inferface.
//lat and lng are received as strings are then parsed to be accepted as numbers
export class User {
    name:string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}