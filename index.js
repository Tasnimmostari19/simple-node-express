const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


// const port =3000;
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('wow!!!Hello from second node i am learning node...');
});



const users = [
    { id: 0, name: 'shabana', email: 'shabana@gami.com', phone: '017888888' },
    { id: 1, name: 'shabnur', email: 'shabnur@gami.com', phone: '01788888809' },
    { id: 2, name: 'shuchirita', email: 'shuchirita@gami.com', phone: '01788886688' },
    { id: 3, name: 'soniya', email: 'soniya@gami.com', phone: '01790888888' },
    { id: 4, name: 'shushmita', email: 'shushmita@gami.com', phone: '01787688888' },
    { id: 5, name: 'srabonti', email: 'srabonti@gami.com', phone: '017843288888' },
    { id: 6, name: 'shabana', email: 'shabana@gami.com', phone: '017887658888' },
    { id: 7, name: 'shabana', email: 'shabana@gami.com', phone: '01784388888' },
    { id: 8, name: 'shabana', email: 'shabana@gami.com', phone: '017882318888' },
    { id: 9, name: 'shabana', email: 'shabana@gami.com', phone: '01776888888' },
]


app.get('/users', (req, res) => {
    const search = req.query.search;

    //use quary parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    res.send({ users })

});
//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})



//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    console.log(req.params.id);
})




app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple']);
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('mango mango mango')
})


app.listen(port, () => {
    console.log('listening to port', port);
})