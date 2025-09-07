// Vendor & Agent Billing Platform Application State
class VendorPlatformState {
  constructor() {
    this.currentUser = null;
    this.currentRole = null;
    this.currentVendor = null;
    
    // Load data from provided JSON
    this.vendorData = {
      todaysSales: 45750,
      thisMonthSales: 1287500,
      totalProducts: 1247,
      activeAgents: 5,
      lowStockItems: 23,
      pendingOrders: 8,
      profitMargin: 28.5,
      transactionsToday: 45,
      avgTicketSize: 1016
    };
    
    this.products = [
      {
        id: "P001",
        name: "Samsung Galaxy A54 5G",
        sku: "SAMGA54128",
        category: "Electronics",
        subcategory: "Smartphones",
        costPrice: 28000,
        sellingPrice: 35000,
        mrp: 37999,
        stock: 15,
        minStock: 5,
        hsn: "85171200",
        taxRate: 18,
        cgst: 9,
        sgst: 9,
        barcode: "8901234567890",
        supplier: "Samsung India",
        lastPurchaseDate: "2025-08-15",
        expiryDate: null,
        description: "5G Smartphone with 128GB Storage, 6GB RAM",
        image: "📱",
        status: "active"
      },
      {
        id: "P002", 
        name: "Basmati Rice Premium 5kg",
        sku: "RICEBAS5K",
        category: "Groceries",
        subcategory: "Rice & Grains",
        costPrice: 380,
        sellingPrice: 450,
        mrp: 480,
        stock: 200,
        minStock: 50,
        hsn: "10063000",
        taxRate: 5,
        cgst: 2.5,
        sgst: 2.5,
        barcode: "8901234567891",
        supplier: "Grain Suppliers Ltd",
        lastPurchaseDate: "2025-09-01",
        expiryDate: "2026-09-01",
        description: "Premium quality aged basmati rice",
        image: "🌾",
        status: "active"
      },
      {
        id: "P003",
        name: "Nike Air Max Running Shoes",
        sku: "NIKEAM42",
        category: "Footwear", 
        subcategory: "Sports Shoes",
        costPrice: 6800,
        sellingPrice: 8500,
        mrp: 9999,
        stock: 8,
        minStock: 3,
        hsn: "64039900",
        taxRate: 18,
        cgst: 9,
        sgst: 9,
        barcode: "8901234567892",
        supplier: "Nike India",
        lastPurchaseDate: "2025-08-20",
        expiryDate: null,
        description: "Men's running shoes size 8-10 available",
        image: "👟",
        status: "active"
      },
      {
        id: "P004",
        name: "Coca Cola 500ml",
        sku: "CC500ML",
        category: "Beverages",
        subcategory: "Soft Drinks",
        costPrice: 18,
        sellingPrice: 25,
        mrp: 30,
        stock: 150,
        minStock: 50,
        hsn: "22029010",
        taxRate: 12,
        cgst: 6,
        sgst: 6,
        barcode: "8901234567893",
        supplier: "Coca Cola India",
        lastPurchaseDate: "2025-09-01",
        expiryDate: "2026-03-01",
        description: "Refreshing cola drink 500ml bottle",
        image: "🥤",
        status: "active"
      },
      {
        id: "P005",
        name: "Dell Laptop Inspiron 15",
        sku: "DELLIN15",
        category: "Electronics",
        subcategory: "Laptops",
        costPrice: 45000,
        sellingPrice: 55000,
        mrp: 58999,
        stock: 5,
        minStock: 2,
        hsn: "84713000",
        taxRate: 18,
        cgst: 9,
        sgst: 9,
        barcode: "8901234567894",
        supplier: "Dell India",
        lastPurchaseDate: "2025-08-20",
        expiryDate: null,
        description: "15.6 inch laptop with Intel i5 processor",
        image: "💻",
        status: "active"
      }
    ];
    
    this.billingAgents = [
      {
        id: "BA001",
        name: "Rajesh Kumar",
        email: "rajesh@techmart.com",
        phone: "+91-9876543210",
        agentCode: "RK2025",
        pin: "1234",
        joinDate: "2024-06-15",
        status: "active",
        currentShift: "morning",
        todaysSales: 18500,
        thisMonthSales: 485000,
        transactionsToday: 22,
        averageTicketSize: 841,
        performance: "excellent",
        rating: 4.8,
        permissions: ["billing", "returns", "discounts"],
        lastLogin: "2025-09-06T21:30:00Z"
      },
      {
        id: "BA002",
        name: "Priya Sharma", 
        email: "priya@techmart.com",
        phone: "+91-8765432109",
        agentCode: "PS2025",
        pin: "5678",
        joinDate: "2024-08-01",
        status: "active",
        currentShift: "evening",
        todaysSales: 15750,
        thisMonthSales: 395000,
        transactionsToday: 18,
        averageTicketSize: 875,
        performance: "good",
        rating: 4.6,
        permissions: ["billing", "returns"],
        lastLogin: "2025-09-06T19:15:00Z"
      },
      {
        id: "BA003",
        name: "Suresh Patel", 
        email: "suresh@techmart.com",
        phone: "+91-7654321098",
        agentCode: "SP2025",
        pin: "9012",
        joinDate: "2024-05-01",
        status: "active",
        currentShift: "night",
        todaysSales: 11500,
        thisMonthSales: 407000,
        transactionsToday: 5,
        averageTicketSize: 2300,
        performance: "average",
        rating: 4.2,
        permissions: ["billing"],
        lastLogin: "2025-09-06T22:00:00Z"
      }
    ];
    
    this.recentTransactions = [
      {
        billNumber: "TM-2025-001547",
        date: "2025-09-06",
        time: "22:30",
        customerName: "Amit Singh",
        customerPhone: "+91-9988776655",
        agentName: "Rajesh Kumar",
        items: [
          {name: "Samsung Galaxy A54", qty: 1, price: 35000, total: 35000}
        ],
        subtotal: 35000,
        cgst: 3150,
        sgst: 3150,
        total: 41300,
        paymentMethod: "UPI",
        status: "completed"
      },
      {
        billNumber: "TM-2025-001546",
        date: "2025-09-06", 
        time: "21:45",
        customerName: "Sneha Patel",
        customerPhone: "+91-8877665544",
        agentName: "Priya Sharma",
        items: [
          {name: "Basmati Rice 5kg", qty: 2, price: 450, total: 900},
          {name: "Nike Air Max Shoes", qty: 1, price: 8500, total: 8500}
        ],
        subtotal: 9400,
        cgst: 812.5,
        sgst: 812.5,
        total: 11025,
        paymentMethod: "Cash",
        status: "completed"
      }
    ];
    
    this.salesAnalytics = {
      dailySales: [
        {date: "2025-09-01", sales: 42500},
        {date: "2025-09-02", sales: 38200},
        {date: "2025-09-03", sales: 44900},
        {date: "2025-09-04", sales: 39750},
        {date: "2025-09-05", sales: 47200},
        {date: "2025-09-06", sales: 45750}
      ],
      categoryPerformance: [
        {category: "Electronics", sales: 785000, profit: 157000, percentage: 61},
        {category: "Groceries", sales: 285000, profit: 42750, percentage: 22},
        {category: "Footwear", sales: 142000, profit: 28400, percentage: 11},
        {category: "Beverages", sales: 75500, profit: 15100, percentage: 6}
      ],
      paymentMethods: {
        UPI: 45,
        Cash: 32, 
        Card: 18,
        Other: 5
      }
    };
    
    this.subscriptionInfo = {
      currentPlan: "Standard",
      planStartDate: "2024-06-15",
      planEndDate: "2025-06-15", 
      monthlyFee: 7999,
      nextBillingDate: "2025-10-15",
      paymentStatus: "current",
      usageStats: {
        agents: 5,
        maxAgents: 5,
        products: 1247,
        maxProducts: 5000,
        transactionsThisMonth: 1267,
        maxTransactions: 25000,
        storageUsed: "2.5GB",
        maxStorage: "5GB"
      },
      availableUpgrades: ["Premium Plan"]
    };
    
    // Agent-specific data
    this.cart = [];
    this.currentBillNumber = this.generateBillNumber();
    this.currentAgent = null;
    
    // Charts storage
    this.charts = {};
  }
  
