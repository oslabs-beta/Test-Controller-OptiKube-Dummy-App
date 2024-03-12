import http from 'k6/http';

export default function () {
  // Use an environment variable to set the thresholds
  const upper = __ENV.UPPER || 80; 
  const lower = __ENV.LOWER || 50;
  const thres = __ENV.THRES || true; 
  
  http.get(`http://35.186.165.23:80/adjust?lowerLimit=${lower}&upperLimit=${upper}&costExceedsThreshold=${thres}`);
}