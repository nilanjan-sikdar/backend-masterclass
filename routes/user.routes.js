import {Router} from "express";

const userRouter = Router();

// Get all users
userRouter.get('/', (req, res) => res.send({title: 'Get All Users'}));
// Get user details by ID
userRouter.get('/:id', (req, res) => res.send({title: 'Get User Details By ID'}));
// Create new user
userRouter.post('/:id', (req, res) => res.send({title:'Create new User'}));
// Update user details
userRouter.put('/:id', (req, res) => res.send({title:'Update User Details'}));
// Delete user details
userRouter.delete('/:id', (req, res) => res.send({title:'Delete User Details'}));

export default userRouter;