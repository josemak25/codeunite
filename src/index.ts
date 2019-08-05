import createError from 'http-errors';
import express, { Response, Request, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import graphqlHTTP from 'express-graphql';

import commentsRouter from './routes/comments';
import usersRouter from './routes/users';
import schema from './GraphTypes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/comments', commentsRouter);

app.use('/graphql', graphqlHTTP(req => ({ schema, graphiql: true, context: { req } })));

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, _next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
