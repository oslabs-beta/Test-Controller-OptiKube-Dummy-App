import http from 'k6/http';

export default function () {
  // Use an environment variable to set the thresholds
  const target = __ENV.TARGET || 50; 

  http.get(`http://35.186.165.23:80/adjust?cpuTarget=${target}`);
}