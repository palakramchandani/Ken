const bcrypt = require('bcrypt')
const express = require('express')
const jwt=require('jsonwebtoken')
const { validationResult } =require('express-vaildator')







// Login API
exports.Login=('/api/users/login', async (req, res) => {
    try {
      const { mobileNumber, password } = req.body;
      const user = await User.findOne({ where: { mobileNumber } });
      if (!user) {
        res.status(401).json({ success: false, message: 'User not found' });
        return;
      }
      if (password !== user.password) {
        res.status(401).json({ success: false, message: 'Invalid password' });
        return;
      }
      res.json({ success: true, message: 'User logged in successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Unable to login user', error });
    }
  });

  module.exports=router;