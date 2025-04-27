const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/travelPlanner', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ Connection error:', err));

// Models
const Booking = require('./models/Booking');
const Contact = require('./models/Contact'); 
const Query = require('./models/Query');

app.post('/booking', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send({ message: '✅ Booking Confirmed!', booking });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

app.get('/bookings', async (req, res) => {
    const bookings = await Booking.find();
    res.send(bookings);
});


app.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send({ message: '📩 Message Received!' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


app.get('/contacts', async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

app.post('/query', async (req, res) => {
    try {
        const query = new Query(req.body);
        await query.save();  // Corrected here from contact.save() to query.save()
        res.status(201).send({ message: '📩 Query Received!', query });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});


app.get('/queries', async (req, res) => {
    const queries = await Query.find();  // Corrected here from query.find() to Query.find()
    res.send(queries);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
