import dotenv from 'dotenv'

dotenv.config();

export default {
  login: process.env.CYPRESS_LOGIN || 'demo',
  password: process.env.CYPRESS_PASSWORD || 'demo',
}
