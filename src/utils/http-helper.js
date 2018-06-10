import axios from 'axios';
import to_json from "xmljson";
import key from '../config';

const get = async ({ url }, cb) => {

    const baseUrl = " https://www.goodreads.com";
    const apiUrl = `${baseUrl}/${url}&key=${key}`;
    try{
        const resp = await axios({url: apiUrl});
        to_json.to_json(resp.data, (err, data) => {
            cb(data);
        });
    } catch (error) {
        return { error };
    }
}

export default get;