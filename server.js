const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

const dbConnect = async () => {
  try {
    // await mongoose.connect(DB, {
    //   useNewUrlParser: true,
    // });
    await mongoose.connect(DB);
    console.log('database is connected');
  } catch (err) {
    console.error(err);
  }
};

dbConnect();

const port = process.env.PORT || '3000';
app.listen(port, () => {
  console.log(`App loading on port ${port} ....`);
});

