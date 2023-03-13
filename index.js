const express = require ('express')

const app = express()

port = 2900

app.get('/' , (req ,res) => {

    res.send('Wassup Nigga !')


}
);

app.listen(port , () =>{
    console.log(`Example app lisetening at http://localhost: ${port}`);
}
);
