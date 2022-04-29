import axios from 'axios';
const URL = "http://localhost:5000";


export function searchExpert(city, callback){
    axios.get(URL + "/experts/search/" + city)
    .then((res) =>{
        callback(res);
    })
    .catch((error)=>{
       callback(error);
    })
}



