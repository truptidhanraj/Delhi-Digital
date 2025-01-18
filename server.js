const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let invoices = [];
let id = 1;

// POST /invoices: To create a new invoice
app.post('/invoices', (req, res) => {
  const invoice = { id: id++, ...req.body };
  invoices.push(invoice);
  res.json(invoice);
});

// GET /invoices: To fetch all invoices
app.get('/invoices', (req, res) => {
  res.json(invoices);
});

// GET /invoices/:id: To fetch an invoice by ID
app.get('/invoices/:id', (req, res) => {
  const invoice = invoices.find((invoice) => invoice.id === parseInt(req.params.id));
  if (!invoice) {
    res.status(404).json({ message: 'Invoice not found' });
  } else {
    res.json(invoice);
  }
});

// PUT /invoices/:id: To update an invoice by ID
app.put('/invoices/:id', (req, res) => {
  const index = invoices.findIndex((invoice) => invoice.id === parseInt(req.params.id));
  if (index !== -1) {
    invoices[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(invoices[index]);
  } else {
    res.status(404).json({ message: 'Invoice not found' });
  }
});

// DELETE /invoices/:id: To delete an invoice by ID
app.delete('/invoices/:id', (req, res) => {
  const index = invoices.findIndex((invoice) => invoice.id === parseInt(req.params.id));
  if (index !== -1) {
    invoices.splice(index, 1);
    res.json({ message: 'Invoice deleted successfully' });
  } else {
    res.status(404).json({ message: 'Invoice not found' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});