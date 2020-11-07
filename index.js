const express = require('express');
const app = express();

app.get('api/v1/demo', (req,res) => {
    res.send('Done')
})

app.listen(3000, ()=>{
    console.log('Listing on port 3000');
});