const storeState = {
  customers: [
    { id: 'raju', name: 'Raju Bhai', balance: 640, active: true, last: '2kg atta • 1 butter' },
    { id: 'sharma', name: 'Sharma Aunty', balance: 420, active: true, last: '3 Parle-G • tea' },
    { id: 'vikas', name: 'Vikas', balance: 180, active: false, last: '1 sugar bag' },
    { id: 'mohan', name: 'Mohan Ji', balance: 310, active: true, last: '2 rice sacks' }
  ],
  inventory: [
    { item: 'Chakki Atta', unit: 'kg', stock: 38, goal: 55, type: 'loose' },
    { item: 'Amul Butter 100g', unit: 'pack', stock: 12, goal: 24, type: 'dairy' },
    { item: 'Maggi Masala', unit: 'box', stock: 4, goal: 18, type: 'critical' },
    { item: 'Tata Salt', unit: 'pack', stock: 22, goal: 30, type: 'stable' },
    { item: 'Surf Excel', unit: 'pack', stock: 9, goal: 16, type: 'stable' },
    { item: 'Parle-G', unit: 'pack', stock: 26, goal: 40, type: 'stable' }
  ]
};

const billItemsEl = document.getElementById('billItems');
const subtotalEl = document.getElementById('subtotalValue');
const gstEl = document.getElementById('gstValue');
const totalEl = document.getElementById('totalValue');
const customerListEl = document.getElementById('customerList');
const inventoryListEl = document.getElementById('inventoryList');
const transcriptEl = document.getElementById('liveTranscript');
const jsonOutputEl = document.getElementById('jsonOutput');
const micButton = document.getElementById('micButton');

const defaultBill = [
  { name: 'Chakki Fresh Atta (Loose)', qty: 2, unit: 'kg', price: 44, gst: 0 },
  { name: 'Amul Butter 100g', qty: 1, unit: 'pack', price: 62, gst: 12 },
  { name: 'Maggi Masala', qty: 5, unit: 'box', price: 28, gst: 5 }
];

function calculateBill(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = items.reduce((sum, item) => sum + ((item.price * item.qty * item.gst) / 100), 0);
  return { subtotal, gst, total: subtotal + gst };
}

function renderBill(items) {
  billItemsEl.innerHTML = '';
  items.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'bill-item';
    row.innerHTML = `
      <div class="bill-name">
        <strong>${item.name}</strong>
        <span class="meta">${item.qty}${item.unit} • GST ${item.gst}%</span>
      </div>
      <span class="qty-badge">x${item.qty}</span>
      <span class="price">₹${(item.price * item.qty).toFixed(0)}</span>
    `;
    billItemsEl.appendChild(row);
  });

  const totals = calculateBill(items);
  subtotalEl.textContent = `₹${totals.subtotal}`;
  gstEl.textContent = `₹${totals.gst.toFixed(0)}`;
  totalEl.textContent = `₹${totals.total.toFixed(0)}`;
}

function renderCustomers() {
  customerListEl.innerHTML = '';

  storeState.customers.forEach((customer) => {
    const card = document.createElement('div');
    card.className = `customer-card ${customer.active ? 'active' : ''}`;
    card.innerHTML = `
      <div class="customer-head">
        <strong>${customer.name}</strong>
        <span class="customer-balance">₹${customer.balance}</span>
      </div>
      <div class="customer-meta">
        <span>Last order</span>
        <span>${customer.last}</span>
      </div>
      <div class="customer-actions">
        <button type="button" class="send-button">Send WhatsApp Bill</button>
      </div>
    `;
    customerListEl.appendChild(card);
  });
}

function renderInventory() {
  inventoryListEl.innerHTML = '';

  storeState.inventory.forEach((entry) => {
    const percent = Math.max(0, Math.min(100, (entry.stock / entry.goal) * 100));
    const row = document.createElement('div');
    row.className = `inventory-row ${entry.type === 'critical' || percent < 30 ? 'critical' : ''}`;
    row.innerHTML = `
      <div class="inventory-head">
        <span>${entry.item}</span>
        <span>${entry.stock} ${entry.unit}</span>
      </div>
      <div class="stock-bar">
        <div class="stock-fill" style="width:${percent}%"></div>
      </div>
      <div class="inventory-foot">
        <span>${Math.round(percent)}% left</span>
        <span>${entry.type === 'critical' ? 'Reorder now' : 'Healthy'}</span>
      </div>
    `;
    inventoryListEl.appendChild(row);
  });
}

function renderJson(data) {
  jsonOutputEl.textContent = JSON.stringify(data, null, 2);
}

