import http from "k6/http";
import { sleep } from "k6";

export let options = {
    stages: [
        { duration: '1m', target: 50 },
        { duration: '4m', target: 50 },
        { duration: '3m', target: 0 },
    ],
}

const url = 'http://35.245.86.119:80';

export default function () {
    http.get(url)
    sleep(1);
}
