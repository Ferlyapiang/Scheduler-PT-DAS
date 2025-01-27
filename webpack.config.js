const path = require('path');  
  
module.exports = {  
  entry: './src/index.js', // Path ke file entry Anda  
  output: {  
    filename: 'bundle.js',  
    path: path.resolve(__dirname, 'dist'), // Direktori output  
  },  
  mode: 'development', // Ganti dengan 'production' untuk build produksi  
};  
