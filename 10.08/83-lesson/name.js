const users = [
    {name: 'John', isAdmin: true},
    {name: 'Anna', isAdmin: false},
    {name: 'Nastya', isAdmin: false},
    {name: 'Aleksey', isAdmin: true},
];
let UsersAdmin = 0;
for (const user of users) {
    if (!user.isAdmin) {
        UsersAdmin++;
    }
}
console.log(`Number of simple users: ${UsersAdmin}`);