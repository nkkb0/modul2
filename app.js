/* eslint-disable no-console */
import express from 'express';

import { Client } from 'pg';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const client = new Client({
  host: 'aws-1-us-east-1.pooler.supabase.com',
  port: '5432',
  user: 'postgres.tbzmvkauhovilveyjjrh',
  password: 'Iwannapizzafcfdf123',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false, // Отключает проверку SSL-сертификата удаленной стороны.
  },
});

client.connect()
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Connection error', err.stack));
