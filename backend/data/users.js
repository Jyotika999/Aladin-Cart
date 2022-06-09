import bcrypt from 'bcryptjs'

const users= [
    {
        name: 'Admin',
        email: 'abc@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jamun',
        email: 'jamunnpm@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jake',
        email: 'jake@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users