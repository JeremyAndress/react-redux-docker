import axios from 'axios';
const url = "http://10.46.0.160:8011/login/"

export default async function page_login(){
    try{
        const data = await axios.get(url)
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

