# Super Admin Portal - Complete Code Files

## File Structure
```
super-admin-portal/
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BillMaster PaaS - Super Admin Platform</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Super Admin Login -->
    <div id="loginPage" class="page active">
        <div class="login-container">
            <div class="login-card">
                <div class="login-header">
                    <div class="admin-logo">👑</div>
                    <h1>BillMaster PaaS</h1>
                    <p>Super Admin Platform</p>
                </div>
                
                <form id="loginForm" class="login-form">
                    <div class="form-group">
                        <label class="form-label">Administrator Email</label>
                        <input type="email" class="form-control" id="adminEmail" placeholder="admin@billmaster.com" value="admin@billmaster.com" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="adminPassword" placeholder="Enter admin password" value="superadmin123" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Two-Factor Authentication</label>
                        <input type="text" class="form-control" id="twoFactorCode" placeholder="Enter 6-digit code" value="123456">
                    </div>
                    <button type="submit" class="btn btn--primary btn--full-width">Secure Login</button>
                </form>

                <div class="demo-info">
                    <p><strong>Demo Credentials:</strong></p>
                    <p>Email: admin@billmaster.com</p>
                    <p>Password: superadmin123</p>
                    <p>2FA Code: 123456</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Super Admin Dashboard -->
    <div id="dashboardPage" class="page">
        <div class="dashboard-layout">
            <!-- Sidebar -->
            <div class="sidebar">
                <div class="sidebar-header">
                    <h2><i class="fas fa-crown"></i> Super Admin</h2>
                    <p>Platform Management</p>
                </div>
                
                <nav class="sidebar-nav">
                    <div class="nav-item">
                        <a href="#" class="nav-link active" data-section="dashboard">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="vendors">
                            <i class="fas fa-store"></i>
                            <span>Vendor Management</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="onboarding">
                            <i class="fas fa-user-plus"></i>
                            <span>Vendor Onboarding</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="payments">
                            <i class="fas fa-credit-card"></i>
                            <span>Payment Management</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="moderators">
                            <i class="fas fa-users-cog"></i>
                            <span>Role Management</span>
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="#" class="nav-link" data-section="analytics">
                            <i class="fas fa-chart-line"></i>
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
                    <button id="logoutBtn" class="btn btn--secondary btn--full-width">
                        <i class="fas fa-sign-out-alt"></i>
                        Logout
                    </button>
                </div>
            </div>

            <!-- Main Content -->
            <div class="main-content">
                <div class="main-header">
                    <h1 id="pageTitle">Platform Dashboard</h1>
                    <div class="header-actions">
                        <div class="user-profile">
                            <div class="user-avatar">SA</div>
                            <div class="user-info">
                                <div class="user-name">Super Admin</div>
                                <div class="user-role">Platform Administrator</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main-body">
                    <!-- Dashboard Section -->
                    <div id="dashboardSection" class="content-section active">
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-card-icon primary">
                                    <i class="fas fa-store"></i>
                                </div>
                                <div class="stat-card-value" id="totalVendors">342</div>
                                <div class="stat-card-label">Total Vendors</div>
                                <div class="stat-card-change positive">+12% from last month</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon success">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="stat-card-value" id="activeVendors">318</div>
                                <div class="stat-card-label">Active Vendors</div>
                                <div class="stat-card-change positive">+8% from last month</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon warning">
                                    <i class="fas fa-hourglass-half"></i>
                                </div>
                                <div class="stat-card-value" id="pendingApplications">12</div>
                                <div class="stat-card-label">Pending Applications</div>
                                <div class="stat-card-change positive">-3% from last month</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon primary">
                                    <i class="fas fa-rupee-sign"></i>
                                </div>
                                <div class="stat-card-value">₹24.5L</div>
                                <div class="stat-card-label">Total Revenue</div>
                                <div class="stat-card-change positive">+23.5% from last month</div>
                            </div>
                        </div>

                        <div class="dashboard-grid">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Revenue Analytics</h3>
                                </div>
                                <div class="card-body">
                                    <canvas id="revenueChart"></canvas>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Recent Activity</h3>
                                </div>
                                <div class="card-body">
                                    <div id="recentActivity" class="activity-list">
                                        <!-- Activity items will be populated by JavaScript -->
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Plan Distribution</h3>
                                </div>
                                <div class="card-body">
                                    <canvas id="planChart"></canvas>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">System Health</h3>
                                </div>
                                <div class="card-body">
                                    <div class="health-metrics">
                                        <div class="health-item">
                                            <span class="health-label">Server Status</span>
                                            <span class="health-value success">Healthy</span>
                                        </div>
                                        <div class="health-item">
                                            <span class="health-label">Database</span>
                                            <span class="health-value success">Connected</span>
                                        </div>
                                        <div class="health-item">
                                            <span class="health-label">Payment Gateway</span>
                                            <span class="health-value success">Active</span>
                                        </div>
                                        <div class="health-item">
                                            <span class="health-label">Backup Status</span>
                                            <span class="health-value success">Up to Date</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Vendor Management Section -->
                    <div id="vendorsSection" class="content-section">
                        <div class="section-header">
                            <h2>Vendor Management</h2>
                            <button class="btn btn--primary" id="addVendorBtn">
                                <i class="fas fa-plus"></i>
                                Add New Vendor
                            </button>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">All Vendors</h3>
                                <div class="card-actions">
                                    <input type="search" class="search-input" placeholder="Search vendors..." id="vendorSearch">
                                    <select class="filter-select" id="vendorFilter">
                                        <option value="all">All Status</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-container">
                                    <table class="table" id="vendorsTable">
                                        <thead>
                                            <tr>
                                                <th>Business Name</th>
                                                <th>Owner</th>
                                                <th>Plan</th>
                                                <th>Status</th>
                                                <th>Revenue</th>
                                                <th>Agents</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="vendorsTableBody">
                                            <!-- Vendor rows will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Vendor Onboarding Section -->
                    <div id="onboardingSection" class="content-section">
                        <div class="section-header">
                            <h2>Vendor Onboarding</h2>
                            <div class="header-stats">
                                <span class="stat-badge warning">12 Pending</span>
                                <span class="stat-badge success">45 This Month</span>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Pending Applications</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-container">
                                    <table class="table" id="applicationsTable">
                                        <thead>
                                            <tr>
                                                <th>Business Name</th>
                                                <th>Owner</th>
                                                <th>Applied Date</th>
                                                <th>Plan</th>
                                                <th>Documents</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="applicationsTableBody">
                                            <!-- Application rows will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Payment Management Section -->
                    <div id="paymentsSection" class="content-section">
                        <div class="section-header">
                            <h2>Payment Management</h2>
                            <div class="header-stats">
                                <span class="stat-badge danger">15 Overdue</span>
                                <span class="stat-badge success">₹1.85L Collected</span>
                            </div>
                        </div>

                        <div class="payment-stats-grid">
                            <div class="stat-card">
                                <div class="stat-card-icon success">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="stat-card-value">₹1.85L</div>
                                <div class="stat-card-label">Monthly Collections</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon warning">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="stat-card-value">₹45K</div>
                                <div class="stat-card-label">Pending Payments</div>
                            </div>

                            <div class="stat-card">
                                <div class="stat-card-icon danger">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </div>
                                <div class="stat-card-value">15</div>
                                <div class="stat-card-label">Overdue Accounts</div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Payment Status</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-container">
                                    <table class="table" id="paymentsTable">
                                        <thead>
                                            <tr>
                                                <th>Vendor</th>
                                                <th>Plan</th>
                                                <th>Amount</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="paymentsTableBody">
                                            <!-- Payment rows will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Role Management Section -->
                    <div id="moderatorsSection" class="content-section">
                        <div class="section-header">
                            <h2>Moderator Role Management</h2>
                            <button class="btn btn--primary" id="addModeratorBtn">
                                <i class="fas fa-user-plus"></i>
                                Add Moderator
                            </button>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="table-container">
                                    <table class="table" id="moderatorsTable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Permissions</th>
                                                <th>Last Login</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody id="moderatorsTableBody">
                                            <!-- Moderator rows will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Analytics Section -->
                    <div id="analyticsSection" class="content-section">
                        <div class="section-header">
                            <h2>Platform Analytics</h2>
                            <div class="date-filter">
                                <select class="filter-select">
                                    <option value="7">Last 7 days</option>
                                    <option value="30" selected>Last 30 days</option>
                                    <option value="90">Last 90 days</option>
                                    <option value="365">Last year</option>
                                </select>
                            </div>
                        </div>

                        <div class="analytics-grid">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Revenue Trends</h3>
                                </div>
                                <div class="card-body">
                                    <canvas id="analyticsRevenueChart"></canvas>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Vendor Growth</h3>
                                </div>
                                <div class="card-body">
                                    <canvas id="vendorGrowthChart"></canvas>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Top Performing Vendors</h3>
                                </div>
                                <div class="card-body">
                                    <div class="vendor-performance-list">
                                        <!-- Performance list will be populated by JavaScript -->
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Platform Metrics</h3>
                                </div>
                                <div class="card-body">
                                    <div class="metrics-grid">
                                        <div class="metric-item">
                                            <span class="metric-label">Avg Revenue Per Vendor</span>
                                            <span class="metric-value">₹7,500</span>
                                        </div>
                                        <div class="metric-item">
                                            <span class="metric-label">Churn Rate</span>
                                            <span class="metric-value">2.3%</span>
                                        </div>
                                        <div class="metric-item">
                                            <span class="metric-label">Success Rate</span>
                                            <span class="metric-value">98.7%</span>
                                        </div>
                                        <div class="metric-item">
                                            <span class="metric-label">Avg Onboarding Time</span>
                                            <span class="metric-value">2.5 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Settings Section -->
                    <div id="settingsSection" class="content-section">
                        <div class="section-header">
                            <h2>Platform Settings</h2>
                        </div>

                        <div class="settings-grid">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Subscription Plans</h3>
                                </div>
                                <div class="card-body">
                                    <div class="plans-list" id="plansList">
                                        <!-- Plans will be populated by JavaScript -->
                                    </div>
                                    <button class="btn btn--outline mt-4" id="addPlanBtn">
                                        <i class="fas fa-plus"></i>
                                        Add New Plan
                                    </button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">System Configuration</h3>
                                </div>
                                <div class="card-body">
                                    <div class="config-list">
                                        <div class="config-item">
                                            <span class="config-label">Platform Name</span>
                                            <input type="text" class="form-control" value="BillMaster PaaS">
                                        </div>
                                        <div class="config-item">
                                            <span class="config-label">Support Email</span>
                                            <input type="email" class="form-control" value="support@billmaster.com">
                                        </div>
                                        <div class="config-item">
                                            <span class="config-label">Currency</span>
                                            <select class="form-control">
                                                <option value="INR" selected>Indian Rupee (₹)</option>
                                                <option value="USD">US Dollar ($)</option>
                                                <option value="EUR">Euro (€)</option>
                                            </select>
                                        </div>
                                        <div class="config-item">
                                            <span class="config-label">Trial Period (days)</span>
                                            <input type="number" class="form-control" value="14">
                                        </div>
                                    </div>
                                    <button class="btn btn--primary mt-4">Save Configuration</button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Payment Gateways</h3>
                                </div>
                                <div class="card-body">
                                    <div class="gateway-list">
                                        <div class="gateway-item">
                                            <div class="gateway-info">
                                                <span class="gateway-name">Razorpay</span>
                                                <span class="gateway-status success">Active</span>
                                            </div>
                                            <button class="btn btn--sm btn--outline">Configure</button>
                                        </div>
                                        <div class="gateway-item">
                                            <div class="gateway-info">
                                                <span class="gateway-name">Stripe</span>
                                                <span class="gateway-status warning">Inactive</span>
                                            </div>
                                            <button class="btn btn--sm btn--outline">Configure</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <div id="vendorModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Vendor Details</h3>
                <button class="modal-close" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="vendor-details" id="vendorDetailsContent">
                    <!-- Vendor details will be populated by JavaScript -->
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn--secondary" type="button" onclick="closeModal('vendorModal')">Close</button>
                <button class="btn btn--primary" type="button">Save Changes</button>
            </div>
        </div>
    </div>

    <div id="applicationModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Application Review</h3>
                <button class="modal-close" type="button">×</button>
            </div>
            <div class="modal-body">
                <div class="application-details" id="applicationDetailsContent">
                    <!-- Application details will be populated by JavaScript -->
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn--secondary" type="button" onclick="closeModal('applicationModal')">Close</button>
                <button class="btn btn--danger" type="button">Reject</button>
                <button class="btn btn--success" type="button">Approve</button>
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

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: var(--spacing-md);
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
  max-width: 400px;
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

.admin-logo {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
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

.header-stats {
  display: flex;
  gap: var(--spacing-md);
}

.stat-badge {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: 9999px;
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.stat-badge.success {
  background: rgb(34 197 94 / 0.1);
  color: var(--success-color);
}

.stat-badge.warning {
  background: rgb(217 119 6 / 0.1);
  color: var(--warning-color);
}

.stat-badge.danger {
  background: rgb(220 38 38 / 0.1);
  color: var(--danger-color);
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

.card-body {
  padding: var(--spacing-lg);
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

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.payment-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.settings-grid {
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

.action-btn.approve {
  background: rgb(34 197 94 / 0.1);
  color: var(--success-color);
}

.action-btn.approve:hover {
  background: rgb(34 197 94 / 0.2);
}

/* Activity List */
.activity-list {
  max-height: 300px;
  overflow-y: auto;
}

.activity-item {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-sm);
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.activity-item:hover {
  background: var(--gray-50);
  border-color: var(--border-color);
}

.activity-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  color: var(--white);
  flex-shrink: 0;
}

.activity-icon.info {
  background: var(--info-color);
}

.activity-icon.success {
  background: var(--success-color);
}

.activity-icon.warning {
  background: var(--warning-color);
}

.activity-icon.danger {
  background: var(--danger-color);
}

.activity-content {
  flex: 1;
}

.activity-description {
  font-size: var(--text-sm);
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.activity-time {
  font-size: var(--text-xs);
  color: var(--text-muted);
}

/* Health Metrics */
.health-metrics {
  display: grid;
  gap: var(--spacing-md);
}

.health-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  background: var(--gray-50);
}

.health-label {
  font-weight: 500;
  color: var(--text-primary);
}

.health-value {
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  font-size: var(--text-sm);
}

.health-value.success {
  background: rgb(34 197 94 / 0.1);
  color: var(--success-color);
}

/* Plans List */
.plans-list {
  display: grid;
  gap: var(--spacing-md);
}

.plan-item {
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
}

.plan-item:hover {
  border-color: var(--primary-color);
}

.plan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.plan-name {
  font-weight: 600;
  font-size: var(--text-lg);
  color: var(--text-primary);
}

.plan-price {
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--primary-color);
}

.plan-features {
  display: grid;
  gap: var(--spacing-sm);
}

.plan-feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.plan-feature i {
  color: var(--success-color);
}

/* Config List */
.config-list {
  display: grid;
  gap: var(--spacing-lg);
}

.config-item {
  display: grid;
  gap: var(--spacing-sm);
}

.config-label {
  font-weight: 500;
  color: var(--text-primary);
  font-size: var(--text-sm);
}

/* Gateway List */
.gateway-list {
  display: grid;
  gap: var(--spacing-md);
}

.gateway-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}

.gateway-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.gateway-name {
  font-weight: 500;
  color: var(--text-primary);
}

.gateway-status {
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
}

.gateway-status.success {
  color: var(--success-color);
}

.gateway-status.warning {
  color: var(--warning-color);
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.metric-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  background: var(--gray-50);
}

.metric-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.metric-value {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
}

/* Date Filter */
.date-filter {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

/* Vendor Performance List */
.vendor-performance-list {
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
  flex-direction: column;
  gap: var(--spacing-xs);
}

.performance-name {
  font-weight: 500;
  color: var(--text-primary);
}

.performance-type {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.performance-value {
  font-weight: 600;
  color: var(--success-color);
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
  
  .dashboard-grid,
  .analytics-grid,
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }
  
  .modal-content {
    margin: var(--spacing-md);
    width: calc(100% - 2rem);
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: var(--spacing-lg);
  }
  
  .main-body {
    padding: var(--spacing-md);
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .table-container {
    font-size: var(--text-xs);
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
```

