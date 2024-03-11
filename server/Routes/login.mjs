import express from 'express'
import { generateToken, generateResponse } from '../Utils/commonUtils.mjs';

const loginRouter = express.Router();

loginRouter.post('/authenticate', (req, res) => {
    const body = req?.body;
    if (body.username === "Sairam") {
        let userSessionObject = {
            userName: body.name,
            userToken: generateToken()
        }
        res.send(generateResponse(userSessionObject, 200, "User Authenticated Successfully"));
    } else {
        res.send(generateResponse({}, 500, "User Authentication Failed"));
    }
});

export default loginRouter;