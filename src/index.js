const express = require('express');  
const path = require('path');  
const app = express();  
const port = process.env.PORT || 3000;  
  
// Menyajikan file statis dari folder public  
app.use(express.static(path.join(__dirname, '../public')));  
  
// Menyajikan file index.html sebagai halaman utama  
app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname, '../public/index.html'));  
});  
  
// Menangani rute yang tidak ditemukan  
app.use((req, res) => {  
    res.status(404).send('404: Halaman tidak ditemukan');  
});  
  
// Menjalankan server  
app.listen(port, () => {  
    console.log(`Server is running at http://localhost:${port}`);  
});  
