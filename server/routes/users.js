const express = require('express');
const UserService = require('../utils/UserService');

const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = UserService.GetUser(id);
    res.json(user);
});

router.get('/', (req, res) => {
    const users = UserService.GetUsers();
    res.json(users);
});

router.post('/', (req, res) => {
    const newUser = req.body;
    UserService.RegisterUser(newUser);
    res.json({ msg: 'new user registered' });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const editedUser = req.body;
    UserService.UpdateUser(id, editedUser);
    res.json({ msg: `user ${id} edited` });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const users = UserService.DeleteUser(id);
    res.json({ msg: `user ${id} deleted`});
});

module.exports = router;