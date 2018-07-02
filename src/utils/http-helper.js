import axios from 'axios';
const get = async ({ url }) => {
    const baseUrl = " https://www.goodreads.com/search/index.xml";
    const apiUrl = `${baseUrl}/${url}/&key=${key}`;
    try{
       return axios({url: apiUrl});
    } catch (error) {
        return { error };
    }
}

export default get;