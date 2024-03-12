import http from 'k6/http';

export default function () {
  http.get('http://35.186.165.23:80/start');
}
