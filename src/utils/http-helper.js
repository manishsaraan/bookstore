import axios from 'axios';
import xmlToJson from './data-helper';
import key from '../config';

const get = async ({ url }) => {

    const baseUrl = " https://www.goodreads.com";
    const apiUrl = `${baseUrl}/${url}&key=${key}`;
    try{
        const resp = await axios({url: apiUrl});
        const parsedResp = await xmlToJson(resp);
        return parsedResp;
    } catch (error) {
        return { error };
    }
}

export default get;