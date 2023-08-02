// Libraries
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const api = ({ url, method, data= null }) => {
    const config = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET, POST',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        data: data
    }

    return axios(config);
}

export const usePost = ({ request, onSuccess, onError }) => { return useMutation(request, { onSuccess, onError }); }
export const useGet = ({ key, request, options, onSuccess, onError }) => { return useQuery(key, () => request, { onSuccess, onError, ...options }); }
export const formatter = (num, size) => { return (`000000${num}`).substr((`000000${num}`).length - size); }

export const base64 = (file) => {
    return new Promise((resolve, reject) => {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = () => { resolve(filereader.result); }
        filereader.onerror = (error) => { reject(error); }
    });
}

export const successToast = (message, duration = 3000, navigate) => {
    return toast.success(message, {
        position: 'bottom-left',
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
        onClose: () => navigate
    });
}