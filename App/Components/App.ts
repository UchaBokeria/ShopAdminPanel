import { component, mount } from 'riot';
import { Router, Route } from './Routing.module'

export default class App {
    title = "Artemida";
    minimizer = false;

    constructor() {
        if (localStorage.getItem("minimizer") === null) this.minimizer = false;
        else this.minimizer = (localStorage.getItem("minimizer") === "yes") ?  true : false;
    }

    minimize = (e:any) => {
        document.querySelector(".Side-bar").classList.toggle("Minimize");
        document.querySelector(".Content").classList.toggle("Content-minimize");
        document.querySelectorAll(".Title i").forEach((el) => el.classList.toggle("Hide"));

        this.minimizer = !this.minimizer;
        if(this.minimizer) localStorage.setItem("minimizer", "yes");
        else localStorage.setItem("minimizer", "no");
    }

    route = (e:any) => {
        let Outlet:any = document.querySelector("outlet");
        let Comp:string = e.srcElement.parentElement.getAttribute("Route");
        document.querySelectorAll(".Navigation div").forEach((e)=> e.classList.remove("Active"));
        document.querySelector(".Navigation div[Route='" + Comp + "']").classList.add("Active");
        Route(Comp);
    }
}