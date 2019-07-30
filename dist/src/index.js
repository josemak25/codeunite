"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var express_graphql_1 = __importDefault(require("express-graphql"));
var comments_1 = __importDefault(require("./routes/comments"));
var users_1 = __importDefault(require("./routes/users"));
var schema_1 = __importDefault(require("./GraphTypes/schema"));
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
// app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/users', users_1.default);
app.use('/api/comments', comments_1.default);
app.use('/graphql', express_graphql_1.default({ schema: schema_1.default, graphiql: true }));
// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
//# sourceMappingURL=index.js.map