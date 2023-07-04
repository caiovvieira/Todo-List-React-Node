import dotenv from 'dotenv'
import app from './src/index.js';

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`server in running on http://localhost:${process.env.PORT}`);
})