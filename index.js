const express = require('express');  
const app = express();  
const port = 3000;  
  
// Middleware untuk melayani file statis  
app.use(express.static('public')); // Pastikan folder 'public' berisi file HTML Anda  
  
app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/public/index.html'); // Ganti dengan path ke file HTML Anda  
});  
  
app.listen(port, () => {  
  console.log(`Server berjalan di http://localhost:${port}`);  
});  
