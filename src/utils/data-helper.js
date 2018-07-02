import to_json from "xmljson";

const xmlToJson = ( { data } ) => {
    return Promise((reject, resolve) => {
        to_json.to_json(data, (err, data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })

}

export default xmlToJson;