  generateBillNumber() {
    const now = new Date();
    const dateStr = now.getFullYear().toString().substr(-2) + 
                   ('0' + (now.getMonth() + 1)).slice(-2) + 
                   ('0' + now.getDate()).slice(-2);
    return `TM-${dateStr}-${Math.floor(Math.random() * 10000).toString().padStart(6, '0')}`;
  }
}

// Global app instance
const app = new VendorPlatformState();

// Utility Functions
function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN');
}

function formatDateTime(date) {
  return new Date(date).toLocaleString('en-IN');
}

function showToast(message, type = 'info') {
  console.log(`Toast: ${message} (${type})`);
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 3000);
}

// Authentication Manager
class AuthManager {
  static login(role, credentials) {
    console.log('Login attempt:', role, credentials);
    
    if (role === 'vendor') {
      if (credentials.email === 'vendor@techmart.com' && credentials.password === 'vendor123') {
        app.currentUser = { name: 'Amit Kumar', email: credentials.email };
        app.currentRole = 'vendor';
        console.log('Vendor login successful');
        return true;
      }
    } else if (role === 'agent') {
      const agent = app.billingAgents.find(a => 
        a.agentCode === credentials.code && credentials.pin === a.pin
      );
      if (agent) {
        app.currentUser = { name: agent.name, code: agent.agentCode };
        app.currentRole = 'agent';
        app.currentAgent = agent;
        console.log('Agent login successful');
        return true;
      }
    }
    
    console.log('Login failed');
    return false;
  }

  static logout() {
    app.currentUser = null;
    app.currentRole = null;
    app.currentAgent = null;
    app.cart = [];
    PageManager.showPage('loginPage');
  }
}

