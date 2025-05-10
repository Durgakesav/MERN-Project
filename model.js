const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://durgakesavtipparaju:MongoDB2005@cluster0.cmulghn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB connection error:', err.message));

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Name', nameSchema);
