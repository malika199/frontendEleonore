const API = require("../../next.config");
const APIURL = API.env.NEXT_PUBLIC_API_URL;
export default {
    register(user) {
        return fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
     return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {

            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    getUser(token) {
        return fetch(`${APIURL}/users/get-user`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateUser(token, user) {
        return fetch(`${APIURL}/users/update-user`, {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    verifyToken(token) {
        return fetch(`${APIURL}/users/verifytoken`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    
}