// Page Manager
class PageManager {
  static showPage(pageId) {
    console.log('Showing page:', pageId);
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      console.log('Page shown successfully');
    } else {
      console.error('Page not found:', pageId);
    }
  }

  static showSection(sectionId) {
    console.log('Showing section:', sectionId);
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    
    const navBtn = document.querySelector(`[data-section="${sectionId.replace('Section', '')}"]`);
    if (navBtn) navBtn.classList.add('active');
  }
}

// Vendor Dashboard Manager
class VendorDashboardManager {
  static updateDashboard() {
    const elements = {
      'currentDate': formatDate(new Date()),
      'businessNameHeader': 'TechMart Electronics',
      'vendorUserName': app.currentUser ? app.currentUser.name : 'Shop Owner',
      'todaysSales': formatCurrency(app.vendorData.todaysSales),
      'monthSales': formatCurrency(app.vendorData.thisMonthSales),
      'totalProducts': app.vendorData.totalProducts.toLocaleString(),
      'activeAgents': app.vendorData.activeAgents,
      'profitMargin': app.vendorData.profitMargin + '%',
      'avgTicketSize': formatCurrency(app.vendorData.avgTicketSize)
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
    
    VendorDashboardManager.renderRecentTransactions();
  }
  
  static renderRecentTransactions() {
    const container = document.getElementById('recentTransactionsList');
    if (!container) return;
    
    container.innerHTML = app.recentTransactions.map(transaction => `
      <div class="transaction-item">
        <div class="transaction-info">
          <h5>${transaction.billNumber}</h5>
          <p>${transaction.customerName} • ${transaction.time} • ${transaction.agentName}</p>
        </div>
        <div class="transaction-amount">${formatCurrency(transaction.total)}</div>
      </div>
    `).join('');
  }

  static createSalesTrendChart() {
    const ctx = document.getElementById('salesTrendChart');
    if (!ctx) return;

    if (app.charts.salesTrendChart) {
      app.charts.salesTrendChart.destroy();
    }

    app.charts.salesTrendChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: app.salesAnalytics.dailySales.map(d => new Date(d.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })),
        datasets: [{
          label: 'Sales',
          data: app.salesAnalytics.dailySales.map(d => d.sales),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return formatCurrency(value);
              }
            }
          }
        }
      }
    });
  }

  static createCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    if (app.charts.categoryChart) {
      app.charts.categoryChart.destroy();
    }

    app.charts.categoryChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: app.salesAnalytics.categoryPerformance.map(c => c.category),
        datasets: [{
          data: app.salesAnalytics.categoryPerformance.map(c => c.percentage),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  static createPaymentMethodChart() {
    const ctx = document.getElementById('paymentMethodChart');
    if (!ctx) return;

    if (app.charts.paymentMethodChart) {
      app.charts.paymentMethodChart.destroy();
    }

    app.charts.paymentMethodChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(app.salesAnalytics.paymentMethods),
        datasets: [{
          label: 'Percentage',
          data: Object.values(app.salesAnalytics.paymentMethods),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 50,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  }
}

// Product Manager
class ProductManager {
  static renderProducts() {
    const tbody = document.querySelector('#productsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = app.products.map(product => `
      <tr>
        <td><input type="checkbox" class="product-checkbox" data-id="${product.id}"></td>
        <td>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="font-size: 24px;">${product.image}</div>
            <div>
              <strong>${product.name}</strong>
              <div style="font-size: 12px; color: var(--color-text-secondary);">
                SKU: ${product.sku} • ${product.category}
              </div>
              <div style="font-size: 11px; color: var(--color-text-secondary);">
                ${product.description}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div>
            <strong>Selling: ${formatCurrency(product.sellingPrice)}</strong>
            <div style="font-size: 12px; color: var(--color-text-secondary);">
              Cost: ${formatCurrency(product.costPrice)} • MRP: ${formatCurrency(product.mrp)}
            </div>
            <div style="font-size: 11px; color: var(--color-success);">
              Margin: ${(((product.sellingPrice - product.costPrice) / product.costPrice) * 100).toFixed(1)}%
            </div>
          </div>
        </td>
        <td>
          <div>
            <span class="status ${product.stock <= product.minStock ? 'status--warning' : 'status--success'}">
              ${product.stock} units
            </span>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
              Min: ${product.minStock} units
            </div>
          </div>
        </td>
        <td>
          <div>
            <strong>Tax: ${product.taxRate}%</strong>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
              CGST: ${product.cgst}% + SGST: ${product.sgst}%
            </div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
              HSN: ${product.hsn}
            </div>
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            <button class="btn btn--sm btn--secondary" onclick="ProductManager.editProduct('${product.id}')">
              Edit
            </button>
            <button class="btn btn--sm btn--outline" onclick="ProductManager.viewProduct('${product.id}')">
              View
            </button>
            <button class="btn btn--sm btn--error" onclick="ProductManager.deleteProduct('${product.id}')">
              Delete
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }
  
  static addProduct() {
    const modal = document.getElementById('addProductModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }
  
  static editProduct(productId) {
    const product = app.products.find(p => p.id === productId);
    if (product) {
      showToast(`Edit functionality for ${product.name}`, 'info');
    }
  }
  
  static viewProduct(productId) {
    const product = app.products.find(p => p.id === productId);
    if (product) {
      showToast(`View details for ${product.name}`, 'info');
    }
  }
  
  static deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
      const index = app.products.findIndex(p => p.id === productId);
      if (index !== -1) {
        const product = app.products[index];
        app.products.splice(index, 1);
        ProductManager.renderProducts();
        showToast(`${product.name} deleted successfully`, 'success');
      }
    }
  }
  
  static importProducts() {
    showToast('Import CSV functionality would be available here', 'info');
  }
  
  static exportProducts() {
    showToast('Export functionality would be available here', 'info');
  }
}

// Agent Manager
class AgentManager {
  static renderAgents() {
    const grid = document.getElementById('agentsGrid');
    if (!grid) return;
    
    grid.innerHTML = app.billingAgents.map(agent => `
      <div class="agent-card">
        <div class="agent-header">
          <div>
            <h4 class="agent-name">${agent.name}</h4>
            <p class="agent-code">Code: ${agent.agentCode}</p>
          </div>
          <span class="status status--${agent.status === 'active' ? 'success' : 'error'}">
            ${agent.status.toUpperCase()}
          </span>
        </div>
        
        <div class="agent-stats-grid">
          <div class="agent-stat">
            <div class="agent-stat-value">${formatCurrency(agent.todaysSales)}</div>
            <div class="agent-stat-label">Today's Sales</div>
          </div>
          <div class="agent-stat">
            <div class="agent-stat-value">${agent.transactionsToday}</div>
            <div class="agent-stat-label">Transactions</div>
          </div>
          <div class="agent-stat">
            <div class="agent-stat-value">${formatCurrency(agent.averageTicketSize)}</div>
            <div class="agent-stat-label">Avg Ticket</div>
          </div>
          <div class="agent-stat">
            <div class="agent-stat-value">${agent.rating}/5</div>
            <div class="agent-stat-label">Rating</div>
          </div>
        </div>
        
        <div style="margin-bottom: 16px;">
          <strong>Contact:</strong> ${agent.phone}<br>
          <strong>Email:</strong> ${agent.email}<br>
          <strong>Joined:</strong> ${formatDate(agent.joinDate)}<br>
          <strong>Performance:</strong> <span class="status status--${agent.performance === 'excellent' ? 'success' : 'info'}">${agent.performance}</span>
        </div>
        
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm btn--secondary" onclick="AgentManager.editAgent('${agent.id}')">
            Edit
          </button>
          <button class="btn btn--sm btn--outline" onclick="AgentManager.viewPerformance('${agent.id}')">
            Performance
          </button>
          <button class="btn btn--sm ${agent.status === 'active' ? 'btn--warning' : 'btn--success'}" 
                  onclick="AgentManager.toggleStatus('${agent.id}')">
            ${agent.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      </div>
    `).join('');
  }
  
  static addAgent() {
    showToast('Add Agent functionality would be available here', 'info');
  }
  
  static editAgent(agentId) {
    const agent = app.billingAgents.find(a => a.id === agentId);
    if (agent) {
      showToast(`Edit functionality for ${agent.name}`, 'info');
    }
  }
  
  static viewPerformance(agentId) {
    const agent = app.billingAgents.find(a => a.id === agentId);
    if (agent) {
      showToast(`Performance details for ${agent.name}`, 'info');
    }
  }
  
  static toggleStatus(agentId) {
    const agent = app.billingAgents.find(a => a.id === agentId);
    if (agent) {
      agent.status = agent.status === 'active' ? 'inactive' : 'active';
      AgentManager.renderAgents();
      showToast(`${agent.name} ${agent.status === 'active' ? 'activated' : 'deactivated'}`, 'success');
    }
  }
  
  static manageShifts() {
    showToast('Shift management functionality would be available here', 'info');
  }
  
  static viewShiftSummary() {
    const modal = document.getElementById('shiftSummaryModal');
    const content = document.getElementById('shiftSummaryContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
      <div class="shift-summary-details" style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
          <span>Agent:</span>
          <strong>${app.currentAgent ? app.currentAgent.name : 'Current Agent'}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
          <span>Shift Start:</span>
          <strong>09:00 AM</strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
          <span>Current Time:</span>
          <strong>${new Date().toLocaleTimeString('en-IN', { hour12: true })}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-3); border-radius: 6px;">
          <span>Today's Sales:</span>
          <strong>${formatCurrency(app.currentAgent ? app.currentAgent.todaysSales : 18500)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
          <span>Transactions:</span>
          <strong>${app.currentAgent ? app.currentAgent.transactionsToday : 22}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-1); border-radius: 6px;">
          <span>Average Ticket:</span>
          <strong>${formatCurrency(app.currentAgent ? app.currentAgent.averageTicketSize : 841)}</strong>
        </div>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }
}

// Agent Billing Manager
class AgentBilling {
  static updateInterface() {
    const elements = {
      'agentBusinessName': 'TechMart Electronics',
      'agentName': app.currentAgent ? `Agent: ${app.currentAgent.name}` : 'Agent: Current User',
      'agentTodaySales': formatCurrency(app.currentAgent ? app.currentAgent.todaysSales : 18500),
      'agentTodayBills': app.currentAgent ? app.currentAgent.transactionsToday : 22,
      'currentTime': new Date().toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      }),
      'currentBillNumber': app.currentBillNumber
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
  }

  static searchProducts(query) {
    const suggestions = document.getElementById('productSuggestions');
    if (!suggestions) return;
    
    if (!query.trim()) {
      suggestions.classList.remove('show');
      return;
    }

    const matches = app.products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.sku.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    if (matches.length > 0) {
      suggestions.innerHTML = matches.map(product => `
        <div class="suggestion-item" onclick="AgentBilling.addToCart('${product.id}')">
          <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
            <div style="font-size: 24px;">${product.image}</div>
            <div style="flex: 1;">
              <div style="font-weight: 500;">${product.name}</div>
              <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 2px;">
                SKU: ${product.sku} | Category: ${product.category}
              </div>
              <div style="font-size: 12px; color: var(--color-primary); margin-top: 2px;">
                Price: ${formatCurrency(product.sellingPrice)} | Stock: ${product.stock} units
              </div>
              <div style="font-size: 11px; color: var(--color-text-secondary); margin-top: 2px;">
                Tax: ${product.taxRate}% (CGST: ${product.cgst}% + SGST: ${product.sgst}%)
              </div>
            </div>
          </div>
        </div>
      `).join('');
      suggestions.classList.add('show');
    } else {
      suggestions.innerHTML = '<div class="suggestion-item" style="text-align: center; color: var(--color-text-secondary);">No products found</div>';
      suggestions.classList.add('show');
    }
  }

  static addToCart(productId) {
    const product = app.products.find(p => p.id === productId);
    if (!product) return;

    if (product.stock <= 0) {
      showToast(`${product.name} is out of stock`, 'error');
      return;
    }

    const existingItem = app.cart.find(item => item.id === productId);
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity += 1;
      } else {
        showToast(`Cannot add more. Only ${product.stock} units available`, 'warning');
        return;
      }
    } else {
      app.cart.push({
        ...product,
        quantity: 1
      });
    }

    AgentBilling.renderCart();
    AgentBilling.updateBillSummary();
    
    // Hide suggestions
    const suggestions = document.getElementById('productSuggestions');
    if (suggestions) suggestions.classList.remove('show');
    
    const searchInput = document.getElementById('agentProductSearch');
    if (searchInput) searchInput.value = '';
    
    showToast(`${product.name} added to cart`, 'success');
  }

  static renderCart() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;

    if (app.cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>Start by searching and adding products</p>
        </div>
      `;
      return;
    }

    cartContainer.innerHTML = app.cart.map(item => `
      <div class="cart-item">
        <div style="font-size: 20px; margin-right: 8px;">${item.image}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-details">
            SKU: ${item.sku} | ${formatCurrency(item.sellingPrice)} | Tax: ${item.taxRate}%
          </div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="AgentBilling.updateQuantity('${item.id}', -1)">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn" onclick="AgentBilling.updateQuantity('${item.id}', 1)">+</button>
          <div class="cart-item-price">${formatCurrency(item.sellingPrice * item.quantity)}</div>
          <button class="btn btn--sm btn--error" onclick="AgentBilling.removeFromCart('${item.id}')" style="margin-left: 8px;">×</button>
        </div>
      </div>
    `).join('');
  }

  static updateQuantity(productId, change) {
    const item = app.cart.find(item => item.id === productId);
    const product = app.products.find(p => p.id === productId);
    
    if (item && product) {
      const newQuantity = item.quantity + change;
      
      if (newQuantity <= 0) {
        AgentBilling.removeFromCart(productId);
        return;
      }
      
      if (newQuantity > product.stock) {
        showToast(`Cannot add more. Only ${product.stock} units available`, 'warning');
        return;
      }
      
      item.quantity = newQuantity;
      AgentBilling.renderCart();
      AgentBilling.updateBillSummary();
    }
  }

  static removeFromCart(productId) {
    app.cart = app.cart.filter(item => item.id !== productId);
    AgentBilling.renderCart();
    AgentBilling.updateBillSummary();
    showToast('Item removed from cart', 'info');
  }

  static updateBillSummary() {
    const subtotal = app.cart.reduce((sum, item) => sum + (item.sellingPrice * item.quantity), 0);
    
    const discountPercent = parseFloat(document.getElementById('discountPercent')?.value || 0);
    const discountAmount = parseFloat(document.getElementById('discountAmount')?.value || 0);
    
    let discount = 0;
    if (discountPercent > 0) {
      discount = (subtotal * discountPercent) / 100;
    } else if (discountAmount > 0) {
      discount = Math.min(discountAmount, subtotal);
    }

    const cgst = app.cart.reduce((sum, item) => {
      const itemTotal = (item.sellingPrice * item.quantity);
      const itemDiscount = subtotal > 0 ? (itemTotal / subtotal) * discount : 0;
      return sum + ((itemTotal - itemDiscount) * item.cgst / 100);
    }, 0);

    const sgst = app.cart.reduce((sum, item) => {
      const itemTotal = (item.sellingPrice * item.quantity);
      const itemDiscount = subtotal > 0 ? (itemTotal / subtotal) * discount : 0;
      return sum + ((itemTotal - itemDiscount) * item.sgst / 100);
    }, 0);

    const total = subtotal - discount + cgst + sgst;

    // Update display
    const elements = {
      'billSubtotal': formatCurrency(subtotal),
      'discountDisplay': formatCurrency(discount),
      'cgstAmount': formatCurrency(cgst),
      'sgstAmount': formatCurrency(sgst),
      'billTotal': formatCurrency(total)
    };

    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });

    // Update change calculation
    const amountReceived = parseFloat(document.getElementById('amountReceived')?.value || 0);
    const change = Math.max(0, amountReceived - total);
    const changeElement = document.getElementById('changeAmount');
    if (changeElement) {
      changeElement.textContent = formatCurrency(change);
    }
  }

  static completeSale() {
    if (app.cart.length === 0) {
      showToast('Please add items to cart first', 'warning');
      return;
    }

    const totalElement = document.getElementById('billTotal');
    const amountReceivedElement = document.getElementById('amountReceived');
    
    if (!totalElement || !amountReceivedElement) return;

    const totalText = totalElement.textContent.replace('₹', '').replace(/,/g, '');
    const total = parseFloat(totalText);
    const amountReceived = parseFloat(amountReceivedElement.value || 0);

    if (amountReceived < total) {
      showToast('Amount received is less than total amount', 'warning');
      return;
    }

    // Process sale - update agent stats
    if (app.currentAgent) {
      app.currentAgent.todaysSales += total;
      app.currentAgent.transactionsToday += 1;
      app.currentAgent.averageTicketSize = app.currentAgent.todaysSales / app.currentAgent.transactionsToday;
    }
    
    // Update product stock
    app.cart.forEach(item => {
      const product = app.products.find(p => p.id === item.id);
      if (product) {
        product.stock -= item.quantity;
      }
    });
    
    // Clear cart and generate new bill number
    app.cart = [];
    app.currentBillNumber = app.generateBillNumber();
    
    AgentBilling.renderCart();
    AgentBilling.updateBillSummary();
    AgentBilling.updateInterface();
    
    // Clear form
    const customerName = document.getElementById('customerName');
    const customerPhone = document.getElementById('customerPhone');
    if (customerName) customerName.value = '';
    if (customerPhone) customerPhone.value = '';
    amountReceivedElement.value = '';
    
    const discountPercent = document.getElementById('discountPercent');
    const discountAmount = document.getElementById('discountAmount');
    if (discountPercent) discountPercent.value = '';
    if (discountAmount) discountAmount.value = '';
    
    showToast(`Sale completed successfully! Total: ${formatCurrency(total)}. Receipt printed.`, 'success');
  }

  static saveDraft() {
    if (app.cart.length === 0) {
      showToast('No items to hold', 'warning');
      return;
    }
    showToast('Bill held successfully', 'success');
  }

  static printShiftSummary() {
    showToast('Shift summary printed', 'success');
  }
}

// Inventory Manager
class InventoryManager {
  static renderAlerts() {
    const container = document.getElementById('inventoryAlerts');
    if (!container) return;
    
    const lowStockProducts = app.products.filter(p => p.stock <= p.minStock);
    const outOfStockProducts = app.products.filter(p => p.stock === 0);
    
    const alerts = [
      ...lowStockProducts.map(p => ({
        type: 'warning',
        message: `${p.name} is running low (${p.stock} units remaining)`
      })),
      ...outOfStockProducts.map(p => ({
        type: 'error',
        message: `${p.name} is out of stock`
      }))
    ];
    
    if (alerts.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No inventory alerts</p>';
      return;
    }
    
    container.innerHTML = `
      <h4>Inventory Alerts</h4>
      ${alerts.map(alert => `
        <div class="alert-item ${alert.type}">
          <div style="font-size: 18px;">${alert.type === 'warning' ? '⚠️' : '🔴'}</div>
          <span>${alert.message}</span>
        </div>
      `).join('')}
    `;
  }
  
  static addStock() {
    showToast('Add Stock functionality would be available here', 'info');
  }
  
  static adjustStock() {
    showToast('Stock Adjustment functionality would be available here', 'info');
  }
  
  static generatePO() {
    showToast('Generate Purchase Order functionality would be available here', 'info');
  }
}

// Performance Manager
class PerformanceManager {
  static renderOverview() {
    const container = document.getElementById('performanceOverview');
    if (!container) return;
    
    container.innerHTML = app.billingAgents.map(agent => `
      <div class="performance-card">
        <h4>${agent.name} (${agent.agentCode})</h4>
        <div class="agent-stats-grid">
          <div class="agent-stat">
            <div class="agent-stat-value">${formatCurrency(agent.thisMonthSales)}</div>
            <div class="agent-stat-label">Monthly Sales</div>
          </div>
          <div class="agent-stat">
            <div class="agent-stat-value">${agent.transactionsToday}</div>
            <div class="agent-stat-label">Today's Bills</div>
          </div>
          <div class="agent-stat">
            <div class="agent-stat-value">${agent.rating}/5</div>
            <div class="agent-stat-label">Rating</div>
          </div>
          <div class="agent-stat">
            <div class="agent-stat-value">${agent.performance}</div>
            <div class="agent-stat-label">Performance</div>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  static createAgentSalesChart() {
    const ctx = document.getElementById('agentSalesChart');
    if (!ctx) return;

    if (app.charts.agentSalesChart) {
      app.charts.agentSalesChart.destroy();
    }

    app.charts.agentSalesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: app.billingAgents.map(a => a.name),
        datasets: [{
          label: 'Monthly Sales',
          data: app.billingAgents.map(a => a.thisMonthSales),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return formatCurrency(value);
              }
            }
          }
        }
      }
    });
  }
}

