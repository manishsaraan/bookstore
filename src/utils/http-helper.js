import axios from 'axios';
import key from '../config';

const getRequest = async ({ url }) => {

    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const apiUrl = `${baseUrl}?${url}&key=${key}`;
    try{
        const { data, status } = await axios({url: apiUrl});
        if(status === 200){
            console.log('--------data', data);
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