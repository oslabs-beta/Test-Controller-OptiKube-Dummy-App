import http from 'k6/http';

export default function () {
  // Use an environment variable to set the intensity
  const intensity = __ENV.INTENSITY || 1; // Default to 1 if not specified
  
  http.get(`http://34.145.228.102:30/adjust/${intensity}`);
}