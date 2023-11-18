const express = require("express");

const consoleLogType = (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
};

module.exports = {
  consoleLogType,
};
