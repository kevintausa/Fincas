const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loteSchema = new Schema({
    nombre: String,
    area: Number,
    active: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at' } });


const Lote = mongoose.model('Lote', loteSchema)

module.exports = Lote