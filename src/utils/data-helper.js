import to_json from "xmljson";

export const getResponseInJson = (input) => {
    const { search } = input;
    const { results : { work }} = search;
    return work;
}

const xmlToJson = ( { data } ) => {
    return new Promise((resolve, reject) => {
        to_json.to_json(data, (err, parsedData) => {
            if(err){
                reject(err);
            }
            resolve(parsedData);
        });
    })

}

export default xmlToJson;