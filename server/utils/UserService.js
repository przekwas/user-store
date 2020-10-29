const fs = require('fs');
const path = require('path');
let userPath = path.join(__dirname, '../data/users.json');
let users = { nextid: 1 };

if(fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath));
}

let getUsers = () => {
    return Object.assign({}, users);
}

let getUser = id => {
    return Object.assign({}, users[id]);
}

let createUser = (user) => {
    users[users.nextid++] = user;
    writeUsers();
};

let updateUser = (id, user) => {
    users[id] = user;
    writeUsers();
}

let deleteUSer = id => {
    delete users[id];
    writeUsers();
}

let writeUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users));
};

module.exports = {
    RegisterUser: createUser,
    DeleteUser: deleteUSer,
    GetUsers: getUsers,
    GetUser: getUser,
    UpdateUser: updateUser
}