## app.js
```javascript
// Super Admin Platform Application State
class SuperAdminApp {
  constructor() {
    this.currentUser = null;
    this.charts = {};
    
    // Platform data from the provided JSON
    this.platformMetrics = {
      totalVendors: 342,
      activeVendors: 318,
      pendingApplications: 12,
      suspendedVendors: 7,
      totalRevenue: 2450000,
      monthlyRecurringRevenue: 185000,
      averageRevenuePerUser: 7500,
      churnRate: 2.3,
      growthRate: 23.5,
      totalTransactions: 125000,
      successfulPayments: 98.7,
      overdueAccounts: 15
    };
    
    this.recentActivity = [
      {
        id: "ACT001",
        timestamp: "2025-09-04T22:30:00Z",
        type: "vendor_approval",
        description: "Vendor 'Digital Commerce Solutions' approved by Admin John",
        severity: "info",
        userId: "admin_001"
      },
      {
        id: "ACT002",
        timestamp: "2025-09-04T22:15:00Z",
        type: "payment_failed",
        description: "Payment failed for vendor 'Fashion Central' - ₹16,000",
        severity: "warning",
        userId: "system"
      },
      {
        id: "ACT003",
        timestamp: "2025-09-04T21:45:00Z",
        type: "plan_upgrade",
        description: "Vendor 'TechMart Electronics' upgraded to Premium plan",
        severity: "success",
        userId: "system"
      },
      {
        id: "ACT004",
        timestamp: "2025-09-04T21:30:00Z",
        type: "moderator_added",
        description: "New moderator 'Sarah Johnson' added with Finance Manager role",
        severity: "info",
        userId: "admin_001"
      },
      {
        id: "ACT005",
        timestamp: "2025-09-04T21:00:00Z",
        type: "settings_changed",
        description: "Platform settings updated by Super Admin",
        severity: "info",
        userId: "admin_001"
      }
    ];
    
    this.vendorApplications = [
      {
        id: "VA001",
        businessName: "Digital Commerce Solutions",
        ownerName: "Rohit Sharma",
        email: "rohit@digitalcommerce.com",
        phone: "+91-9876543210",
        gstNumber: "27AABCD1234R1ZX",
        address: "Plot 123, Sector 15, Gurgaon, Haryana - 122001",
        businessType: "E-commerce Platform",
        appliedDate: "2025-09-03",
        status: "pending",
        requestedPlan: "premium",
        projectedMonthlyRevenue: 150000,
        documents: [
          {name: "GST Certificate", status: "verified", uploadDate: "2025-09-03"},
          {name: "Business Registration", status: "verified", uploadDate: "2025-09-03"},
          {name: "Bank Statement", status: "pending", uploadDate: "2025-09-03"},
          {name: "Identity Proof", status: "verified", uploadDate: "2025-09-03"}
        ],
        notes: "Established e-commerce business with strong online presence",
        riskScore: "Low",
        creditRating: "A+"
      },
      {
        id: "VA002",
        businessName: "Metro Restaurant Chain",
        ownerName: "Priya Patel",
        email: "priya@metrorestaurants.com",
        phone: "+91-8765432109",
        gstNumber: "19AABCM9876R1Z8",
        address: "45 Commercial Street, Bangalore, Karnataka - 560001",
        businessType: "Restaurant Chain",
        appliedDate: "2025-09-02",
        status: "under_review",
        requestedPlan: "standard",
        projectedMonthlyRevenue: 85000,
        documents: [
          {name: "GST Certificate", status: "verified", uploadDate: "2025-09-02"},
          {name: "FSSAI License", status: "verified", uploadDate: "2025-09-02"},
          {name: "Trade License", status: "pending", uploadDate: "2025-09-02"}
        ],
        notes: "Multi-location restaurant chain looking for unified billing",
        riskScore: "Medium",
        creditRating: "B+"
      }
    ];
    
    this.activeVendors = [
      {
        id: "V001",
        businessName: "TechMart Electronics",
        ownerName: "Amit Kumar",
        email: "amit@techmart.com",
        currentPlan: "premium",
        subscriptionStart: "2024-06-15",
        subscriptionEnd: "2025-06-15",
        monthlyFee: 15000,
        lastPayment: "2025-08-15",
        nextDue: "2025-09-15",
        paymentStatus: "current",
        monthlyRevenue: 125000,
        agentsCount: 8,
        transactionsThisMonth: 1250,
        status: "active",
        riskLevel: "low"
      },
      {
        id: "V002",
        businessName: "Fashion Central",
        ownerName: "Sneha Reddy",
        email: "sneha@fashioncentral.com",
        currentPlan: "standard",
        subscriptionStart: "2024-08-01",
        subscriptionEnd: "2025-08-01",
        monthlyFee: 8000,
        lastPayment: "2025-07-15",
        nextDue: "2025-09-01",
        paymentStatus: "overdue",
        overdueAmount: 16000,
        daysPastDue: 3,
        monthlyRevenue: 65000,
        agentsCount: 3,
        transactionsThisMonth: 450,
        status: "active",
        riskLevel: "medium"
      }
    ];
    
    this.moderatorRoles = [
      {
        id: "MOD001",
        name: "Senior Operations Manager",
        email: "operations@billmaster.com",
        permissions: [
          "vendor_management",
          "payment_processing",
          "analytics_full",
          "settings_read"
        ],
        status: "active",
        lastLogin: "2025-09-04T20:30:00Z",
        createdDate: "2024-12-15"
      },
      {
        id: "MOD002",
        name: "Customer Support Lead",
        email: "support@billmaster.com",
        permissions: [
          "vendor_support",
          "escalation_handling",
          "analytics_basic"
        ],
        status: "active",
        lastLogin: "2025-09-04T18:45:00Z",
        createdDate: "2025-01-10"
      }
    ];
    
    this.subscriptionPlans = [
      {
        id: "basic",
        name: "Basic Plan",
        monthlyPrice: 2999,
        yearlyPrice: 29990,
        features: [
          "Up to 2 billing agents",
          "Basic inventory management",
          "Standard receipt templates",
          "Email support",
          "Up to 1000 products",
          "Basic analytics"
        ],
        limits: {
          agents: 2,
          products: 1000,
          transactions: 5000,
          storage: "1GB"
        },
        isPopular: false
      },
      {
        id: "standard",
        name: "Standard Plan",
        monthlyPrice: 7999,
        yearlyPrice: 79990,
        features: [
          "Up to 5 billing agents",
          "Advanced inventory management",
          "Custom receipt templates",
          "Phone & email support",
          "Up to 5000 products",
          "Advanced analytics",
          "Multi-location support"
        ],
        limits: {
          agents: 5,
          products: 5000,
          transactions: 25000,
          storage: "5GB"
        },
        isPopular: true
      },
      {
        id: "premium",
        name: "Premium Plan",
        monthlyPrice: 14999,
        yearlyPrice: 149990,
        features: [
          "Unlimited billing agents",
          "Complete inventory management",
          "Custom branding & templates",
          "Priority support",
          "Unlimited products",
          "Premium analytics & reports",
          "API access",
          "Third-party integrations"
        ],
        limits: {
          agents: -1,
          products: -1,
          transactions: -1,
          storage: "50GB"
        },
        isPopular: false
      }
    ];
    
    this.revenueAnalytics = {
      monthlyRevenue: [
        {month: "Jan", revenue: 1200000, vendors: 280},
        {month: "Feb", revenue: 1350000, vendors: 295},
        {month: "Mar", revenue: 1580000, vendors: 312},
        {month: "Apr", revenue: 1750000, vendors: 325},
        {month: "May", revenue: 1920000, vendors: 338},
        {month: "Jun", revenue: 2100000, vendors: 342},
        {month: "Jul", revenue: 2250000, vendors: 345},
        {month: "Aug", revenue: 2450000, vendors: 342}
      ],
      planDistribution: {
        basic: 45,
        standard: 65,
        premium: 32
      },
      paymentMethods: {
        creditCard: 45,
        bankTransfer: 35,
        digitalWallet: 15,
        other: 5
      }
    };
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.loadDashboard();
  }

  bindEvents() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', () => {
      this.handleLogout();
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.currentTarget.dataset.section;
        this.showSection(section);
      });
    });

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(button => {
      button.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
          this.closeModal(modal.id);
        }
      });
    });

    // Search and filter inputs
    const vendorSearch = document.getElementById('vendorSearch');
    if (vendorSearch) {
      vendorSearch.addEventListener('input', () => this.filterVendors());
    }

    const vendorFilter = document.getElementById('vendorFilter');
    if (vendorFilter) {
      vendorFilter.addEventListener('change', () => this.filterVendors());
    }
  }

  handleLogin() {
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const twoFactorCode = document.getElementById('twoFactorCode').value;

    // Simple validation for demo
    if (email === 'admin@billmaster.com' && password === 'superadmin123' && twoFactorCode === '123456') {
      this.currentUser = {
        email: email,
        role: 'super_admin',
        name: 'Super Admin'
      };
      
      document.getElementById('loginPage').classList.remove('active');
      document.getElementById('dashboardPage').classList.add('active');
      
      this.loadDashboard();
    } else {
      alert('Invalid credentials. Please check your email, password, and 2FA code.');
    }
  }

  handleLogout() {
    this.currentUser = null;
    document.getElementById('dashboardPage').classList.remove('active');
    document.getElementById('loginPage').classList.add('active');
    
    // Clear any sensitive data
    this.destroyCharts();
  }

  showSection(sectionName) {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(`${sectionName}Section`).classList.add('active');

    // Update page title
    const titles = {
      dashboard: 'Platform Dashboard',
      vendors: 'Vendor Management',
      onboarding: 'Vendor Onboarding',
      payments: 'Payment Management',
      moderators: 'Role Management',
      analytics: 'Platform Analytics',
      settings: 'Platform Settings'
    };
    document.getElementById('pageTitle').textContent = titles[sectionName] || 'Dashboard';

    // Load section-specific data
    this.loadSectionData(sectionName);
  }

  loadSectionData(sectionName) {
    switch(sectionName) {
      case 'dashboard':
        this.loadDashboard();
        break;
      case 'vendors':
        this.loadVendorsTable();
        break;
      case 'onboarding':
        this.loadApplicationsTable();
        break;
      case 'payments':
        this.loadPaymentsTable();
        break;
      case 'moderators':
        this.loadModeratorsTable();
        break;
      case 'analytics':
        this.loadAnalytics();
        break;
      case 'settings':
        this.loadSettings();
        break;
    }
  }

  loadDashboard() {
    // Update metrics
    document.getElementById('totalVendors').textContent = this.platformMetrics.totalVendors;
    document.getElementById('activeVendors').textContent = this.platformMetrics.activeVendors;
    document.getElementById('pendingApplications').textContent = this.platformMetrics.pendingApplications;

    // Load recent activity
    this.loadRecentActivity();

    // Create charts
    this.createRevenueChart();
    this.createPlanChart();
  }

  loadRecentActivity() {
    const activityList = document.getElementById('recentActivity');
    if (!activityList) return;

    activityList.innerHTML = '';

    this.recentActivity.slice(0, 5).forEach(activity => {
      const activityItem = document.createElement('div');
      activityItem.className = 'activity-item';

      const severityIcons = {
        info: 'fas fa-info-circle',
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-triangle',
        danger: 'fas fa-times-circle'
      };

      activityItem.innerHTML = `
        <div class="activity-icon ${activity.severity}">
          <i class="${severityIcons[activity.severity]}"></i>
        </div>
        <div class="activity-content">
          <div class="activity-description">${activity.description}</div>
          <div class="activity-time">${this.formatTimeAgo(activity.timestamp)}</div>
        </div>
      `;

      activityList.appendChild(activityItem);
    });
  }

  loadVendorsTable() {
    const tableBody = document.getElementById('vendorsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    this.activeVendors.forEach(vendor => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div>
            <div class="font-medium">${vendor.businessName}</div>
            <div class="text-sm text-muted">${vendor.email}</div>
          </div>
        </td>
        <td>${vendor.ownerName}</td>
        <td>
          <span class="badge ${vendor.currentPlan === 'premium' ? 'success' : vendor.currentPlan === 'standard' ? 'warning' : 'secondary'}">
            ${vendor.currentPlan.charAt(0).toUpperCase() + vendor.currentPlan.slice(1)}
          </span>
        </td>
        <td>
          <span class="badge ${vendor.status === 'active' ? 'success' : 'danger'}">
            ${vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
          </span>
        </td>
        <td>₹${this.formatNumber(vendor.monthlyRevenue)}</td>
        <td>${vendor.agentsCount}</td>
        <td>
          <div class="action-buttons">
            <button class="action-btn view" onclick="app.viewVendor('${vendor.id}')" title="View Details">
              <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn edit" onclick="app.editVendor('${vendor.id}')" title="Edit">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete" onclick="app.deleteVendor('${vendor.id}')" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  loadApplicationsTable() {
    const tableBody = document.getElementById('applicationsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    this.vendorApplications.forEach(application => {
      const row = document.createElement('tr');
      const verifiedDocs = application.documents.filter(doc => doc.status === 'verified').length;
      const totalDocs = application.documents.length;

      row.innerHTML = `
        <td>
          <div>
            <div class="font-medium">${application.businessName}</div>
            <div class="text-sm text-muted">${application.businessType}</div>
          </div>
        </td>
        <td>
          <div>
            <div>${application.ownerName}</div>
            <div class="text-sm text-muted">${application.email}</div>
          </div>
        </td>
        <td>${this.formatDate(application.appliedDate)}</td>
        <td>
          <span class="badge ${application.requestedPlan === 'premium' ? 'success' : application.requestedPlan === 'standard' ? 'warning' : 'secondary'}">
            ${application.requestedPlan.charAt(0).toUpperCase() + application.requestedPlan.slice(1)}
          </span>
        </td>
        <td>
          <span class="text-sm ${verifiedDocs === totalDocs ? 'text-success' : 'text-warning'}">
            ${verifiedDocs}/${totalDocs} verified
          </span>
        </td>
        <td>
          <span class="badge ${application.status === 'pending' ? 'warning' : application.status === 'under_review' ? 'info' : 'success'}">
            ${application.status.replace('_', ' ').charAt(0).toUpperCase() + application.status.replace('_', ' ').slice(1)}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="action-btn view" onclick="app.viewApplication('${application.id}')" title="View Details">
              <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn approve" onclick="app.approveApplication('${application.id}')" title="Approve">
              <i class="fas fa-check"></i>
            </button>
            <button class="action-btn delete" onclick="app.rejectApplication('${application.id}')" title="Reject">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  loadPaymentsTable() {
    const tableBody = document.getElementById('paymentsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    this.activeVendors.forEach(vendor => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div>
            <div class="font-medium">${vendor.businessName}</div>
            <div class="text-sm text-muted">${vendor.ownerName}</div>
          </div>
        </td>
        <td>
          <span class="badge ${vendor.currentPlan === 'premium' ? 'success' : vendor.currentPlan === 'standard' ? 'warning' : 'secondary'}">
            ${vendor.currentPlan.charAt(0).toUpperCase() + vendor.currentPlan.slice(1)}
          </span>
        </td>
        <td>₹${this.formatNumber(vendor.monthlyFee)}</td>
        <td>${this.formatDate(vendor.nextDue)}</td>
        <td>
          <span class="badge ${vendor.paymentStatus === 'current' ? 'success' : vendor.paymentStatus === 'overdue' ? 'danger' : 'warning'}">
            ${vendor.paymentStatus.charAt(0).toUpperCase() + vendor.paymentStatus.slice(1)}
            ${vendor.overdueAmount ? ` (₹${this.formatNumber(vendor.overdueAmount)})` : ''}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="action-btn view" onclick="app.viewPaymentDetails('${vendor.id}')" title="View Details">
              <i class="fas fa-eye"></i>
            </button>
            ${vendor.paymentStatus === 'overdue' ? `
              <button class="action-btn warning" onclick="app.sendPaymentReminder('${vendor.id}')" title="Send Reminder">
                <i class="fas fa-bell"></i>
              </button>
            ` : ''}
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  loadModeratorsTable() {
    const tableBody = document.getElementById('moderatorsTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    this.moderatorRoles.forEach(moderator => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${moderator.name}</td>
        <td>${moderator.email}</td>
        <td>Operations Manager</td>
        <td>
          <div class="permissions-list">
            ${moderator.permissions.map(perm => 
              `<span class="badge secondary">${perm.replace('_', ' ')}</span>`
            ).join(' ')}
          </div>
        </td>
        <td>${this.formatTimeAgo(moderator.lastLogin)}</td>
        <td>
          <span class="badge ${moderator.status === 'active' ? 'success' : 'danger'}">
            ${moderator.status.charAt(0).toUpperCase() + moderator.status.slice(1)}
          </span>
        </td>
        <td>
          <div class="action-buttons">
            <button class="action-btn edit" onclick="app.editModerator('${moderator.id}')" title="Edit">
              <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn delete" onclick="app.deleteModerator('${moderator.id}')" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  loadAnalytics() {
    this.createAnalyticsCharts();
    this.loadTopPerformingVendors();
  }

  loadSettings() {
    this.loadSubscriptionPlans();
  }

  loadSubscriptionPlans() {
    const plansList = document.getElementById('plansList');
    if (!plansList) return;

    plansList.innerHTML = '';

    this.subscriptionPlans.forEach(plan => {
      const planElement = document.createElement('div');
      planElement.className = 'plan-item';
      planElement.innerHTML = `
        <div class="plan-header">
          <div class="plan-name">${plan.name}</div>
          <div class="plan-price">₹${this.formatNumber(plan.monthlyPrice)}/mo</div>
        </div>
        <div class="plan-features">
          ${plan.features.map(feature => 
            `<div class="plan-feature">
              <i class="fas fa-check"></i>
              <span>${feature}</span>
            </div>`
          ).join('')}
        </div>
      `;
      plansList.appendChild(planElement);
    });
  }

  loadTopPerformingVendors() {
    const performanceList = document.querySelector('.vendor-performance-list');
    if (!performanceList) return;

    const topVendors = [...this.activeVendors]
      .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
      .slice(0, 5);

    performanceList.innerHTML = '';

    topVendors.forEach((vendor, index) => {
      const performanceItem = document.createElement('div');
      performanceItem.className = 'performance-item';
      performanceItem.innerHTML = `
        <div class="performance-info">
          <div class="performance-name">#${index + 1} ${vendor.businessName}</div>
          <div class="performance-type">${vendor.currentPlan} plan</div>
        </div>
        <div class="performance-value">₹${this.formatNumber(vendor.monthlyRevenue)}</div>
      `;
      performanceList.appendChild(performanceItem);
    });
  }

  createRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    if (this.charts.revenue) {
      this.charts.revenue.destroy();
    }

    this.charts.revenue = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.revenueAnalytics.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Revenue',
          data: this.revenueAnalytics.monthlyRevenue.map(item => item.revenue),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          borderWidth: 2,
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
                return '₹' + (value / 1000000).toFixed(1) + 'M';
              }
            }
          }
        }
      }
    });
  }

  createPlanChart() {
    const ctx = document.getElementById('planChart');
    if (!ctx) return;

    if (this.charts.plan) {
      this.charts.plan.destroy();
    }

    this.charts.plan = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Basic', 'Standard', 'Premium'],
        datasets: [{
          data: [
            this.revenueAnalytics.planDistribution.basic,
            this.revenueAnalytics.planDistribution.standard,
            this.revenueAnalytics.planDistribution.premium
          ],
          backgroundColor: [
            '#64748b',
            '#d97706',
            '#059669'
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

  createAnalyticsCharts() {
    this.createAnalyticsRevenueChart();
    this.createVendorGrowthChart();
  }

  createAnalyticsRevenueChart() {
    const ctx = document.getElementById('analyticsRevenueChart');
    if (!ctx) return;

    if (this.charts.analyticsRevenue) {
      this.charts.analyticsRevenue.destroy();
    }

    this.charts.analyticsRevenue = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.revenueAnalytics.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Revenue',
          data: this.revenueAnalytics.monthlyRevenue.map(item => item.revenue),
          backgroundColor: '#2563eb',
          borderRadius: 4
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
                return '₹' + (value / 1000000).toFixed(1) + 'M';
              }
            }
          }
        }
      }
    });
  }

  createVendorGrowthChart() {
    const ctx = document.getElementById('vendorGrowthChart');
    if (!ctx) return;

    if (this.charts.vendorGrowth) {
      this.charts.vendorGrowth.destroy();
    }

    this.charts.vendorGrowth = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.revenueAnalytics.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Active Vendors',
          data: this.revenueAnalytics.monthlyRevenue.map(item => item.vendors),
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.1)',
          borderWidth: 2,
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
            beginAtZero: true
          }
        }
      }
    });
  }

  // Action methods
  viewVendor(vendorId) {
    const vendor = this.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      this.showVendorModal(vendor);
    }
  }

  editVendor(vendorId) {
    console.log('Edit vendor:', vendorId);
    // Implement edit functionality
  }

  deleteVendor(vendorId) {
    if (confirm('Are you sure you want to delete this vendor?')) {
      console.log('Delete vendor:', vendorId);
      // Implement delete functionality
    }
  }

  viewApplication(applicationId) {
    const application = this.vendorApplications.find(a => a.id === applicationId);
    if (application) {
      this.showApplicationModal(application);
    }
  }

  approveApplication(applicationId) {
    if (confirm('Are you sure you want to approve this application?')) {
      console.log('Approve application:', applicationId);
      // Implement approval functionality
    }
  }

  rejectApplication(applicationId) {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
      console.log('Reject application:', applicationId, 'Reason:', reason);
      // Implement rejection functionality
    }
  }

  viewPaymentDetails(vendorId) {
    console.log('View payment details for vendor:', vendorId);
    // Implement payment details view
  }

  sendPaymentReminder(vendorId) {
    console.log('Send payment reminder to vendor:', vendorId);
    // Implement payment reminder functionality
  }

  editModerator(moderatorId) {
    console.log('Edit moderator:', moderatorId);
    // Implement edit functionality
  }

  deleteModerator(moderatorId) {
    if (confirm('Are you sure you want to delete this moderator?')) {
      console.log('Delete moderator:', moderatorId);
      // Implement delete functionality
    }
  }

  showVendorModal(vendor) {
    const modal = document.getElementById('vendorModal');
    const content = document.getElementById('vendorDetailsContent');
    
    content.innerHTML = `
      <div class="vendor-details">
        <h4>${vendor.businessName}</h4>
        <p><strong>Owner:</strong> ${vendor.ownerName}</p>
        <p><strong>Email:</strong> ${vendor.email}</p>
        <p><strong>Plan:</strong> ${vendor.currentPlan}</p>
        <p><strong>Monthly Revenue:</strong> ₹${this.formatNumber(vendor.monthlyRevenue)}</p>
        <p><strong>Agents:</strong> ${vendor.agentsCount}</p>
        <p><strong>Status:</strong> ${vendor.status}</p>
      </div>
    `;
    
    modal.style.display = 'flex';
  }

  showApplicationModal(application) {
    const modal = document.getElementById('applicationModal');
    const content = document.getElementById('applicationDetailsContent');
    
    content.innerHTML = `
      <div class="application-details">
        <h4>${application.businessName}</h4>
        <p><strong>Owner:</strong> ${application.ownerName}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone}</p>
        <p><strong>GST Number:</strong> ${application.gstNumber}</p>
        <p><strong>Address:</strong> ${application.address}</p>
        <p><strong>Business Type:</strong> ${application.businessType}</p>
        <p><strong>Requested Plan:</strong> ${application.requestedPlan}</p>
        <p><strong>Projected Revenue:</strong> ₹${this.formatNumber(application.projectedMonthlyRevenue)}</p>
        <p><strong>Risk Score:</strong> ${application.riskScore}</p>
        <p><strong>Credit Rating:</strong> ${application.creditRating}</p>
        <p><strong>Notes:</strong> ${application.notes}</p>
        
        <h5>Documents:</h5>
        <ul>
          ${application.documents.map(doc => 
            `<li>${doc.name} - <span class="badge ${doc.status === 'verified' ? 'success' : 'warning'}">${doc.status}</span></li>`
          ).join('')}
        </ul>
      </div>
    `;
    
    modal.style.display = 'flex';
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
    }
  }

  filterVendors() {
    const searchTerm = document.getElementById('vendorSearch').value.toLowerCase();
    const statusFilter = document.getElementById('vendorFilter').value;
    
    // Filter logic would go here
    console.log('Filter vendors:', searchTerm, statusFilter);
  }

  destroyCharts() {
    Object.values(this.charts).forEach(chart => {
      if (chart) chart.destroy();
    });
    this.charts = {};
  }

  // Utility methods
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

  formatTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInSeconds = Math.floor((now - time) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  }
}

// Initialize the application
const app = new SuperAdminApp();

// Global functions for onclick handlers
window.app = app;
```

## README.md
```markdown
# Super Admin Portal - BillMaster PaaS

A comprehensive platform management interface for the BillMaster PaaS billing system.

## Features

- **Platform Dashboard**: Real-time metrics and analytics
- **Vendor Management**: Complete CRUD operations for vendor accounts
- **Vendor Onboarding**: Streamlined application review and approval process
- **Payment Management**: Subscription tracking and payment monitoring
- **Role Management**: Moderator role creation and permission management
- **Analytics**: Advanced platform-wide analytics and reporting
- **Settings**: System configuration and subscription plan management

## Demo Credentials

- **Email**: admin@billmaster.com
- **Password**: superadmin123
- **2FA Code**: 123456

## Installation

1. Clone the repository
2. Open `index.html` in a web browser
3. Login with the demo credentials

## File Structure

- `index.html` - Main application structure
- `style.css` - Complete styling and responsive design
- `app.js` - Application logic and data management

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Chart.js for data visualization
- Font Awesome for icons

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
```