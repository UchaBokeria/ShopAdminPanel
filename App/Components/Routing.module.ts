import { mount } from 'riot'

export const Router:any = {
    
    App: {
        class: async () => await import("./App.ts"),
        style: async () => await import("./App.scss")
    },
    Home: {
        class: async () => await import("./Home/Home.ts"),
        style: async () => await import("./Home/Home.scss")
    },
    About: {
        class: async () => await import("./About/About.ts"),
        style: async () => await import("./About/About.scss")
    }

};

export const Route = async (component:any, dest:any = "outlet") => {

    let design:any = await Router[component].style();
    let module:any = await Router[component].class();
    let Props:any  = new module.default();
    let Outlet:any = document.querySelector(dest);

    Outlet.innerHTML = "";
    mount(Outlet, Props , component);

}