// Report Manager
class ReportManager {
  static generateReport() {
    const reportType = document.getElementById('reportType')?.value;
    const fromDate = document.getElementById('reportFromDate')?.value;
    const toDate = document.getElementById('reportToDate')?.value;
    
    const container = document.getElementById('reportContainer');
    if (!container) return;
    
    container.innerHTML = `
      <div style="text-align: center;">
        <h3>${reportType ? reportType.charAt(0).toUpperCase() + reportType.slice(1) : 'Stock'} Report</h3>
        <p>Report for period: ${formatDate(fromDate)} to ${formatDate(toDate)}</p>
        <p style="color: var(--color-text-secondary); margin-top: 32px;">
          Report generation functionality would be implemented here
        </p>
      </div>
    `;
  }
}

// Payment Stats Manager
class PaymentStatsManager {
  static createProfitLossChart() {
    const ctx = document.getElementById('profitLossChart');
    if (!ctx) return;

    if (app.charts.profitLossChart) {
      app.charts.profitLossChart.destroy();
    }

    app.charts.profitLossChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Revenue',
            data: [310000, 325000, 295000, 357000],
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: false
          },
          {
            label: 'Profit',
            data: [88000, 93000, 84000, 102000],
            borderColor: '#FFC185',
            backgroundColor: 'rgba(255, 193, 133, 0.1)',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return formatCurrency(value);
              }
            }
          }
        }
      }
    });
  }

  static createCategoryRevenueChart() {
    const ctx = document.getElementById('categoryRevenueChart');
    if (!ctx) return;

    if (app.charts.categoryRevenueChart) {
      app.charts.categoryRevenueChart.destroy();
    }

    app.charts.categoryRevenueChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: app.salesAnalytics.categoryPerformance.map(c => c.category),
        datasets: [{
          data: app.salesAnalytics.categoryPerformance.map(c => c.sales),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
  
  static exportReport() {
    showToast('Export functionality would be available here', 'info');
  }
}

// Subscription Manager
class SubscriptionManager {
  static upgradePlan() {
    showToast('Plan upgrade functionality would be available here', 'info');
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing vendor platform');
  
  initializeLoginHandlers();
  initializeNavigationHandlers();
  initializeModalHandlers();
  initializeAgentInterface();
  initializeProductForm();
  
  // Update time every second for agent interface
  setInterval(() => {
    if (app.currentRole === 'agent') {
      const timeElement = document.getElementById('currentTime');
      if (timeElement) {
        timeElement.textContent = new Date().toLocaleTimeString('en-IN', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true
        });
      }
    }
  }, 1000);
  
  console.log('Vendor platform initialized successfully');
});

function initializeLoginHandlers() {
  // Role selection
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const role = this.dataset.role;
      
      document.querySelectorAll('.login-fields').forEach(field => {
        field.classList.add('hidden');
      });
      
      const targetField = document.getElementById(role + 'Login');
      if (targetField) {
        targetField.classList.remove('hidden');
      }
    });
  });

  // Login form submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const activeRoleBtn = document.querySelector('.role-btn.active');
      if (!activeRoleBtn) {
        showToast('Please select a role', 'error');
        return;
      }
      
      const activeRole = activeRoleBtn.dataset.role;
      let credentials = {};
      
      if (activeRole === 'vendor') {
        credentials = {
          email: document.getElementById('vendorEmail').value.trim(),
          password: document.getElementById('vendorPassword').value.trim()
        };
      } else if (activeRole === 'agent') {
        credentials = {
          code: document.getElementById('agentCode').value.trim(),
          pin: document.getElementById('agentPin').value.trim()
        };
      }
      
      if (AuthManager.login(activeRole, credentials)) {
        handleSuccessfulLogin(activeRole);
      } else {
        showToast('Invalid credentials. Please check your login details.', 'error');
      }
    });
  }
}

