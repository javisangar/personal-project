import {
    Injectable
} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RouteService {
    routes: Array<any>;


    constructor() {
        this.routes = [{
            id: Date.now(),
            title: 'Javier Sánchez',
            subtitle: 'Madrid',
            image: '../../../../assets/images/map.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }]
    }
    getRoutes() {
        return this.routes;
    }
    addRoute(route) {
        this.routes.push(route)
    }

}

