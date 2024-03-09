import http from 'k6/http';

export default function () {
  http.get('http://34.145.228.102:30/stop');
}
