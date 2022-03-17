const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// const dbURI = 'mongodb://myuser:test1234@localhost:27017/mydb?retryWrites=true&w=majority';
// // const dbURI = 'mongodb://myuser:test1234@localhost:27071/mydb?retryWrites=true&w=majority';
// mongoose.connect(dbURI)
// // mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => {
//         console.log('connected to db!!', result);
//     })
//     .catch(err => {
//         console.error(err);
//     });

mongoose.connect('mongodb://myuser:test1234@localhost:27017/admin?retryWrites=true&w=majority', {
    dbName: 'mydb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(result => {
        console.log(result);
        console.log('connected to db');

        app.listen(3000, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('server is listening');
        });
    })
    .catch(err => {
        console.log('error occured');
        console.error(err)
    });

// save
app.get('/blogs/add', (req, res) => {
    console.log('req', req);
    console.log('req.query', req.query);

    const blog = new Blog({
        title: req.query.title,
        content: req.query.content
    });

    blog.save()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.error(err);
        })
});

// find
app.get('/blogs', (req, res) => {
    Blog.find()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.error(err);
        });
})

// findById
app.get('/blogs/:id', (req, res) => {
    // Blog.findById(req.params.id)
    //     .then(result => {
    //         console.log(result);
    //         res.send(result);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    Blog.findOne({_id: req.params.id})
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.error(err);
        });
});

// update
app.get('/blogs/:id/update', (req, res) => {
    // Blog.findByIdAndUpdate(req.params.id, { $set: { title: 'updated' } })
    //     .then(result => {
    //         console.log('update ok');
    //         res.send('update ok');
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         console.error('update error');
    //     });

    Blog.findOneAndUpdate({_id: req.params.id}, { $set: { title: 'updated2' } })
        .then(result => {
            console.log('update ok');
            res.send('update ok');
        })
        .catch(err => {
            console.error(err);
            console.error('update error');
        });
});

// delete
app.get('/blogs/:id/delete', async (req, res) => {
    // Blog.findByIdAndRemove(req.params.id)
    // .then(result => {
    //     console.log('delete ok');
    //     res.send('delete ok');
    // })
    // .catch(err => {
    //     console.error(err);
    //     console.error('delete error');
    // });

    Blog.findOneAndRemove({ _id: req.params.id })
        .then(result => {
            console.log('delete ok');
            res.send('delete ok');
        })
        .catch(err => {
            console.error(err);
            console.error('delete error');
        });
});
