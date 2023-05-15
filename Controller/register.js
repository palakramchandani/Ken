const express=require("express");
const router=express.Router();
const{ User }=require('./Utils/allModels');


// Register user API
router.post('/api/users/register', async (req, res) => {
    try {
      const { name, mobileNumber, password, birth, gender } = req.body;
      const user = await User.create({ name, mobileNumber, password, birth, gender });
      res.json({ success: true, message: 'User registered successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Unable to register user', error });
    }
  });
module.exports = router;
