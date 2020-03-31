const express = require('express');
const path = require('path');


module.exports = app => {
  // Connecting to Static Folder
  app.use(express.static(path.resolve('../client')));
};