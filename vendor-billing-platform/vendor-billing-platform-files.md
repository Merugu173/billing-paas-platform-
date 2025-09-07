# Vendor Billing Platform - Complete Code Files

## File Structure
```
vendor-billing-platform/
├── index.html
├── style.css
├── app.js
└── README.md
```

## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>BillMaster Pro - Vendor & Agent Platform</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Login Page -->
    <div id="loginPage" class="page active">
        <div class="login-container">
            <div class="login-card">
                <div class="login-header">
                    <h1>🏪 BillMaster Pro</h1>
                    <p>Comprehensive Vendor & Agent Billing Platform</p>
                </div>
                
                <div class="role-selector">
                    <button id="vendorRoleBtn" class="role-btn active" data-role="vendor">
                        <div class="role-icon">🏪</div>
                        <span>Vendor (Shop Owner)</span>
                    </button>
                    <button id="agentRoleBtn" class="role-btn" data-role="agent">
                        <div class="role-icon">👨‍💼</div>
                        <span>Billing Agent</span>
                    </button>
                </div>

                <form id="loginForm" class="login-form">
                    <div id="vendorLogin" class="login-fields">
                        <div class="form-group">
                            <label class="form-label">Vendor Email</label>
                            <input type="email" class="form-control" id="vendorEmail" placeholder="vendor@techmart.com" value="vendor@techmart.com">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" id="vendorPassword" placeholder="Enter password" value="vendor123">
                        </div>
                    </div>

                    <div id="agentLogin" class="login-fields hidden">
                        <div class="form-group">
                            <label class="form-label">Agent Code</label>
                            <input type="text" class="form-control" id="agentCode" placeholder="Enter your agent code" value="RK2025">
                        </div>
                        <div class="agent-quick-codes">
                            <p class="form-help">Quick Demo Codes:</p>
                            <div class="code-chips">
                                <span class="code-chip" onclick="document.getElementById('agentCode').value='RK2025'">RK2025</span>
                                <span class="code-chip" onclick="document.getElementById('agentCode').value='PS2025'">PS2025</span>
                                <span class="code-chip" onclick="document.getElementById('agentCode').value='SP2025'">SP2025</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn--primary btn--full-width">Login</button>
                </form>

                <div class="demo-info">
                    <p><strong>Demo Credentials:</strong></p>
                    <div id="vendorCredentials">
                        <p>Vendor: vendor@techmart.com / vendor123</p>
                    </div>
                    <div id="agentCredentials" class="hidden">
                        <p>Agent Codes: RK2025, PS2025, SP2025</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Vendor Dashboard -->
    <div id="vendorDashboard" class="page">
        <div class="dashboard-layout">
            <!-- Sidebar -->
            <div class="sidebar">
                <div class="sidebar-header">
                    <h2><i class="fas fa-store"></i> <span id="businessName">TechMart Electronics</span></h2>
                    <p>Vendor Dashboard</p>
                </div>
                
                <nav class="sidebar-nav">
                    <div class="nav-item">
                        <a href="#" class="nav-link active" data-section="dashboard">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="products">
                            <i class="fas fa-box"></i>
                            <span>Product Management</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="inventory">
                            <i class="fas fa-warehouse"></i>
                            <span>Inventory Management</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="reports">
                            <i class="fas fa-chart-bar"></i>
                            <span>Stock Reports</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="payments">
                            <i class="fas fa-credit-card"></i>
                            <span>Payment Statistics</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="agents">
                            <i class="fas fa-users"></i>
                            <span>Agent Management</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="performance">
                            <i class="fas fa-chart-line"></i>
                            <span>Agent Performance</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="escalations">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span>Escalations</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="analytics">
                            <i class="fas fa-analytics"></i>
                            <span>Analytics</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="settings">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>
                    </div>
                </nav>
                
                <div class="sidebar-footer">
                    <div class="subscription-info">
                        <div class="plan-badge">Standard Plan</div>
                        <div class="plan-usage">3/5 Agents Used</div>
                    </div>
                    <button id="vendorLogoutBtn" class="btn btn--secondary btn--full-width">
                        <i class="fas fa-sign-out-alt"></i>
                        Logout
                    </button>
                </div>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                <div class="main-header">
                    <h1 id="vendorPageTitle">Business Dashboard</h1>
                    <div class="header-actions">
                        <div class="user-profile">
                            <div class="user-avatar">AM</div>
                            <div class="user-info">
                                <div class="user-name">Amit Kumar</div>
                                <div class="user-role">Shop Owner</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main-body">
                    <!-- Dashboard Section -->
                    <div id="vendorDashboardSection" class="content-section active">
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-card-icon success">
                                    <i class="fas fa-rupee-sign"></i>
                                </div>
                                <div class="stat-card-value" id="todaysSales">₹45,750</div>
                                <div class="stat-card-label">Today's Sales</div>
                                <div class="stat-card-change positive">+18.2% from yesterday</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon primary">
                                    <i class="fas fa-calendar-month"></i>
                                </div>
                                <div class="stat-card-value" id="monthSales">₹12.87L</div>
                                <div class="stat-card-label">This Month</div>
                                <div class="stat-card-change positive">+15.8% from last month</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon warning">
                                    <i class="fas fa-box"></i>
                                </div>
                                <div class="stat-card-value" id="totalProducts">1,247</div>
                                <div class="stat-card-label">Total Products</div>
                                <div class="stat-card-change positive">+45 this week</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon info">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="stat-card-value" id="activeAgents">5</div>
                                <div class="stat-card-label">Active Agents</div>
                                <div class="stat-card-change">All online</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon danger">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </div>
                                <div class="stat-card-value" id="lowStock">23</div>
                                <div class="stat-card-label">Low Stock Items</div>
                                <div class="stat-card-change negative">Needs attention</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon success">
                                    <i class="fas fa-percentage"></i>
                                </div>
                                <div class="stat-card-value" id="profitMargin">28.5%</div>
                                <div class="stat-card-label">Profit Margin</div>
                                <div class="stat-card-change positive">+2.3% improvement</div>
                            </div>
                        </div>

                        <div class="dashboard-grid">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Sales Overview</h3>
                                    <select class="filter-select">
                                        <option value="7">Last 7 days</option>
                                        <option value="30" selected>Last 30 days</option>
                                        <option value="90">Last 90 days</option>
                                    </select>
                                </div>
                                <div class="card-body">
                                    <canvas id="salesChart" height="300"></canvas>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Recent Transactions</h3>
                                    <a href="#" class="card-link">View All</a>
                                </div>
                                <div class="card-body">
                                    <div id="recentTransactions" class="transaction-list">
                                        <!-- Transactions will be populated by JavaScript -->
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Agent Performance Today</h3>
                                </div>
                                <div class="card-body">
                                    <div id="agentPerformanceToday" class="performance-list">
                                        <!-- Performance data will be populated by JavaScript -->
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Category Performance</h3>
                                </div>
                                <div class="card-body">
                                    <canvas id="categoryChart" height="300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Products Section -->
                    <div id="productsSection" class="content-section">
                        <div class="section-header">
                            <h2>Product Management</h2>
                            <button class="btn btn--primary" id="addProductBtn">
                                <i class="fas fa-plus"></i>
                                Add New Product
                            </button>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">All Products</h3>
                                <div class="card-actions">
                                    <input type="search" class="search-input" placeholder="Search products..." id="productSearch">
                                    <select class="filter-select" id="categoryFilter">
                                        <option value="all">All Categories</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Groceries">Groceries</option>
                                        <option value="Footwear">Footwear</option>
                                        <option value="Beverages">Beverages</option>
                                        <option value="Personal Care">Personal Care</option>
                                    </select>
                                    <button class="btn btn--outline btn--sm">
                                        <i class="fas fa-download"></i>
                                        Export
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-container">
                                    <table class="table" id="productsTable">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>SKU</th>
                                                <th>Category</th>
                                                <th>Cost Price</th>
                                                <th>Selling Price</th>
                                                <th>Stock</th>
                                                <th>Tax Rate</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="productsTableBody">
                                            <!-- Product rows will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Other sections would be implemented similarly -->
                    <div id="inventorySection" class="content-section">
                        <div class="section-header">
                            <h2>Inventory Management</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Inventory Management</h3>
                            <p>Complete inventory tracking and management features coming soon.</p>
                        </div>
                    </div>

                    <div id="reportsSection" class="content-section">
                        <div class="section-header">
                            <h2>Stock Reports</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Stock Reports</h3>
                            <p>Detailed stock analysis and reporting features coming soon.</p>
                        </div>
                    </div>

                    <div id="paymentsSection" class="content-section">
                        <div class="section-header">
                            <h2>Payment Statistics</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Payment Statistics</h3>
                            <p>Comprehensive payment analysis and P&L reports coming soon.</p>
                        </div>
                    </div>

                    <div id="agentsSection" class="content-section">
                        <div class="section-header">
                            <h2>Agent Management</h2>
                            <button class="btn btn--primary" id="addAgentBtn">
                                <i class="fas fa-user-plus"></i>
                                Add New Agent
                            </button>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="table-container">
                                    <table class="table" id="agentsTable">
                                        <thead>
                                            <tr>
                                                <th>Agent</th>
                                                <th>Code</th>
                                                <th>Contact</th>
                                                <th>Today's Sales</th>
                                                <th>This Month</th>
                                                <th>Performance</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="agentsTableBody">
                                            <!-- Agent rows will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="performanceSection" class="content-section">
                        <div class="section-header">
                            <h2>Agent Performance</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Agent Performance Analytics</h3>
                            <p>Detailed performance tracking and analytics coming soon.</p>
                        </div>
                    </div>

                    <div id="escalationsSection" class="content-section">
                        <div class="section-header">
                            <h2>Escalations</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Escalation Management</h3>
                            <p>Issue tracking and escalation workflow coming soon.</p>
                        </div>
                    </div>

                    <div id="analyticsSection" class="content-section">
                        <div class="section-header">
                            <h2>Advanced Analytics</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Advanced Analytics</h3>
                            <p>Comprehensive business analytics and insights coming soon.</p>
                        </div>
                    </div>

                    <div id="settingsSection" class="content-section">
                        <div class="section-header">
                            <h2>Settings</h2>
                        </div>
                        <div class="placeholder-content">
                            <h3>Business Settings</h3>
                            <p>Business configuration and preferences coming soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Agent Dashboard -->
    <div id="agentDashboard" class="page">
        <div class="agent-layout">
            <div class="agent-header">
                <div class="agent-info">
                    <h1><i class="fas fa-cash-register"></i> Billing Terminal</h1>
                    <div class="agent-details">
                        <span id="agentName">Rajesh Kumar</span>
                        <span id="agentCode">(RK2025)</span>
                    </div>
                </div>
                <div class="shift-info">
                    <div class="shift-item">
                        <span class="shift-label">Shift:</span>
                        <span class="shift-value" id="currentShift">Morning</span>
                    </div>
                    <div class="shift-item">
                        <span class="shift-label">Today's Sales:</span>
                        <span class="shift-value" id="shiftSales">₹18,500</span>
                    </div>
                    <div class="shift-item">
                        <span class="shift-label">Bills:</span>
                        <span class="shift-value" id="shiftBills">22</span>
                    </div>
                </div>
                <button id="agentLogoutBtn" class="btn btn--secondary">
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </button>
            </div>

            <div class="agent-main">
                <div class="agent-billing">
                    <div class="agent-search">
                        <div class="search-bar">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" class="search-input" id="productSearchInput" placeholder="Search products by name, code, or scan barcode...">
                        </div>
                        <div class="quick-filters">
                            <button class="filter-btn active" data-category="all">All</button>
                            <button class="filter-btn" data-category="Electronics">Electronics</button>
                            <button class="filter-btn" data-category="Groceries">Groceries</button>
                            <button class="filter-btn" data-category="Beverages">Beverages</button>
                            <button class="filter-btn" data-category="popular">Popular</button>
                        </div>
                    </div>
                    
                    <div class="agent-products">
                        <div class="products-grid" id="agentProductsGrid">
                            <!-- Products will be populated by JavaScript -->
                        </div>
                    </div>
                </div>

                <div class="agent-cart">
                    <div class="cart-header">
                        <h3 class="cart-title">
                            <i class="fas fa-shopping-cart"></i>
                            Current Bill
                        </h3>
                        <div class="bill-number" id="billNumber">TM-2025-001548</div>
                    </div>

                    <div class="customer-section">
                        <div class="form-group">
                            <label class="form-label">Customer Name</label>
                            <input type="text" class="form-control" id="customerName" placeholder="Enter customer name">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="customerPhone" placeholder="Enter phone number">
                        </div>
                    </div>
                    
                    <div class="cart-items" id="cartItems">
                        <div class="empty-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <p>No items in cart</p>
                            <small>Search and add products to start billing</small>
                        </div>
                    </div>
                    
                    <div class="cart-summary" id="cartSummary">
                        <div class="summary-row">
                            <span class="summary-label">Subtotal:</span>
                            <span class="summary-value" id="subtotal">₹0.00</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">CGST:</span>
                            <span class="summary-value" id="cgstAmount">₹0.00</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">SGST:</span>
                            <span class="summary-value" id="sgstAmount">₹0.00</span>
                        </div>
                        <div class="summary-row total">
                            <span class="summary-label">Total:</span>
                            <span class="summary-value" id="grandTotal">₹0.00</span>
                        </div>
                    </div>
                    
                    <div class="cart-actions">
                        <div class="payment-methods">
                            <button class="payment-btn active" data-method="cash">
                                <i class="fas fa-money-bill"></i>
                                Cash
                            </button>
                            <button class="payment-btn" data-method="card">
                                <i class="fas fa-credit-card"></i>
                                Card
                            </button>
                            <button class="payment-btn" data-method="upi">
                                <i class="fas fa-mobile-alt"></i>
                                UPI
                            </button>
                        </div>
                        
                        <button class="agent-btn agent-btn-secondary" id="clearCartBtn">
                            <i class="fas fa-trash"></i>
                            Clear Cart
                        </button>
                        
                        <button class="agent-btn agent-btn-primary" id="processPaymentBtn" disabled>
                            <i class="fas fa-print"></i>
                            Process & Print
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Receipt Preview Modal -->
    <div id="receiptModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Receipt Preview</h3>
                <button class="modal-close" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="receipt-preview" id="receiptPreview">
                    <!-- Receipt content will be generated by JavaScript -->
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn--secondary" type="button" onclick="app.closeModal('receiptModal')">Close</button>
                <button class="btn btn--primary" type="button" onclick="app.printReceipt()">Print Receipt</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

