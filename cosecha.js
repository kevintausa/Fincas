const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosechaSchema = new Schema({
    'peso_de_cereza_(kg)' : Number,
    tipo_de_cosecha: String,
    fecha_de_cosecha: Date,
    siembra: [{ type: Schema.Types.ObjectId, ref: 'Siembra' }],
}, { timestamps: { createdAt: 'created_at' } });


const CosechaSchema = mongoose.model('Cosecha', cosechaSchema)

module.exports = CosechaSchema