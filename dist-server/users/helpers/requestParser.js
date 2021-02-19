"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseHttpRequest;

function parseHttpRequest() {
  let req = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.freeze({
    path: req.path,
    method: req.method,
    params: req.params,
    query: req.query,
    body: req.body
  });
}