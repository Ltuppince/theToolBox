import axios from "axios";

export default {
    getCompanyData: function() {
        return axios.get("/api/users/data")
    }
}