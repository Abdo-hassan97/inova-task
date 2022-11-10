import axios from 'axios';

 const axiosInstance=axios.create({
baseURL:"https://staging.algym.com/api/v1",
// headers:{
    
// },
params:{
    page:1
}

})
export default axiosInstance