require('dotenv').config();
require('dotenv').config();
require('node:dns').setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(e => console.error('DB error:', e.message));

const Entry = mongoose.model('Entry', new mongoose.Schema({
  date: { type: String, required: true },   // YYYY-MM-DD
  km: { type: Number, required: true },     // evlo km oodirukku
  litres: { type: Number, required: true }, // evlo oil
  amount: { type: Number, default: 0 },     // evlo rupees (optional)
  note: { type: String, default: '' }
}, { timestamps: true }));

app.get('/api/entries', async (_, res) => res.json(await Entry.find().sort({ date: -1, createdAt: -1 })));
app.post('/api/entries', async (req, res) => {
  try { res.json(await Entry.create(req.body)); }
  catch (e) { res.status(400).json({ error: e.message }); }
});
app.delete('/api/entries/:id', async (req, res) => { await Entry.findByIdAndDelete(req.params.id); res.json({ ok: true }); });

app.listen(process.env.PORT || 3000, () => console.log('Open http://localhost:' + (process.env.PORT || 3000)));
