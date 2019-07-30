"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
/* GET comments listing. */
router.get('/', function (_req, res, _next) {
    res.status(200).json({ message: 'successful' });
});
exports.default = router;
//# sourceMappingURL=comments.js.map