function handleSuccessfulLogin(role) {
  if (role === 'vendor') {
    PageManager.showPage('vendorDashboard');
    PageManager.showSection('dashboardSection');
    VendorDashboardManager.updateDashboard();
    setTimeout(() => {
      VendorDashboardManager.createSalesTrendChart();
      VendorDashboardManager.createCategoryChart();
      VendorDashboardManager.createPaymentMethodChart();
    }, 100);
  } else if (role === 'agent') {
    PageManager.showPage('agentInterface');
    AgentBilling.updateInterface();
    AgentBilling.renderCart();
    AgentBilling.updateBillSummary();
  }
  
  showToast(`Welcome ${app.currentUser.name}!`, 'success');
}

function initializeNavigationHandlers() {
  // Logout buttons
  document.querySelectorAll('[id$="LogoutBtn"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      AuthManager.logout();
    });
  });

  // Navigation buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section + 'Section';
      PageManager.showSection(section);
      loadSectionContent(section);
    });
  });
}

function loadSectionContent(section) {
  if (section === 'dashboardSection') {
    VendorDashboardManager.updateDashboard();
    setTimeout(() => {
      VendorDashboardManager.createSalesTrendChart();
      VendorDashboardManager.createCategoryChart();
      VendorDashboardManager.createPaymentMethodChart();
    }, 100);
  } else if (section === 'productsSection') {
    ProductManager.renderProducts();
  } else if (section === 'inventorySection') {
    InventoryManager.renderAlerts();
  } else if (section === 'agentManagementSection') {
    AgentManager.renderAgents();
  } else if (section === 'agentPerformanceSection') {
    PerformanceManager.renderOverview();
    setTimeout(() => PerformanceManager.createAgentSalesChart(), 100);
  } else if (section === 'paymentStatsSection') {
    setTimeout(() => {
      PaymentStatsManager.createProfitLossChart();
      PaymentStatsManager.createCategoryRevenueChart();
    }, 100);
  }
}

