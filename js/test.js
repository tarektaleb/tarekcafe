const express = require("express");
const xlsx = require("xlsx");
const app = express();
const wb = xlsx.readFile('excel.xlsx')
const ws = wb.Sheets['Sheet1']
app.get("/tarek", function(req, res) {
    const test = xlsx.utils.sheet_to_json(ws)
    res.send(test);
})

app.listen(3000);