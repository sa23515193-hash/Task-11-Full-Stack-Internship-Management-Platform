// Reference-only Express API sample. This is not connected to the frontend.
// No database is configured or required to run the static application.
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const records = []; // In-memory placeholder: resets whenever the process restarts.
app.get('/api/health', (_req,res)=>res.json({status:'ok', note:'Reference API sample only'}));
app.get('/api/records', (_req,res)=>res.json({data:records}));
app.post('/api/records', (req,res)=>{
  if (!req.body || !Object.keys(req.body).length) return res.status(400).json({error:'A record payload is required'});
  const record={id:Date.now(), ...req.body, createdAt:new Date().toISOString()};
  records.unshift(record);
  res.status(201).json({data:record});
});
app.patch('/api/records/:id', (req,res)=>{
  const record=records.find(x=>x.id===Number(req.params.id));
  if(!record) return res.status(404).json({error:'Record not found'});
  Object.assign(record,req.body); res.json({data:record});
});
app.delete('/api/records/:id', (req,res)=>{
  const i=records.findIndex(x=>x.id===Number(req.params.id));
  if(i<0) return res.status(404).json({error:'Record not found'});
  records.splice(i,1); res.status(204).end();
});
// Intentionally not listening by default. This file is included as backend sample code only.
