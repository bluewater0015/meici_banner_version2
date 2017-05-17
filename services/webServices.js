import baseServices from "./baseServices";
let Config = require(`../config`);
let getProductServices = ()=>{
	return new Promise( (resolve,reject)=>{
		baseServices(`${Config.main_url}/shopdata/getGoods.php`,"jsonp").then(data=>{
			resolve(data);
		}).catch( error=>{
			reject(error);
		})
	}) 
} 

export default getProductServices;