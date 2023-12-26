// import express  from "express";
// import {login} from '../controllers/auth.js';

// const router = express.Router();

// router.post('/login',login);

// export default router;

import express from "express";
import { login,forgotPassword,resetPassword } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', (req, res) => {
    const { email } = req.body;
    if (!email || !email.endsWith('@gmail.com')) {
        return res.status(400).send('Invalid email domain. Only Gmail accounts are allowed.');
    }
    // Proceed to the login controller if the email is valid
    login(req, res);
});
router.post('/forgot-password', forgotPassword);

// Reset password route
router.post('/reset-password/:token', resetPassword);

export default router;
