import '@riotjs/hot-reload'
import { mount } from 'riot'
import { register } from 'riot'
import { Router, Route } from './Components/Routing.module'


const StartPoint = "Home";
const Serve = async (callback:any) => await callback();

Serve( async ()=> {

  const basename = (path: string, extension = '') => path.split('/').reverse()[0].replace(extension, '')
  const globalComponentsContext = require.context('./', true, /[a-zA-Z0-9-]+\.riot/)

  var last = globalComponentsContext.keys().length;
  var i = 0;

  globalComponentsContext.keys().map(async(path: any) => {
    
    const name = basename(path, '.riot')
    const component = globalComponentsContext(path)
  
    var module = await Router[name].class();
    let Props:any = new module.default();

    component.default.exports= Props;

    register(name, component.default || component)

    i++;
    if(i == last)  
      mount('[Riot]')

    await Router[name].style();
    
  });

  await Route(StartPoint)

});