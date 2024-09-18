import axios from "axios";
import router from "next/router";

// ** Config
//import authConfig from 'src/configs/auth'

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/',

})



http.interceptors.request.use(
    (config) => {
        if (config?.headers) {
            const token = window.localStorage.getItem("storageTokenKeyName");
            if (token) {
                config.headers["Authorization"] =  `Bearer ${token}`;  
            }
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


http.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== "/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {

                    const httpRefresh = axios.create({
                        baseURL: process.env.NEXT_PUBLIC_API_URL,
                    })
                    
                    const token = window.localStorage.getItem("storageTokenRefreshKeyName");
                    
                    httpRefresh.get('service-user/staff/refresh/')
                    .then(async res => {
                        window.localStorage.setItem('storageTokenKeyName', res.data.accessToken)
                        window.localStorage.setItem('storageTokenRefreshKeyName', res.data.refreshToken) 
                    }).catch(err =>{
                        console.log(err)
                        window.localStorage.removeItem('storageUser')
                        window.localStorage.removeItem('storageTokenKeyName')
                        window.localStorage.removeItem('storageTokenRefreshKeyName')
                        //router.replace('/')
                    })

/*                  const response = await httpRefresh.get("service-user/staff/refresh",  {headers: {
                        Authorization: `Bearer ${token}`
                    }});
                    

                    window.localStorage.setItem('storageTokenKeyName', response.data.accessToken)
                    window.localStorage.setItem('storageTokenRefreshKeyName', response.data.refreshToken)

                    */
                    return http(originalConfig);
                } 
                catch (_error) {
                    console.log(_error)
                    if (axios.isAxiosError(_error) && _error.response?.status === 401) {
                        window.localStorage.removeItem('userData')
                        window.localStorage.removeItem('storageTokenKeyName')
                        window.localStorage.removeItem('storageTokenRefreshKeyName')
                        //router.replace('/')
                    }
                    
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);  

export default http;