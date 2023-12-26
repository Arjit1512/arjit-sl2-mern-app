import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const forgotPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  
  try {
    const user = await User.findOne({ email });

    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if newPassword is provided
    if (!newPassword) {
      return res.status(400).json({ message: 'New password is required.' });
    }

    // Update the user's password without hashing
    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Error in forgotPassword:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Verify the reset token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the decoded userId
    const user = await User.findById(decodedToken.userId);

    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the user's password
    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(400).json({ message: 'Reset token expired.' });
    }
    console.error('Error in resetPassword:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/*REGISTER USER*/
export const register = async(req,res) => {
    try{
        
        const{
            firstName,
            lastName,
            email,
            password
        } = req.body;

        // const salt = await bcrypt.genSalt();
        // const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User ({
            firstName,
            lastName,
            email,
            password
           });
        const savedUser = await newUser.save();
        
         //res.json("exist")
       
        if(savedUser){
            res.json("notexist")
            return;
        }
        if(!savedUser){
            res.json("exist")
            return;
        }  
        
        res.status(201).json(savedUser);

    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

/*LOGIN USER*/
/* LOGIN USER */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ message: 'User does not exist.' });
    }

      if(password === user.password){
      return res.json("exist");
    } else {
      return res.json("notexist");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error during bcrypt comparison:', error);
  }
};
