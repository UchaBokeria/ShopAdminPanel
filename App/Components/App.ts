import { component } from 'riot';
import { Router, Route } from './Routing.module'

export default class App {
    name = "Artemenes";

    constructor() {}

    route = (e:any) => {
        let Comp:string = e.target.getAttribute("Route");
        let Outlet:any = document.querySelector("outlet");
        
        Route(Comp);
    }
}