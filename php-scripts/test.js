import http from "k6/http";
import { sleep } from "k6";

export let options = {
    stages: [
        { duration: '2m', target: 75 },
        { duration: '5m', target: 75 },
        { duration: '2m', target: 0 },
    ],
}

const url = 'http://35.245.86.119:80';

export default function () {
    http.get(url)
    sleep(1);
}
