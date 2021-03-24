import axios from 'axios';

export default ({ req }) => {
    if (typeof window === 'undefined') {
        //we are on server

        return axios.create({
            //baseURL: 'http://ingress-nginx.svc.cluster.local',
            baseURL: 'http://localhost:3001',
            headers: req.headers
        });

    } else {
        //we are on browser
        return axios.create({
            baseURL: '/'
        })
    }
};
