'use strict';
// Offline companion only. Never reads/writes installed game or Stream Deck profiles.
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'docs/flight/CONTROL_BINDINGS.json'),'utf8'));
const out=process.argv[2];if(!out)throw Error('Pass a delivery directory outside the repository.');
const destination=path.resolve(out);
assert(destination.toLowerCase()!==root.toLowerCase()&&!destination.toLowerCase().startsWith(root.toLowerCase()+path.sep),'Use a delivery directory outside Git.');
assert.equal(data.entries.length,54);assert.equal(new Set(data.entries.map(e=>e.slot)).size,54);
for(const e of data.entries){assert(e.slot>=0&&e.slot<=55&&![18,19].includes(e.slot));assert.equal(e.row,Math.floor(e.slot/8)+1);assert.equal(e.column,e.slot%8+1);}
const template=fs.readFileSync(path.join(__dirname,'setup-plan.html'),'utf8');
assert.equal(template.split('/*PLAN_DATA*/').length,2);
fs.mkdirSync(destination,{recursive:true});
fs.writeFileSync(path.join(destination,'Einrichtungsplan.html'),template.replace('/*PLAN_DATA*/',JSON.stringify(data).replace(/</g,'\\u003c')));
const csvCell=value=>'"'+String(value??'').replace(/"/g,'""')+'"';
const rows=[['Slot','Zeile','Spalte','Funktion','Gruppe','Status','Tastatur laut Datei','Maus laut Datei','Actionmap','Befehl','Aktivierung','Hinweis'],
 ...data.entries.map(e=>[e.slot,e.row,e.column,e.label,e.sets.join(' / '),e.category,e.keyboard,e.mouse,e.map,e.action,e.activation,e.note])];
fs.writeFileSync(path.join(destination,'Belegungsplan.csv'),'\ufeff'+rows.map(r=>r.map(csvCell).join(';')).join('\r\n')+'\r\n');
console.log('PASS: 54 unique slots, unchanged positions; offline HTML and UTF-8 CSV generated.');
