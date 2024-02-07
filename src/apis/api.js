import axios from 'axios';

// axios 객체 생성 - 헤더에 공통으로 적용해주기 위함
const api = axios.create();

export default api;