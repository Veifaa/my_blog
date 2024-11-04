import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, '../src/client')));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../src/client/page/main.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
