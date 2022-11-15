import app from './app';

const APP_BASE_URL = 'http://localhost';
const APP_PORT = 5000;

app.listen(5000, () => {
  console.log(`🚀 Server is running on: ${APP_BASE_URL}:${APP_PORT}`);
});
