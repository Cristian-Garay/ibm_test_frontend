import axios from "axios";
import { apiUrl, HEADERS } from "../config";

export class Api {
    static getUsers = () => {
        return axios.get(apiUrl + 'users')
            .then(function (r) {
                return (r)
            })
            .catch(function (error) {
                console.log(error);
                // reject(error);
            });
    }
}
