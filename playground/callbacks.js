const getUser = (id, callback) => {
    const users = [
        {
            id: 1,
            name: 'Charlie'
        },
        {
            id: 2,
            name: 'Andrew'
        }
    ];
    const user = users.find(u => u.id === id);
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(1, (user) => {
    console.log('User found: ', user);
});