const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const stream = fs.createWriteStream('tarefas.csv');
const numRecords = 1000000;
const now = new Date().toISOString();

for (let i = 0; i < numRecords; i++) {
    const uuid = uuidv4();
    const titulo = `Tarefa ${i}`;
    const dia_atividade = `2024-01-01`;
    const importante = Math.random() < 0.5;
    stream.write(`${uuid},${titulo},${dia_atividade},${importante},${now},${now}\n`);
}

stream.end();
