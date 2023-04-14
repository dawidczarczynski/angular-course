function getUserAddress(user) {
    return `${user.person.name}\n${user.address.street}\n${user.address.city}, ${user.address.zip}`;
}

const testUser = {
    id: 1,
    person: {
        name: 'John Doe',
        age: 30,
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345',
    },
};

console.log(getUserAddress(testUser));
