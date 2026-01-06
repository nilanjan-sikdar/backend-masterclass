import {Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get All Subscriptions'}));
subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get Subscription Details By ID'}));
subscriptionRouter.post('/:id', (req, res) => res.send({title: 'Create New Subscription'}));
subscriptionRouter.put('/:id', (req, res) => res.send({title: 'Update Subscription Details'}));
subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'Delete Subscription'}));
subscriptionRouter.get('/users/:id', (req, res) => res.send({title: 'Get All User Subscriptions'}));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'Cancel Subscription'}));
subscriptionRouter.put('/upcoming-renewals', (req, res) => res.send({title: 'Get Upcoming Renewals'}));

export default subscriptionRouter;