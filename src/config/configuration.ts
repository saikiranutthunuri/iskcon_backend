export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  pilvoSms: {
    authId: 'MANTM1NJQ4YZMXYJZMZM',
    authToken: 'NWE4ZjJiN2Q4MDU1ZWYwYzNhYzg3ZmVjYWMyMDVj',
    sendPhoneNumber: '917032128349',
  },
  rubix: {
    url: 'http://65.2.135.170:5050/api/',
    constants: {},
    getAllDids: 'getalldid',
    createdid: '',
  },
});
