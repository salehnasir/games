
import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.use(express.json());

app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})