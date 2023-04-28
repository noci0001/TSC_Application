//the object of googleMap is private so to deny access from the outside scope
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            zoom: 100,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}