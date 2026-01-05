import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("welcome to backend masterclass!");
})

app.listen(8000, () => {
    console.log("server is running on http://localhost:8000");
})

export default app;