function initializeModalHandlers() {
  document.querySelectorAll('.modal .close-btn, .modal .modal-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.modal').classList.add('hidden');
    });
  });

  // Hide suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.product-search-large')) {
      document.querySelectorAll('.suggestions-dropdown').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });
}

function initializeAgentInterface() {
  // Product search
  const productSearch = document.getElementById('agentProductSearch');
  if (productSearch) {
    productSearch.addEventListener('input', function() {
      AgentBilling.searchProducts(this.value);
    });
  }

  // Discount inputs
  const discountPercent = document.getElementById('discountPercent');
  if (discountPercent) {
    discountPercent.addEventListener('input', function() {
      if (this.value) {
        const discountAmount = document.getElementById('discountAmount');
        if (discountAmount) discountAmount.value = '';
      }
      AgentBilling.updateBillSummary();
    });
  }

  const discountAmount = document.getElementById('discountAmount');
  if (discountAmount) {
    discountAmount.addEventListener('input', function() {
      if (this.value) {
        const discountPercent = document.getElementById('discountPercent');
        if (discountPercent) discountPercent.value = '';
      }
      AgentBilling.updateBillSummary();
    });
  }

  // Amount received input
  const amountReceived = document.getElementById('amountReceived');
  if (amountReceived) {
    amountReceived.addEventListener('input', function() {
      AgentBilling.updateBillSummary();
    });
  }

  // Payment method selection
  document.querySelectorAll('.payment-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Complete sale button
  const completeSaleBtn = document.getElementById('completeSaleBtn');
  if (completeSaleBtn) {
    completeSaleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      AgentBilling.completeSale();
    });
  }
}