function updateFromVoiceInput(rawText) {
  const text = rawText.toLowerCase();
  let parsed = {
    spoken_transcript: rawText,
    customer_transaction: {
      customer_name: 'Raju Bhai',
      transaction_type: 'UDHAAR',
      items: [],
      bill_total: 0,
      whatsapp_receipt_message: 'Namaste Raju Bhai, aapke khate mein aaj ₹150 ka uddhar juda hai.'
    },
    inventory_adjustments: [],
    voice_confirmation_reply: 'Raju bhai ke khate mein 150 rupaye jud gaye. Maggi ka stock kam hai, kya distributor ko order bhejoon?'
  };

  const customerMatch = Array.isArray(storeState.customers)
    ? storeState.customers.find((customer) => text.includes(customer.name.toLowerCase().replace(/\s+/g, '')) || text.includes(customer.name.toLowerCase().split(' ')[0]))
    : null;

  const items = [
    { name: 'Chakki Fresh Atta (Loose)', qty: 2, unit: 'kg', price: 44, gst: 0 },
    { name: 'Amul Butter 100g', qty: 1, unit: 'pack', price: 62, gst: 12 },
    { name: 'Maggi Masala', qty: 5, unit: 'box', price: 28, gst: 5 }
  ];

  if (text.includes('maggi') || text.includes('godown')) {
    const maggi = storeState.inventory.find((entry) => entry.item.toLowerCase().includes('maggi'));
    if (maggi) {
      maggi.stock = Math.max(0, maggi.stock - 5);
      parsed.inventory_adjustments.push({
        sku: maggi.item,
        change: -5,
        remaining_stock: maggi.stock,
        low_stock_alert: maggi.stock <= 5
      });
      parsed.voice_confirmation_reply = 'Maggi ka stock critical hai. Distributor ko order bhejne ke liye ek tap kijiye.';
    }
  }

  const customer = customerMatch || storeState.customers[0];
  parsed.customer_transaction.customer_name = customer.name;
  parsed.customer_transaction.items = items;
  const totals = calculateBill(items);
  parsed.customer_transaction.bill_total = totals.total;
  parsed.customer_transaction.whatsapp_receipt_message = `Namaste ${customer.name}, aapke khate mein aaj ₹${totals.total} ka udhaar jude hai. Kul baki: ₹${customer.balance + totals.total}.`;
  customer.balance += totals.total;

  renderBill(items);
  renderCustomers();
  renderInventory();
  renderJson(parsed);

  transcriptEl.textContent = `"${rawText}"`;

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(
      `Raju bhai ke khate mein ${totals.total} rupaye likh diye gaye. Maggi ka stock kam ho gaya hai.`
    );
    utterance.lang = 'hi-IN';
    utterance.rate = 0.94;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  return parsed;
}

function setPreset(text) {
  const chips = document.querySelectorAll('.chip');
  chips.forEach((chip) => chip.classList.toggle('active', chip.dataset.demo === text));
  updateFromVoiceInput(text);
}

document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => setPreset(chip.dataset.demo));
});

micButton.addEventListener('click', () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    const fallback = 'Raju bhai ke khate mein do kilo aata, ek Amul butter aur godown mein Maggi ke paanch box kam ho gaye.';
    updateFromVoiceInput(fallback);
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'hi-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micButton.classList.add('listening');
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    updateFromVoiceInput(transcript);
  };

  recognition.onend = () => {
    micButton.classList.remove('listening');
  };

  recognition.onerror = () => {
    micButton.classList.remove('listening');
    updateFromVoiceInput('Raju bhai ke khate mein do kilo aata, ek Amul butter, aur godown mein Maggi ke paanch box kam ho gaye.');
  };
});

renderBill(defaultBill);
renderCustomers();
renderInventory();
renderJson({
  spoken_transcript: 'Raju bhai ke khate mein do kilo aata, ek Amul butter 100 gram, aur godown mein Maggi ke paanch box kam ho gaye.',
  customer_transaction: {
    customer_name: 'Raju Bhai',
    transaction_type: 'UDHAAR',
    items: [
      { sku: 'Chakki Fresh Atta (Loose)', qty: 2, unit: 'kg', unit_price: 44, gst_rate: '0%', total: 88 },
      { sku: 'Amul Butter 100g', qty: 1, unit: 'pack', unit_price: 62, gst_rate: '12%', total: 62 }
    ],
    bill_total: 150,
    whatsapp_receipt_message: 'Namaste Raju Bhai, aapke khate mein aaj ₹150 juda hai. Kul baki: ₹640.'
  },
  inventory_adjustments: [
    { sku: 'Maggi Masala', change: -5, remaining_stock: 1, low_stock_alert: true }
  ],
  voice_confirmation_reply: 'Raju bhai ke khate mein 150 rupaye jud gaye. Maggi ka stock kam hai, kya distributor ko order bhejoon?'
});
