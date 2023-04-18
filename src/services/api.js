import axios from 'axios'

// Rodar com IPV4: json-server --watch -d 180 --host 192.168.0.103 db.json

export const api = axios.create({
    baseUrl: "http://192.168.0.103:3000/"
})
