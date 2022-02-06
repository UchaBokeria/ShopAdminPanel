import { mount } from 'riot'

export const StartPoint = "Dashboard";

export const Router:any = {
    App: {
        class: async () => await import("./App.ts"),
        style: async () => await import("./App.scss")
    },
    Dashboard: {
        class: async () => await import("./Dashboard/Dashboard.ts"),
        style: async () => await import("./Dashboard/Dashboard.scss")
    },
    Handbook: {
        class: async () => await import("./Handbook/Handbook.ts"),
        style: async () => await import("./Handbook/Handbook.scss")
    },
    Calendar: {
        class: async () => await import("./Calendar/Calendar.ts"),
        style: async () => await import("./Calendar/Calendar.scss")
    },
    Archive: {
        class: async () => await import("./Archive/Archive.ts"),
        style: async () => await import("./Archive/Archive.scss")
    },
    Analytics: {
        class: async () => await import("./Analytics/Analytics.ts"),
        style: async () => await import("./Analytics/Analytics.scss")
    },
    Settings: {
        class: async () => await import("./Settings/Settings.ts"),
        style: async () => await import("./Settings/Settings.scss")
    }
};

export const Route = async (component:any, dest:any = "outlet") => {
    
    let design:any = await Router[component].style();
    let module:any = await Router[component].class();
    let Props:any  = new module.default();
    let Outlet:any = document.querySelector(dest);

    console.log(Outlet);
    
    Outlet.innerHTML = "";
    mount(Outlet, Props , component);

}