import axios from 'axios';
import key from '../config';

const getRequest = async ({ url }) => {

    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const apiUrl = `${baseUrl}?${url}&maxResults=20&key=${key}`;
    try{
        const { data, status } = await axios({url: apiUrl});
        if(status === 200){
            return data;
        }
        else{
            //todo
        }
    } catch (error) {
        return { error };
    }
}

export default getRequest;