function initializeProductForm() {
  const productForm = document.getElementById('addProductForm');
  if (productForm) {
    productForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const productData = {};
      for (let [key, value] of formData.entries()) {
        productData[key] = value;
      }
      
      const newProduct = {
        id: `P${String(app.products.length + 1).padStart(3, '0')}`,
        name: productData.name,
        sku: productData.sku,
        category: productData.category || 'General',
        subcategory: productData.subcategory || '',
        costPrice: parseFloat(productData.costPrice),
        sellingPrice: parseFloat(productData.sellingPrice),
        mrp: parseFloat(productData.mrp) || parseFloat(productData.sellingPrice),
        stock: parseInt(productData.stock) || 0,
        minStock: 5,
        hsn: productData.hsn || '',
        taxRate: parseFloat(productData.taxRate) || 0,
        cgst: parseFloat(productData.taxRate) / 2 || 0,
        sgst: parseFloat(productData.taxRate) / 2 || 0,
        barcode: '',
        supplier: '',
        lastPurchaseDate: new Date().toISOString().split('T')[0],
        expiryDate: null,
        description: productData.description || '',
        image: '📦',
        status: 'active'
      };
      
      app.products.push(newProduct);
      ProductManager.renderProducts();
      
      showToast(`${productData.name} added successfully!`, 'success');
      this.reset();
      
      const modal = document.getElementById('addProductModal');
      if (modal) modal.classList.add('hidden');
    });
  }
}

// Global functions for onclick handlers
window.ProductManager = ProductManager;
window.AgentManager = AgentManager;
window.AgentBilling = AgentBilling;
window.InventoryManager = InventoryManager;
window.ReportManager = ReportManager;
window.PaymentStatsManager = PaymentStatsManager;
window.SubscriptionManager = SubscriptionManager;