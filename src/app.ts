import express from 'express';
import cookieParser from 'cookie-parser'
import logger from 'morgan';

import { baseRouter } from './routes/base';
import { userRouter } from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', baseRouter);
app.use('/users', userRouter);

export const appInstance = app;
