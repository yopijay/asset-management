// Libraries
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify/dist/core";

export const api = ({ url, method, data= null }) => {
    const config = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET, POST'
        },
        data: data
    }

    return axios(config);
}