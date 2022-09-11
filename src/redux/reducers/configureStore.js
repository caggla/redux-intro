import { configureStore } from "redux"; //createStore depreciated
import reducers from "./index";

//ilk olarak actionları olusturduk . sonra reducer ları olusturduk. sonra reducerları combin ettik index.js de. sonra da store u olusturup projenin asıl index. js ınde import edip çağırıp storeumuzu belirttik :D
//aslında son yaptıgımız index.js deki işlem react projesini redux a bağlamaktı .:D
