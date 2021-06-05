import axios from "axios"

export default class ProductService {
    getProdcuts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
}