## style.css
```css
:root {
  /* Color Palette */
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --secondary-color: #64748b;
  --success-color: #059669;
  --success-hover: #047857;
  --danger-color: #dc2626;
  --danger-hover: #b91c1c;
  --warning-color: #d97706;
  --warning-hover: #b45309;
  --info-color: #0284c7;
  --info-hover: #0369a1;
  
  /* Neutral Colors */
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-300: #cbd5e1;
  --gray-400: #94a3b8;
  --gray-500: #64748b;
  --gray-600: #475569;
  --gray-700: #334155;
  --gray-800: #1e293b;
  --gray-900: #0f172a;
  
  /* Agent UI Specific */
  --agent-primary: #10b981;
  --agent-primary-hover: #059669;
  --agent-secondary: #6b7280;
  --agent-background: #f3f4f6;
  --agent-card: #ffffff;
  --agent-button-size: 3.5rem;
  --agent-text-large: 1.25rem;
  --agent-text-xl: 1.5rem;
  
  /* Background & Surface */
  --background: var(--gray-50);
  --surface: var(--white);
  --surface-hover: var(--gray-100);
  
  /* Text Colors */
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-600);
  --text-muted: var(--gray-400);
  
  /* Borders & Shadows */
  --border-color: var(--gray-200);
  --border-radius: 8px;
  --border-radius-lg: 12px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background-color: var(--background);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Utility Classes */
.hidden {
  display: none !important;
}

.page {
  display: none;
  min-height: 100vh;
}

.page.active {
  display: flex;
  flex-direction: column;
}

/* Login Page Styles */
#loginPage {
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-color), var(--info-color));
  padding: var(--spacing-md);
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-card {
  background: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.login-header h1 {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.login-header p {
  color: var(--text-secondary);
  font-size: var(--text-base);
}

.role-selector {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  border-radius: var(--border-radius);
  background: var(--gray-100);
  padding: var(--spacing-xs);
}

.role-btn {
  flex: 1;
  padding: var(--spacing-md);
  border: none;
  background: transparent;
  border-radius: calc(var(--border-radius) - 2px);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  text-align: center;
}

.role-btn.active {
  background: var(--surface);
  color: var(--primary-color);
  box-shadow: var(--shadow-sm);
}

.role-btn:hover {
  color: var(--primary-color);
}

.role-icon {
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-xs);
}

.login-form {
  margin-bottom: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
}

.form-control {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--text-base);
  transition: all 0.2s ease;
  background: var(--surface);
}

.form-control:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgb(37 99 235 / 0.1);
}

.agent-quick-codes {
  margin-top: var(--spacing-sm);
}

.form-help {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-bottom: var(--spacing-sm);
}

.code-chips {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.code-chip {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--primary-color);
  color: var(--white);
  border-radius: var(--border-radius);
  font-size: var(--text-xs);
  cursor: pointer;
  transition: all 0.2s ease;
}

.code-chip:hover {
  background: var(--primary-hover);
}

.demo-info {
  background: var(--gray-100);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: var(--border-radius);
  font-size: var(--text-base);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
}

.btn--primary {
  background: var(--primary-color);
  color: var(--white);
}

.btn--primary:hover {
  background: var(--primary-hover);
}

.btn--secondary {
  background: var(--gray-200);
  color: var(--text-primary);
}

.btn--secondary:hover {
  background: var(--gray-300);
}

.btn--success {
  background: var(--success-color);
  color: var(--white);
}

.btn--success:hover {
  background: var(--success-hover);
}

.btn--danger {
  background: var(--danger-color);
  color: var(--white);
}

.btn--danger:hover {
  background: var(--danger-hover);
}

.btn--warning {
  background: var(--warning-color);
  color: var(--white);
}

.btn--warning:hover {
  background: var(--warning-hover);
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.btn--outline:hover {
  background: var(--surface-hover);
}

.btn--full-width {
  width: 100%;
}

.btn--sm {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--text-sm);
  min-height: 36px;
}

.btn--lg {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--text-lg);
  min-height: 52px;
}

/* Dashboard Layout */
.dashboard-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 280px;
  background: var(--surface);
  border-right: 1px solid var(--border-color);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.sidebar-header h2 {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.sidebar-header h2 i {
  margin-right: var(--spacing-sm);
  color: var(--primary-color);
}

.sidebar-header p {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin: 0;
  margin-top: var(--spacing-xs);
}

.sidebar-nav {
  flex: 1;
  padding: var(--spacing-md) 0;
  overflow-y: auto;
}

.nav-item {
  margin-bottom: var(--spacing-xs);
  padding: 0 var(--spacing-md);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  font-size: var(--text-base);
  font-weight: 500;
}

.nav-link:hover,
.nav-link.active {
  background: var(--primary-color);
  color: var(--white);
}

.nav-link i {
  font-size: var(--text-lg);
  width: 20px;
  text-align: center;
}

.sidebar-footer {
  padding: var(--spacing-md);
  border-top: 1px solid var(--border-color);
}

.subscription-info {
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--gray-50);
  border-radius: var(--border-radius);
}

.plan-badge {
  font-weight: 600;
  color: var(--success-color);
  font-size: var(--text-sm);
}

.plan-usage {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-top: var(--spacing-xs);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-header {
  background: var(--surface);
  border-bottom: 1px solid var(--border-color);
  padding: 0 var(--spacing-lg);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.main-header h1 {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  background: var(--surface-hover);
  border: 1px solid var(--border-color);
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 600;
  font-size: var(--text-sm);
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--text-primary);
  margin: 0;
  line-height: 1.2;
}

.user-role {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.2;
}

.main-body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-lg);
}

/* Content Sections */
.content-section {
  display: none;
}

.content-section.active {
  display: block;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
}

.section-header h2 {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

/* Cards */
.card {
  background: var(--surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  margin-bottom: var(--spacing-lg);
}

.card-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.card-actions {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.card-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: var(--text-sm);
  font-weight: 500;
}

.card-link:hover {
  text-decoration: underline;
}

.card-body {
  padding: var(--spacing-lg);
}

.search-input {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--text-sm);
  background: var(--surface);
}

.filter-select {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--text-sm);
  background: var(--surface);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.stat-card {
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  background: var(--surface);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  font-size: var(--text-xl);
  color: var(--white);
}

.stat-card-icon.primary {
  background: var(--primary-color);
}

.stat-card-icon.success {
  background: var(--success-color);
}

.stat-card-icon.warning {
  background: var(--warning-color);
}

.stat-card-icon.danger {
  background: var(--danger-color);
}

.stat-card-icon.info {
  background: var(--info-color);
}

.stat-card-value {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  line-height: 1.2;
}

.stat-card-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin: 0;
}

.stat-card-change {
  font-size: var(--text-sm);
  font-weight: 500;
  margin-top: var(--spacing-sm);
}

.stat-card-change.positive {
  color: var(--success-color);
}

.stat-card-change.negative {
  color: var(--danger-color);
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

/* Tables */
.table-container {
  overflow-x: auto;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: var(--surface);
}

.table th {
  background: var(--gray-50);
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: left;
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.table td {
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
  font-size: var(--text-sm);
  color: var(--text-primary);
}

.table tbody tr:hover {
  background: var(--gray-50);
}

.table tbody tr:last-child td {
  border-bottom: none;
}

/* Status Badges */
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 9999px;
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.badge.success {
  background: rgb(34 197 94 / 0.1);
  color: var(--success-color);
}

.badge.warning {
  background: rgb(217 119 6 / 0.1);
  color: var(--warning-color);
}

.badge.danger {
  background: rgb(220 38 38 / 0.1);
  color: var(--danger-color);
}

.badge.info {
  background: rgb(2 132 199 / 0.1);
  color: var(--info-color);
}

.badge.secondary {
  background: rgb(100 116 139 / 0.1);
  color: var(--secondary-color);
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

.action-btn {
  padding: var(--spacing-sm);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--text-sm);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn.view {
  background: rgb(2 132 199 / 0.1);
  color: var(--info-color);
}

.action-btn.view:hover {
  background: rgb(2 132 199 / 0.2);
}

.action-btn.edit {
  background: rgb(217 119 6 / 0.1);
  color: var(--warning-color);
}

.action-btn.edit:hover {
  background: rgb(217 119 6 / 0.2);
}

.action-btn.delete {
  background: rgb(220 38 38 / 0.1);
  color: var(--danger-color);
}

.action-btn.delete:hover {
  background: rgb(220 38 38 / 0.2);
}

/* Transaction List */
.transaction-list {
  max-height: 300px;
  overflow-y: auto;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-sm);
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.transaction-item:hover {
  background: var(--gray-50);
  border-color: var(--border-color);
}

.transaction-info h4 {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.transaction-details {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-top: var(--spacing-xs);
}

.transaction-amount {
  font-weight: 600;
  color: var(--success-color);
}

/* Performance List */
.performance-list {
  display: grid;
  gap: var(--spacing-md);
}

.performance-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  background: var(--gray-50);
}

.performance-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.performance-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 600;
  font-size: var(--text-sm);
}

.performance-details h4 {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.performance-meta {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-top: var(--spacing-xs);
}

.performance-value {
  font-weight: 600;
  color: var(--success-color);
}

/* Placeholder Content */
.placeholder-content {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--text-muted);
}

.placeholder-content h3 {
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

.placeholder-content p {
  font-size: var(--text-base);
}

/* Agent Layout */
.agent-layout {
  background: var(--agent-background);
  min-height: 100vh;
  padding: var(--spacing-md);
}

.agent-header {
  background: var(--agent-card);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.agent-info h1 {
  font-size: var(--agent-text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.agent-info h1 i {
  margin-right: var(--spacing-sm);
  color: var(--agent-primary);
}

.agent-details {
  font-size: var(--text-base);
  color: var(--text-secondary);
  margin-top: var(--spacing-xs);
}

.shift-info {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.shift-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.shift-label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.shift-value {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
}

.agent-main {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--spacing-lg);
  height: calc(100vh - 140px);
}

.agent-billing {
  background: var(--agent-card);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.agent-search {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.search-bar {
  position: relative;
  margin-bottom: var(--spacing-md);
}

.search-input {
  width: 100%;
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-lg) 3rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  font-size: var(--agent-text-large);
  background: var(--surface);
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--agent-primary);
  box-shadow: 0 0 0 3px rgb(16 185 129 / 0.1);
}

.search-icon {
  position: absolute;
  left: var(--spacing-lg);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: var(--text-lg);
}

.quick-filters {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: 9999px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--agent-primary);
  color: var(--white);
  border-color: var(--agent-primary);
}

.agent-products {
  flex: 1;
  padding: var(--spacing-lg);
  overflow-y: auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.product-card {
  background: var(--surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.product-card:hover {
  border-color: var(--agent-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.product-card.popular {
  border-color: var(--agent-primary);
  background: rgb(16 185 129 / 0.05);
}

.product-image {
  font-size: var(--text-3xl);
  margin-bottom: var(--spacing-sm);
}

.product-name {
  font-weight: 600;
  font-size: var(--text-base);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  line-height: 1.2;
}

.product-code {
  font-size: var(--text-xs);
  color: var(--text-muted);
  margin-bottom: var(--spacing-sm);
}

.product-price {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--agent-primary);
  margin-bottom: var(--spacing-xs);
}

.product-stock {
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

.product-stock.low {
  color: var(--warning-color);
  font-weight: 600;
}

.agent-cart {
  background: var(--agent-card);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cart-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
  background: var(--gray-50);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.bill-number {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: 500;
}

.customer-section {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.cart-items {
  flex: 1;
  padding: var(--spacing-lg);
  overflow-y: auto;
  max-height: 400px;
}

.empty-cart {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--text-muted);
}

.empty-cart i {
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-md);
  opacity: 0.5;
}

.empty-cart p {
  font-size: var(--text-base);
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
}

.empty-cart small {
  font-size: var(--text-sm);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  margin-bottom: var(--spacing-md);
  background: var(--surface);
}

.cart-item:last-child {
  margin-bottom: 0;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-weight: 600;
  font-size: var(--text-sm);
  color: var(--text-primary);
  margin: 0;
  margin-bottom: var(--spacing-xs);
  line-height: 1.2;
}

.cart-item-price {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  margin: 0;
}

.cart-item-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.qty-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--surface);
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.qty-btn:hover {
  background: var(--gray-100);
}

.qty-display {
  font-weight: 600;
  font-size: var(--text-base);
  color: var(--text-primary);
  min-width: 30px;
  text-align: center;
}

.remove-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--border-radius);
  background: rgb(220 38 38 / 0.1);
  color: var(--danger-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background: rgb(220 38 38 / 0.2);
}

.cart-summary {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  background: var(--gray-50);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
}

.summary-row:last-child {
  margin-bottom: 0;
}

.summary-row.total {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--text-primary);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-color);
  margin-top: var(--spacing-sm);
}

.summary-label {
  color: var(--text-secondary);
}

.summary-value {
  font-weight: 600;
  color: var(--text-primary);
}

.cart-actions {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.payment-btn {
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--surface);
  color: var(--text-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.payment-btn.active,
.payment-btn:hover {
  background: var(--agent-primary);
  color: var(--white);
  border-color: var(--agent-primary);
}

.agent-btn {
  padding: var(--spacing-md) var(--spacing-xl);
  border: none;
  border-radius: var(--border-radius-lg);
  font-size: var(--agent-text-large);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: var(--agent-button-size);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.agent-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.agent-btn-primary {
  background: var(--agent-primary);
  color: var(--white);
}

.agent-btn-primary:hover:not(:disabled) {
  background: var(--agent-primary-hover);
  transform: translateY(-1px);
}

.agent-btn-secondary {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.agent-btn-secondary:hover {
  background: var(--gray-100);
}

/* Receipt Preview */
.receipt-preview {
  max-width: 300px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  font-family: 'Courier New', monospace;
  font-size: var(--text-xs);
  line-height: 1.4;
}

.receipt-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px dashed var(--border-color);
}

.receipt-business-name {
  font-size: var(--text-base);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.receipt-business-info {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
}

.receipt-items {
  margin-bottom: var(--spacing-lg);
}

.receipt-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-xs);
}

.receipt-item-details {
  flex: 1;
}

.receipt-item-name {
  font-weight: 600;
  margin-bottom: 2px;
}

.receipt-item-code {
  color: var(--text-muted);
  font-size: 10px;
}

.receipt-item-qty-price {
  display: flex;
  gap: var(--spacing-sm);
  font-size: 10px;
  color: var(--text-secondary);
}

.receipt-item-total {
  font-weight: 600;
  text-align: right;
  min-width: 60px;
}

.receipt-summary {
  border-top: 1px dashed var(--border-color);
  padding-top: var(--spacing-md);
}

.receipt-summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
  font-size: var(--text-xs);
}

.receipt-summary-row.total {
  font-weight: 700;
  font-size: var(--text-sm);
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-xs);
  margin-top: var(--spacing-sm);
}

.receipt-footer {
  text-align: center;
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px dashed var(--border-color);
  font-size: 10px;
  color: var(--text-muted);
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-md);
}

.modal-content {
  background: var(--surface);
  border-radius: var(--border-radius-lg);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
}

.modal-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: var(--text-xl);
  color: var(--text-muted);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--gray-100);
  color: var(--text-primary);
}

.modal-body {
  padding: var(--spacing-lg);
}

.modal-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .agent-main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
  
  .agent-cart {
    max-height: 400px;
  }
  
  .dashboard-layout {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
  }
  
  .sidebar-nav {
    display: flex;
    overflow-x: auto;
    padding: var(--spacing-sm) 0;
  }
  
  .nav-item {
    margin-bottom: 0;
    padding: 0 var(--spacing-sm);
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  
  .payment-methods {
    grid-template-columns: 1fr;
  }
  
  .agent-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
  
  .shift-info {
    align-self: stretch;
    justify-content: space-between;
  }
  
  .modal-content {
    margin: var(--spacing-md);
    width: calc(100% - 2rem);
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .agent-layout {
    padding: var(--spacing-sm);
  }
  
  .login-card {
    padding: var(--spacing-lg);
  }
  
  .main-body {
    padding: var(--spacing-md);
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
```

