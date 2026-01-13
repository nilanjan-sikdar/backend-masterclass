import express from 'express';
import {PORT} from './config/env.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("welcome to backend masterclass!");
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

// error middleware
app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`server is running on http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;