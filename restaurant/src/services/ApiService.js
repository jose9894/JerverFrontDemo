import axios from "axios";


const BASEURL = "http://localhost:5000";


const Api = axios.create({
  baseURL: BASEURL,
});


export async function GetAllPizzas() {
 try {
    const response = await Api.get('/pizza');
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    return false;
  }
}

export async function GetAllPitas() {
 try {
    const response = await Api.get('/pita');
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    return false;
  }
}