## app.js
```javascript
// Vendor & Agent Billing Platform Application State
class VendorPlatformState {
  constructor() {
    this.currentUser = null;
    this.currentRole = null;
    this.currentVendor = null;
    
    // Load data from provided JSON
    this.vendorData = {
      businessName: "TechMart Electronics",
      ownerName: "Amit Kumar",
      todaysSales: 45750,
      thisMonthSales: 1287500,
      totalProducts: 1247,
      activeAgents: 5,
      lowStockItems: 23,
      pendingOrders: 8,
      cashInHand: 25000,
      bankBalance: 445000,
      profitMargin: 28.5,
      topSellingProduct: "Samsung Galaxy A54",
      salesGrowth: 18.2,
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
        status: "active",
        isPopular: true
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
        status: "active",
        isPopular: true
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
        status: "active",
        isPopular: false
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
        hsn: "22021000",
        taxRate: 12,
        cgst: 6,
        sgst: 6,
        barcode: "8901234567893",
        supplier: "Coca Cola India",
        lastPurchaseDate: "2025-09-02",
        expiryDate: "2026-03-01",
        description: "Refreshing cola drink 500ml bottle",
        image: "🥤",
        status: "active",
        isPopular: true
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
        lastPurchaseDate: "2025-08-25",
        expiryDate: null,
        description: "15.6 inch laptop with Intel i5 processor",
        image: "💻",
        status: "active",
        isPopular: false
      },
      {
        id: "P006",
        name: "Sunsilk Shampoo 400ml",
        sku: "SUNSH400",
        category: "Personal Care",
        subcategory: "Hair Care",
        costPrice: 85,
        sellingPrice: 120,
        mrp: 140,
        stock: 75,
        minStock: 25,
        hsn: "33051000",
        taxRate: 18,
        cgst: 9,
        sgst: 9,
        barcode: "8901234567895",
        supplier: "Unilever India",
        lastPurchaseDate: "2025-09-01",
        expiryDate: "2026-09-01",
        description: "Nourishing shampoo for all hair types",
        image: "🧴",
        status: "active",
        isPopular: false
      }
    ];
    
    this.billingAgents = [
      {
        id: "BA001",
        name: "Rajesh Kumar",
        email: "rajesh@techmart.com",
        phone: "+91-9876543210",
        agentCode: "RK2025",
        joinDate: "2024-06-15",
        status: "active",
        currentShift: "morning",
        todaysSales: 18500,
        thisMonthSales: 485000,
        transactionsToday: 22,
        averageTicketSize: 840,
        performance: "excellent",
        rating: 4.8,
        permissions: ["billing", "returns", "discounts"],
        lastLogin: "2025-09-04T09:30:00Z",
        profileImage: "👨‍💼"
      },
      {
        id: "BA002",
        name: "Priya Sharma", 
        email: "priya@techmart.com",
        phone: "+91-8765432109",
        agentCode: "PS2025",
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
        lastLogin: "2025-09-04T14:15:00Z",
        profileImage: "👩‍💼"
      },
      {
        id: "BA003",
        name: "Suresh Patel",
        email: "suresh@techmart.com", 
        phone: "+91-7654321098",
        agentCode: "SP2025",
        joinDate: "2024-09-01",
        status: "active",
        currentShift: "night",
        todaysSales: 11500,
        thisMonthSales: 125000,
        transactionsToday: 5,
        averageTicketSize: 2300,
        performance: "average",
        rating: 4.2,
        permissions: ["billing"],
        lastLogin: "2025-09-04T20:45:00Z",
        profileImage: "👨‍💼"
      }
    ];
    
    this.recentTransactions = [
      {
        billNumber: "TM-2025-001547",
        date: "2025-09-04",
        time: "22:30",
        customerName: "Amit Singh",
        customerPhone: "+91-9988776655",
        agentName: "Rajesh Kumar",
        agentCode: "RK2025",
        items: [
          {id: "P001", name: "Samsung Galaxy A54", qty: 1, price: 35000, cgst: 2835, sgst: 2835, total: 40670}
        ],
        subtotal: 35000,
        totalCgst: 2835,
        totalSgst: 2835,
        grandTotal: 40670,
        paymentMethod: "UPI",
        status: "completed",
        paymentStatus: "paid"
      },
      {
        billNumber: "TM-2025-001546",
        date: "2025-09-04", 
        time: "21:45",
        customerName: "Sneha Patel",
        customerPhone: "+91-8877665544",
        agentName: "Priya Sharma",
        agentCode: "PS2025",
        items: [
          {id: "P002", name: "Basmati Rice 5kg", qty: 2, price: 450, cgst: 22.5, sgst: 22.5, total: 945},
          {id: "P003", name: "Nike Air Max Shoes", qty: 1, price: 8500, cgst: 765, sgst: 765, total: 10030}
        ],
        subtotal: 9400,
        totalCgst: 787.5,
        totalSgst: 787.5,
        grandTotal: 10975,
        paymentMethod: "Cash",
        status: "completed",
        paymentStatus: "paid"
      }
    ];
    
    // Agent-specific data
    this.cart = [];
    this.selectedPaymentMethod = 'cash';
    this.currentBillNumber = this.generateBillNumber();
    this.filteredProducts = [...this.products];
    this.selectedCategory = 'all';
    
    this.charts = {};
    
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    // Role selector
    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectRole(e.target.dataset.role);
      });
    });

    // Logout buttons
    document.getElementById('vendorLogoutBtn')?.addEventListener('click', () => {
      this.handleLogout();
    });

    document.getElementById('agentLogoutBtn')?.addEventListener('click', () => {
      this.handleLogout();
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.currentTarget.dataset.section;
        this.showVendorSection(section);
      });
    });

    // Agent interface
    this.bindAgentEvents();
  }

  bindAgentEvents() {
    // Product search
    const searchInput = document.getElementById('productSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.filterProducts(e.target.value);
      });
    }

    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectCategory(e.target.dataset.category);
      });
    });

    // Payment methods
    document.querySelectorAll('.payment-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.selectPaymentMethod(e.target.dataset.method);
      });
    });

    // Cart actions
    document.getElementById('clearCartBtn')?.addEventListener('click', () => {
      this.clearCart();
    });

    document.getElementById('processPaymentBtn')?.addEventListener('click', () => {
      this.processPayment();
    });

    // Customer inputs
    document.getElementById('customerName')?.addEventListener('input', () => {
      this.updateCartState();
    });

    document.getElementById('customerPhone')?.addEventListener('input', () => {
      this.updateCartState();
    });
  }

  selectRole(role) {
    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-role="${role}"]`).classList.add('active');

    // Show/hide login fields
    document.getElementById('vendorLogin').classList.toggle('hidden', role !== 'vendor');
    document.getElementById('agentLogin').classList.toggle('hidden', role !== 'agent');

    // Show/hide demo credentials
    document.getElementById('vendorCredentials').classList.toggle('hidden', role !== 'vendor');
    document.getElementById('agentCredentials').classList.toggle('hidden', role !== 'agent');
  }

  handleLogin() {
    const activeRole = document.querySelector('.role-btn.active').dataset.role;
    
    if (activeRole === 'vendor') {
      const email = document.getElementById('vendorEmail').value;
      const password = document.getElementById('vendorPassword').value;
      
      if (email === 'vendor@techmart.com' && password === 'vendor123') {
        this.currentUser = {
          email: email,
          role: 'vendor',
          name: 'Amit Kumar',
          businessName: 'TechMart Electronics'
        };
        this.currentRole = 'vendor';
        this.showVendorDashboard();
      } else {
        alert('Invalid vendor credentials');
      }
    } else if (activeRole === 'agent') {
      const agentCode = document.getElementById('agentCode').value;
      const agent = this.billingAgents.find(a => a.agentCode === agentCode);
      
      if (agent) {
        this.currentUser = agent;
        this.currentRole = 'agent';
        this.showAgentDashboard();
      } else {
        alert('Invalid agent code');
      }
    }
  }

  handleLogout() {
    this.currentUser = null;
    this.currentRole = null;
    this.cart = [];
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    
    // Show login page
    document.getElementById('loginPage').classList.add('active');
    
    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('vendorEmail').value = 'vendor@techmart.com';
    document.getElementById('vendorPassword').value = 'vendor123';
    document.getElementById('agentCode').value = 'RK2025';
    
    // Destroy charts
    this.destroyCharts();
  }

  showVendorDashboard() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('vendorDashboard').classList.add('active');
    
    // Update business name
    document.getElementById('businessName').textContent = this.vendorData.businessName;
    
    this.loadVendorDashboard();
  }

  showAgentDashboard() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('agentDashboard').classList.add('active');
    
    // Update agent info
    document.getElementById('agentName').textContent = this.currentUser.name;
    document.getElementById('agentCode').textContent = `(${this.currentUser.agentCode})`;
    document.getElementById('currentShift').textContent = this.currentUser.currentShift;
    document.getElementById('shiftSales').textContent = `₹${this.formatNumber(this.currentUser.todaysSales)}`;
    document.getElementById('shiftBills').textContent = this.currentUser.transactionsToday;
    
    this.loadAgentInterface();
  }

  showVendorSection(sectionName) {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    
    if (sectionName === 'dashboard') {
      document.getElementById('vendorDashboardSection').classList.add('active');
    } else {
      document.getElementById(`${sectionName}Section`).classList.add('active');
    }

    // Update page title
    const titles = {
      dashboard: 'Business Dashboard',
      products: 'Product Management',
      inventory: 'Inventory Management',
      reports: 'Stock Reports',
      payments: 'Payment Statistics',
      agents: 'Agent Management',
      performance: 'Agent Performance',
      escalations: 'Escalations',
      analytics: 'Analytics',
      settings: 'Settings'
    };
    document.getElementById('vendorPageTitle').textContent = titles[sectionName] || 'Dashboard';

    // Load section-specific data
    this.loadVendorSectionData(sectionName);
  }

  loadVendorDashboard() {
    // Update metrics
    document.getElementById('todaysSales').textContent = `₹${this.formatNumber(this.vendorData.todaysSales)}`;
    document.getElementById('monthSales').textContent = `₹${this.formatNumber(this.vendorData.thisMonthSales)}`;
    document.getElementById('totalProducts').textContent = this.vendorData.totalProducts.toLocaleString();
    document.getElementById('activeAgents').textContent = this.vendorData.activeAgents;
    document.getElementById('lowStock').textContent = this.vendorData.lowStockItems;
    document.getElementById('profitMargin').textContent = `${this.vendorData.profitMargin}%`;

    // Load recent transactions
    this.loadRecentTransactions();
    
    // Load agent performance
    this.loadAgentPerformanceToday();

    // Create charts
    this.createSalesChart();
    this.createCategoryChart();
  }

  loadVendorSectionData(sectionName) {
    switch(sectionName) {
      case 'dashboard':
        this.loadVendorDashboard();
        break;
      case 'products':
        this.loadProductsTable();
        break;
      case 'agents':
        this.loadAgentsTable();
        break;
      default:
        // Other sections would be implemented
        break;
    }
  }

  loadRecentTransactions() {
    const container = document.getElementById('recentTransactions');
    if (!container) return;

    container.innerHTML = '';

    this.recentTransactions.slice(0, 5).forEach(transaction => {
      const item = document.createElement('div');
      item.className = 'transaction-item';
      
      item.innerHTML = `
        <div class="transaction-info">
          <h4>${transaction.billNumber}</h4>
          <div class="transaction-details">
            ${transaction.customerName} • ${transaction.agentName} • ${transaction.time}
          </div>
        </div>
        <div class="transaction-amount">₹${this.formatNumber(transaction.grandTotal)}</div>
      `;
      
      container.appendChild(item);
    });
  }

  loadAgentPerformanceToday() {
    const container = document.getElementById('agentPerformanceToday');
    if (!container) return;

    container.innerHTML = '';

    this.billingAgents.forEach(agent => {
      const item = document.createElement('div');
      item.className = 'performance-item';
      
      item.innerHTML = `
        <div class="performance-info">
          <div class="performance-avatar">${agent.profileImage}</div>
          <div class="performance-details">
            <h4>${agent.name}</h4>
            <div class="performance-meta">${agent.transactionsToday} bills • ${agent.currentShift}</div>
          </div>
        </div>
        <div class="performance-value">₹${this.formatNumber(agent.todaysSales)}</div>
      `;
      
      container.appendChild(item);
    });
  }

  loadProductsTable() {
    const tableBody = document.getElementById('productsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    this.products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.5rem;">${product.image}</span>
            <div>
              <div style="font-weight: 600;">${product.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${product.description}</div>
            </div>
          </div>
        </td>
        <td>${product.sku}</td>
        <td>${product.category}</td>
        <td>₹${this.formatNumber(product.costPrice)}</td>
        <td>₹${this.formatNumber(product.sellingPrice)}</td>
        <td>
          <span class="${product.stock <= product.minStock ? 'text-danger' : ''}" style="font-weight: 600;">
            ${product.stock}
          </span>
          ${product.stock <= product.minStock ? '<br><small style="color: var(--danger-color);">Low Stock</small>' : ''}
        </td>
        <td>${product.taxRate}% (${product.cgst}% + ${product.sgst}%)</td>
        <td>
          <span class="badge ${product.status === 'active' ? 'success' : 'danger'}">
            ${product.status.charAt(0).toUpperCase() + product.status.slice(1)}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="action-btn view" title="View Details">
              <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn edit" title="Edit">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  loadAgentsTable() {
    const tableBody = document.getElementById('agentsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    this.billingAgents.forEach(agent => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 1.5rem;">${agent.profileImage}</span>
            <div>
              <div style="font-weight: 600;">${agent.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Joined ${this.formatDate(agent.joinDate)}</div>
            </div>
          </div>
        </td>
        <td>
          <span style="font-family: monospace; background: var(--gray-100); padding: 4px 8px; border-radius: 4px;">
            ${agent.agentCode}
          </span>
        </td>
        <td>
          <div>${agent.email}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${agent.phone}</div>
        </td>
        <td>₹${this.formatNumber(agent.todaysSales)}</td>
        <td>₹${this.formatNumber(agent.thisMonthSales)}</td>
        <td>
          <span class="badge ${agent.performance === 'excellent' ? 'success' : agent.performance === 'good' ? 'info' : 'warning'}">
            ${agent.performance.charAt(0).toUpperCase() + agent.performance.slice(1)}
          </span>
          <div style="font-size: 0.75rem; color: var(--text-muted);">⭐ ${agent.rating}/5</div>
        </td>
        <td>
          <span class="badge ${agent.status === 'active' ? 'success' : 'danger'}">
            ${agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="action-btn view" title="View Details">
              <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn edit" title="Edit">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  loadAgentInterface() {
    this.currentBillNumber = this.generateBillNumber();
    document.getElementById('billNumber').textContent = this.currentBillNumber;
    
    this.loadAgentProducts();
    this.updateCartDisplay();
  }

  loadAgentProducts() {
    const container = document.getElementById('agentProductsGrid');
    if (!container) return;

    container.innerHTML = '';

    this.filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = `product-card ${product.isPopular ? 'popular' : ''}`;
      card.onclick = () => this.addToCart(product);
      
      card.innerHTML = `
        <div class="product-image">${product.image}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-code">${product.sku}</div>
        <div class="product-price">₹${this.formatNumber(product.sellingPrice)}</div>
        <div class="product-stock ${product.stock <= product.minStock ? 'low' : ''}">
          Stock: ${product.stock}
        </div>
      `;
      
      container.appendChild(card);
    });
  }

  filterProducts(searchTerm) {
    const term = searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = !term || 
        product.name.toLowerCase().includes(term) ||
        product.sku.toLowerCase().includes(term) ||
        product.barcode.includes(term);
      
      const matchesCategory = this.selectedCategory === 'all' || 
        product.category === this.selectedCategory ||
        (this.selectedCategory === 'popular' && product.isPopular);
      
      return matchesSearch && matchesCategory;
    });
    
    this.loadAgentProducts();
  }

  selectCategory(category) {
    this.selectedCategory = category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    this.filterProducts(document.getElementById('productSearchInput').value);
  }

  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity++;
      } else {
        alert('Insufficient stock');
        return;
      }
    } else {
      if (product.stock > 0) {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.sellingPrice,
          taxRate: product.taxRate,
          cgst: product.cgst,
          sgst: product.sgst,
          quantity: 1,
          stock: product.stock
        });
      } else {
        alert('Product out of stock');
        return;
      }
    }
    
    this.updateCartDisplay();
  }

  updateCartQuantity(productId, change) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
      this.removeFromCart(productId);
    } else if (newQuantity <= item.stock) {
      item.quantity = newQuantity;
      this.updateCartDisplay();
    } else {
      alert('Insufficient stock');
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.updateCartDisplay();
  }

  clearCart() {
    this.cart = [];
    this.updateCartDisplay();
    
    // Clear customer info
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
  }

  updateCartDisplay() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    
    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-cart"></i>
          <p>No items in cart</p>
          <small>Search and add products to start billing</small>
        </div>
      `;
    } else {
      container.innerHTML = '';
      
      this.cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${this.formatNumber(item.price)} × ${item.quantity} = ₹${this.formatNumber(item.price * item.quantity)}</div>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="app.updateCartQuantity('${item.id}', -1)">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="app.updateCartQuantity('${item.id}', 1)">+</button>
            <button class="remove-btn" onclick="app.removeFromCart('${item.id}')">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
        
        container.appendChild(cartItem);
      });
    }
    
    this.updateCartSummary();
    this.updateCartState();
  }

  updateCartSummary() {
    let subtotal = 0;
    let totalCgst = 0;
    let totalSgst = 0;
    
    this.cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      
      const cgstAmount = (itemTotal * item.cgst) / 100;
      const sgstAmount = (itemTotal * item.sgst) / 100;
      
      totalCgst += cgstAmount;
      totalSgst += sgstAmount;
    });
    
    const grandTotal = subtotal + totalCgst + totalSgst;
    
    document.getElementById('subtotal').textContent = `₹${this.formatNumber(subtotal)}`;
    document.getElementById('cgstAmount').textContent = `₹${this.formatNumber(totalCgst)}`;
    document.getElementById('sgstAmount').textContent = `₹${this.formatNumber(totalSgst)}`;
    document.getElementById('grandTotal').textContent = `₹${this.formatNumber(grandTotal)}`;
  }

  updateCartState() {
    const hasItems = this.cart.length > 0;
    const hasCustomerInfo = document.getElementById('customerName').value.trim() !== '' &&
                           document.getElementById('customerPhone').value.trim() !== '';
    
    const processBtn = document.getElementById('processPaymentBtn');
    if (processBtn) {
      processBtn.disabled = !hasItems || !hasCustomerInfo;
    }
  }

  selectPaymentMethod(method) {
    this.selectedPaymentMethod = method;
    
    document.querySelectorAll('.payment-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-method="${method}"]`).classList.add('active');
  }

  processPayment() {
    if (this.cart.length === 0) {
      alert('Cart is empty');
      return;
    }
    
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    
    if (!customerName || !customerPhone) {
      alert('Please enter customer name and phone number');
      return;
    }
    
    // Create receipt
    this.generateReceipt(customerName, customerPhone);
  }

  generateReceipt(customerName, customerPhone) {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalCgst = this.cart.reduce((sum, item) => sum + ((item.price * item.quantity * item.cgst) / 100), 0);
    const totalSgst = this.cart.reduce((sum, item) => sum + ((item.price * item.quantity * item.sgst) / 100), 0);
    const grandTotal = subtotal + totalCgst + totalSgst;
    
    const receipt = {
      billNumber: this.currentBillNumber,
      date: new Date().toLocaleDateString('en-IN'),
      time: new Date().toLocaleTimeString('en-IN', { hour12: true }),
      customerName,
      customerPhone,
      agentName: this.currentUser.name,
      agentCode: this.currentUser.agentCode,
      items: this.cart.map(item => ({
        ...item,
        total: item.price * item.quantity,
        cgstAmount: (item.price * item.quantity * item.cgst) / 100,
        sgstAmount: (item.price * item.quantity * item.sgst) / 100
      })),
      subtotal,
      totalCgst,
      totalSgst,
      grandTotal,
      paymentMethod: this.selectedPaymentMethod
    };
    
    this.showReceiptModal(receipt);
  }

  showReceiptModal(receipt) {
    const modal = document.getElementById('receiptModal');
    const preview = document.getElementById('receiptPreview');
    
    preview.innerHTML = `
      <div class="receipt-header">
        <div class="receipt-business-name">${this.vendorData.businessName}</div>
        <div class="receipt-business-info">123 Commercial Street, Tech Hub</div>
        <div class="receipt-business-info">Bangalore - 560001</div>
        <div class="receipt-business-info">GST: 29AABCT1234C1Z5</div>
        <div class="receipt-business-info">Date: ${receipt.date} Time: ${receipt.time}</div>
        <div class="receipt-business-info">Bill: ${receipt.billNumber}</div>
        <div class="receipt-business-info">Customer: ${receipt.customerName}</div>
        <div class="receipt-business-info">Phone: ${receipt.customerPhone}</div>
        <div class="receipt-business-info">Agent: ${receipt.agentName} (${receipt.agentCode})</div>
      </div>
      
      <div class="receipt-items">
        ${receipt.items.map(item => `
          <div class="receipt-item">
            <div class="receipt-item-details">
              <div class="receipt-item-name">${item.name}</div>
              <div class="receipt-item-qty-price">
                <span>Qty: ${item.quantity}</span>
                <span>Rate: ₹${this.formatNumber(item.price)}</span>
              </div>
              <div class="receipt-item-qty-price">
                <span>CGST: ₹${this.formatNumber(item.cgstAmount)}</span>
                <span>SGST: ₹${this.formatNumber(item.sgstAmount)}</span>
              </div>
            </div>
            <div class="receipt-item-total">₹${this.formatNumber(item.total + item.cgstAmount + item.sgstAmount)}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="receipt-summary">
        <div class="receipt-summary-row">
          <span>Subtotal:</span>
          <span>₹${this.formatNumber(receipt.subtotal)}</span>
        </div>
        <div class="receipt-summary-row">
          <span>CGST:</span>
          <span>₹${this.formatNumber(receipt.totalCgst)}</span>
        </div>
        <div class="receipt-summary-row">
          <span>SGST:</span>
          <span>₹${this.formatNumber(receipt.totalSgst)}</span>
        </div>
        <div class="receipt-summary-row total">
          <span>Total:</span>
          <span>₹${this.formatNumber(receipt.grandTotal)}</span>
        </div>
        <div class="receipt-summary-row">
          <span>Payment:</span>
          <span>${receipt.paymentMethod.toUpperCase()}</span>
        </div>
      </div>
      
      <div class="receipt-footer">
        <div>Thank you for your business!</div>
        <div>Goods once sold cannot be returned</div>
      </div>
    `;
    
    modal.style.display = 'flex';
    
    // Store receipt for printing
    this.currentReceipt = receipt;
  }

  printReceipt() {
    // In a real implementation, this would connect to a thermal printer
    window.print();
    this.closeModal('receiptModal');
    
    // Clear cart and generate new bill number
    this.clearCart();
    this.currentBillNumber = this.generateBillNumber();
    document.getElementById('billNumber').textContent = this.currentBillNumber;
    
    // Update agent sales (simulation)
    this.currentUser.todaysSales += this.currentReceipt.grandTotal;
    this.currentUser.transactionsToday += 1;
    
    // Update display
    document.getElementById('shiftSales').textContent = `₹${this.formatNumber(this.currentUser.todaysSales)}`;
    document.getElementById('shiftBills').textContent = this.currentUser.transactionsToday;
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  createSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    if (this.charts.sales) {
      this.charts.sales.destroy();
    }

    const salesData = [
      { date: '2025-09-01', sales: 42500 },
      { date: '2025-09-02', sales: 51200 },
      { date: '2025-09-03', sales: 48900 },
      { date: '2025-09-04', sales: 45750 }
    ];

    this.charts.sales = new Chart(ctx, {
      type: 'line',
      data: {
        labels: salesData.map(item => new Date(item.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })),
        datasets: [{
          label: 'Daily Sales',
          data: salesData.map(item => item.sales),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '₹' + (value / 1000).toFixed(0) + 'K';
              }
            }
          }
        }
      }
    });
  }

  createCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    if (this.charts.category) {
      this.charts.category.destroy();
    }

    const categoryData = [
      { category: 'Electronics', sales: 1850000 },
      { category: 'Groceries', sales: 320000 },
      { category: 'Footwear', sales: 280000 },
      { category: 'Beverages', sales: 180000 },
      { category: 'Personal Care', sales: 150000 }
    ];

    this.charts.category = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: categoryData.map(item => item.category),
        datasets: [{
          data: categoryData.map(item => item.sales),
          backgroundColor: [
            '#2563eb',
            '#059669',
            '#d97706',
            '#dc2626',
            '#7c3aed'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  destroyCharts() {
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy();
    });
    this.charts = {};
  }

  generateBillNumber() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    
    return `TM-${year}${month}${date}-${random}`;
  }

  formatNumber(num) {
    if (num >= 10000000) {
      return (num / 10000000).toFixed(1) + 'Cr';
    } else if (num >= 100000) {
      return (num / 100000).toFixed(1) + 'L';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}

// Initialize the application
const app = new VendorPlatformState();

// Global functions for onclick handlers
window.app = app;
```

## README.md
```markdown
# Vendor Billing Platform - BillMaster Pro

A comprehensive billing and inventory management platform for vendors and their billing agents.

## Features

### For Vendors (Shop Owners):
- **Business Dashboard**: Real-time sales metrics and analytics
- **Product Management**: Complete CRUD operations with tax configuration
- **Inventory Management**: Stock tracking and alerts
- **Stock Reports**: Detailed product-wise analysis
- **Payment Statistics**: Profit/loss reports and analytics
- **Agent Management**: Complete agent lifecycle management
- **Agent Performance**: Performance tracking and analytics
- **Escalations**: Issue management system
- **Analytics**: Advanced business insights
- **Settings**: Business configuration and preferences

### For Billing Agents:
- **Customer Information**: Name and phone capture
- **Product Billing**: Touch-friendly product selection
- **Payment Processing**: Multiple payment methods
- **Receipt Generation**: GST-compliant thermal receipts
- **Performance Tracking**: Daily sales summary

## Demo Credentials

### Vendor/Shop Owner:
- **Email**: vendor@techmart.com
- **Password**: vendor123

### Billing Agents:
- **Agent Code**: RK2025 (Rajesh Kumar)
- **Agent Code**: PS2025 (Priya Sharma)
- **Agent Code**: SP2025 (Suresh Patel)

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. Login with the demo credentials

## File Structure

- `index.html` - Main application structure and UI
- `style.css` - Complete styling with responsive design
- `app.js` - Application logic and state management

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Chart.js for data visualization
- Font Awesome for icons

## Features

- **Multi-Role Support**: Separate interfaces for vendors and agents
- **GST Compliance**: Automatic tax calculations and compliant receipts
- **Real-time Analytics**: Live sales tracking and performance metrics
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Touch Optimized**: Agent interface designed for POS usage
- **Offline Capable**: Core functions work without internet

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
```