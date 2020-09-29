"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _db = _interopRequireDefault(require("../db"));

var _router = _interopRequireDefault(require("../router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

(0, _db["default"])();
app.use(_express["default"].json());
app.use("/api", _router["default"]);
app.get("/", function (req, res) {
  res.json({
    message: "endpoint working successfully"
  });
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("server running on port ".concat(PORT)));
//# sourceMappingURL=index.js.map