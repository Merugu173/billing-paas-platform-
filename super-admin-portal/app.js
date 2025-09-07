// Super Admin Platform Application State
class SuperAdminState {
  constructor() {
    this.currentUser = null;
    this.currentRole = null;
    
    // Load platform data from provided JSON
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
        timestamp: "2025-09-06T22:30:00Z",
        type: "vendor_approval",
        description: "Vendor 'Digital Commerce Solutions' approved by Admin John",
        severity: "info"
      },
      {
        id: "ACT002", 
        timestamp: "2025-09-06T22:15:00Z",
        type: "payment_failed",
        description: "Payment failed for vendor 'Fashion Central' - ₹16,000",
        severity: "warning"
      },
      {
        id: "ACT003",
        timestamp: "2025-09-06T21:45:00Z", 
        type: "plan_upgrade",
        description: "Vendor 'TechMart Electronics' upgraded to Premium plan",
        severity: "success"
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
        appliedDate: "2025-09-03",
        status: "pending",
        requestedPlan: "premium",
        projectedRevenue: 150000
      },
      {
        id: "VA002",
        businessName: "Metro Restaurant Chain", 
        ownerName: "Priya Patel",
        email: "priya@metrorestaurants.com",
        phone: "+91-8765432109",
        gstNumber: "19AABCM9876R1Z8",
        appliedDate: "2025-09-02",
        status: "under_review",
        requestedPlan: "standard",
        projectedRevenue: 85000
      }
    ];
    
    this.activeVendors = [
      {
        id: "V001",
        businessName: "TechMart Electronics",
        ownerName: "Amit Kumar",
        email: "amit@techmart.com",
        currentPlan: "premium",
        monthlyFee: 15000,
        paymentStatus: "current",
        monthlyRevenue: 125000,
        agentsCount: 8,
        status: "active",
        joinDate: "2024-06-15",
        lastPayment: "2025-09-01"
      },
      {
        id: "V002",
        businessName: "Fashion Central",
        ownerName: "Sneha Reddy", 
        email: "sneha@fashioncentral.com",
        currentPlan: "standard",
        monthlyFee: 8000,
        paymentStatus: "overdue",
        overdueAmount: 16000,
        monthlyRevenue: 65000,
        agentsCount: 3,
        status: "active",
        joinDate: "2024-08-20",
        lastPayment: "2025-08-01"
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
          "Up to 1000 products"
        ]
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
          "Advanced analytics"
        ]
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
          "API access"
        ]
      }
    ];
    
    this.moderators = [
      {
        id: "MOD001",
        name: "John Smith",
        email: "john@billmaster.com",
        role: "Senior Moderator",
        permissions: ["vendor_approval", "payment_management", "user_support"],
        status: "active",
        joinDate: "2024-01-15",
        lastActive: "2025-09-06T20:30:00Z"
      },
      {
        id: "MOD002",
        name: "Sarah Wilson",
        email: "sarah@billmaster.com",
        role: "Payment Specialist",
        permissions: ["payment_management", "billing_support"],
        status: "active",
        joinDate: "2024-03-10",
        lastActive: "2025-09-06T18:45:00Z"
      }
    ];
    
    this.auditLogs = [
      {
        id: "AUD001",
        timestamp: "2025-09-06T22:30:00Z",
        action: "vendor_approval",
        user: "John Smith",
        description: "Approved vendor application for Digital Commerce Solutions",
        ipAddress: "192.168.1.100",
        status: "success"
      },
      {
        id: "AUD002",
        timestamp: "2025-09-06T22:15:00Z",
        action: "payment_reminder",
        user: "Sarah Wilson", 
        description: "Sent payment reminder to Fashion Central",
        ipAddress: "192.168.1.101",
        status: "success"
      }
    ];
    
    // Charts storage
    this.charts = {};
  }
}

// Global app instance
const app = new SuperAdminState();

// Utility Functions
function formatCurrency(amount) {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
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
  static login(credentials) {
    console.log('Admin login attempt:', credentials);
    
    // Demo credentials validation
    if (credentials.email === 'admin@billmaster.com' && 
        credentials.password === 'superadmin123' &&
        credentials.twoFactorCode === '123456') {
      
      app.currentUser = { 
        name: 'Super Admin', 
        email: credentials.email,
        role: 'super_admin'
      };
      app.currentRole = 'super_admin';
      console.log('Admin login successful');
      return true;
    }
    
    console.log('Admin login failed');
    return false;
  }

  static logout() {
    app.currentUser = null;
    app.currentRole = null;
    PageManager.showPage('loginPage');
    showToast('Logged out successfully', 'info');
  }
}

// Page Manager
class PageManager {
  static showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      console.log('Page shown successfully:', pageId);
    } else {
      console.error('Page not found:', pageId);
    }
  }

  static showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Remove active from all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    
    // Activate corresponding nav button
    const sectionName = sectionId.replace('Section', '');
    const navBtn = document.querySelector(`[data-section="${sectionName}"]`);
    if (navBtn) {
      navBtn.classList.add('active');
    }
  }
}

// Dashboard Manager
class DashboardManager {
  static updateDashboard() {
    console.log('Updating dashboard');
    
    // Update current date/time
    const currentDateTimeElement = document.getElementById('currentDateTime');
    if (currentDateTimeElement) {
      currentDateTimeElement.textContent = formatDateTime(new Date());
    }
    
    // Update metrics display
    const metrics = app.platformMetrics;
    const elements = {
      'totalVendors': metrics.totalVendors,
      'activeVendors': metrics.activeVendors,
      'totalRevenue': formatCurrency(metrics.totalRevenue),
      'mrr': formatCurrency(metrics.monthlyRecurringRevenue),
      'pendingApplications': metrics.pendingApplications,
      'overdueAccounts': metrics.overdueAccounts
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = value;
      }
    });
    
    DashboardManager.renderRecentActivity();
  }
  
  static renderRecentActivity() {
    const container = document.getElementById('recentActivityList');
    if (!container) return;
    
    container.innerHTML = app.recentActivity.map(activity => `
      <div class="activity-item">
        <div class="activity-info">
          <h5>${activity.type.replace('_', ' ').toUpperCase()}</h5>
          <p>${activity.description}</p>
        </div>
        <div class="activity-time">
          ${formatDateTime(activity.timestamp)}
        </div>
      </div>
    `).join('');
  }

  static createRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    if (app.charts.revenueChart) {
      app.charts.revenueChart.destroy();
    }

    const monthlyData = [145000, 155000, 168000, 172000, 178000, 185000];
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    app.charts.revenueChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Monthly Revenue',
          data: monthlyData,
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1FB8CD',
          pointBorderColor: '#1FB8CD',
          pointRadius: 6
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

  static createVendorStatusChart() {
    const ctx = document.getElementById('vendorStatusChart');
    if (!ctx) return;

    if (app.charts.vendorStatusChart) {
      app.charts.vendorStatusChart.destroy();
    }

    app.charts.vendorStatusChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Suspended', 'Pending'],
        datasets: [{
          data: [318, 7, 12],
          backgroundColor: ['#1FB8CD', '#B4413C', '#FFC185']
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

  static createSubscriptionChart() {
    const ctx = document.getElementById('subscriptionChart');
    if (!ctx) return;

    if (app.charts.subscriptionChart) {
      app.charts.subscriptionChart.destroy();
    }

    app.charts.subscriptionChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Basic', 'Standard', 'Premium'],
        datasets: [{
          label: 'Subscribers',
          data: [125, 156, 61],
          backgroundColor: ['#FFC185', '#1FB8CD', '#5D878F']
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
            beginAtZero: true
          }
        }
      }
    });
  }
}

// Vendor Manager
class VendorManager {
  static renderVendors() {
    const tbody = document.querySelector('#vendorsTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = app.activeVendors.map(vendor => `
      <tr>
        <td><input type="checkbox" class="vendor-checkbox" data-id="${vendor.id}"></td>
        <td>
          <div>
            <strong>${vendor.businessName}</strong>
            <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
              Owner: ${vendor.ownerName}
            </div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
              Email: ${vendor.email} | Agents: ${vendor.agentsCount}
            </div>
          </div>
        </td>
        <td>
          <div>
            <strong>${vendor.currentPlan.toUpperCase()}</strong>
            <div style="font-size: 12px; color: var(--color-primary); margin-top: 4px;">
              ${formatCurrency(vendor.monthlyFee)}/month
            </div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">
              Revenue: ${formatCurrency(vendor.monthlyRevenue)}
            </div>
          </div>
        </td>
        <td>
          <span class="status status--${vendor.paymentStatus === 'current' ? 'success' : 'error'}">
            ${vendor.paymentStatus === 'current' ? 'Current' : 'Overdue'}
          </span>
          ${vendor.paymentStatus === 'overdue' ? `<div style="font-size: 11px; color: var(--color-error); margin-top: 4px;">Due: ${formatCurrency(vendor.overdueAmount)}</div>` : ''}
        </td>
        <td>
          <div style="font-size: 12px;">
            <div>Joined: ${formatDate(vendor.joinDate)}</div>
            <div style="margin-top: 4px; color: var(--color-text-secondary);">
              Last Payment: ${formatDate(vendor.lastPayment)}
            </div>
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            <button class="btn btn--sm btn--secondary" onclick="VendorManager.viewDetails('${vendor.id}')">
              View
            </button>
            <button class="btn btn--sm btn--outline" onclick="VendorManager.editVendor('${vendor.id}')">
              Edit
            </button>
            <button class="btn btn--sm btn--${vendor.status === 'active' ? 'warning' : 'success'}" onclick="VendorManager.toggleStatus('${vendor.id}')">
              ${vendor.status === 'active' ? 'Suspend' : 'Activate'}
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }
  
  static viewDetails(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (!vendor) return;
    
    const modal = document.getElementById('vendorDetailsModal');
    const content = document.getElementById('vendorDetailsContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
      <div class="vendor-details">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4>Business Information</h4>
            <p><strong>Business Name:</strong> ${vendor.businessName}</p>
            <p><strong>Owner:</strong> ${vendor.ownerName}</p>
            <p><strong>Email:</strong> ${vendor.email}</p>
            <p><strong>Join Date:</strong> ${formatDate(vendor.joinDate)}</p>
          </div>
          <div>
            <h4>Subscription Details</h4>
            <p><strong>Current Plan:</strong> ${vendor.currentPlan.toUpperCase()}</p>
            <p><strong>Monthly Fee:</strong> ${formatCurrency(vendor.monthlyFee)}</p>
            <p><strong>Payment Status:</strong> <span class="status status--${vendor.paymentStatus === 'current' ? 'success' : 'error'}">${vendor.paymentStatus}</span></p>
            <p><strong>Agents:</strong> ${vendor.agentsCount}</p>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <h4>Performance Metrics</h4>
          <p><strong>Monthly Revenue:</strong> ${formatCurrency(vendor.monthlyRevenue)}</p>
          <p><strong>Status:</strong> <span class="status status--success">${vendor.status.toUpperCase()}</span></p>
          ${vendor.paymentStatus === 'overdue' ? `<p><strong>Overdue Amount:</strong> <span style="color: var(--color-error);">${formatCurrency(vendor.overdueAmount)}</span></p>` : ''}
        </div>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }
  
  static addVendor() {
    showToast('Add Vendor functionality would be available here', 'info');
  }
  
  static editVendor(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      showToast(`Edit functionality for ${vendor.businessName}`, 'info');
    }
  }
  
  static toggleStatus(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      vendor.status = vendor.status === 'active' ? 'suspended' : 'active';
      VendorManager.renderVendors();
      showToast(`${vendor.businessName} ${vendor.status === 'active' ? 'activated' : 'suspended'}`, 'success');
    }
  }
  
  static exportVendors() {
    showToast('Vendor export functionality would be available here', 'info');
  }
  
  static approveVendor() {
    showToast('Vendor approved successfully', 'success');
    const modal = document.getElementById('vendorDetailsModal');
    if (modal) modal.classList.add('hidden');
  }
  
  static suspendVendor() {
    showToast('Vendor suspended successfully', 'warning');
    const modal = document.getElementById('vendorDetailsModal');
    if (modal) modal.classList.add('hidden');
  }
}

// Application Manager
class ApplicationManager {
  static renderApplications() {
    const grid = document.getElementById('applicationsGrid');
    if (!grid) return;
    
    grid.innerHTML = app.vendorApplications.map(application => `
      <div class="application-card">
        <div class="application-header">
          <div class="application-title">
            <h4>${application.businessName}</h4>
            <p>${application.ownerName}</p>
          </div>
          <span class="status status--${application.status === 'pending' ? 'warning' : 'info'}">
            ${application.status.replace('_', ' ').toUpperCase()}
          </span>
        </div>
        
        <div class="application-details">
          <p><strong>Email:</strong> ${application.email}</p>
          <p><strong>Phone:</strong> ${application.phone}</p>
          <p><strong>GST Number:</strong> ${application.gstNumber}</p>
          <p><strong>Applied Date:</strong> ${formatDate(application.appliedDate)}</p>
          <p><strong>Requested Plan:</strong> ${application.requestedPlan.toUpperCase()}</p>
          <p><strong>Projected Revenue:</strong> ${formatCurrency(application.projectedRevenue)}</p>
        </div>
        
        <div class="application-actions">
          <button class="btn btn--sm btn--secondary" onclick="ApplicationManager.reviewApplication('${application.id}')">
            Review
          </button>
          <button class="btn btn--sm btn--success" onclick="ApplicationManager.quickApprove('${application.id}')">
            Quick Approve
          </button>
          <button class="btn btn--sm btn--error" onclick="ApplicationManager.quickReject('${application.id}')">
            Reject
          </button>
        </div>
      </div>
    `).join('');
  }
  
  static reviewApplication(applicationId) {
    const application = app.vendorApplications.find(a => a.id === applicationId);
    if (!application) return;
    
    const modal = document.getElementById('applicationReviewModal');
    const content = document.getElementById('applicationReviewContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
      <div class="application-review">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4>Business Information</h4>
            <p><strong>Business Name:</strong> ${application.businessName}</p>
            <p><strong>Owner Name:</strong> ${application.ownerName}</p>
            <p><strong>Email:</strong> ${application.email}</p>
            <p><strong>Phone:</strong> ${application.phone}</p>
            <p><strong>GST Number:</strong> ${application.gstNumber}</p>
          </div>
          <div>
            <h4>Application Details</h4>
            <p><strong>Applied Date:</strong> ${formatDate(application.appliedDate)}</p>
            <p><strong>Requested Plan:</strong> ${application.requestedPlan.toUpperCase()}</p>
            <p><strong>Projected Revenue:</strong> ${formatCurrency(application.projectedRevenue)}</p>
            <p><strong>Current Status:</strong> <span class="status status--warning">${application.status.replace('_', ' ').toUpperCase()}</span></p>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <h4>Review Notes</h4>
          <textarea class="form-control" rows="3" placeholder="Add review notes..."></textarea>
        </div>
      </div>
    `;
    
    modal.classList.remove('hidden');
  }
  
  static quickApprove(applicationId) {
    const application = app.vendorApplications.find(a => a.id === applicationId);
    if (application) {
      application.status = 'approved';
      ApplicationManager.renderApplications();
      showToast(`${application.businessName} approved successfully`, 'success');
    }
  }
  
  static quickReject(applicationId) {
    const application = app.vendorApplications.find(a => a.id === applicationId);
    if (application) {
      application.status = 'rejected';
      ApplicationManager.renderApplications();
      showToast(`${application.businessName} application rejected`, 'warning');
    }
  }
  
  static approveApplication() {
    showToast('Application approved successfully', 'success');
    const modal = document.getElementById('applicationReviewModal');
    if (modal) modal.classList.add('hidden');
  }
  
  static rejectApplication() {
    showToast('Application rejected', 'warning');
    const modal = document.getElementById('applicationReviewModal');
    if (modal) modal.classList.add('hidden');
  }
  
  static exportApplications() {
    showToast('Applications export functionality would be available here', 'info');
  }
}

// Payment Manager
class PaymentManager {
  static renderPayments() {
    const tbody = document.querySelector('#paymentsTable tbody');
    if (!tbody) return;
    
    const allVendors = app.activeVendors;
    
    tbody.innerHTML = allVendors.map(vendor => `
      <tr>
        <td>
          <div>
            <strong>${vendor.businessName}</strong>
            <div style="font-size: 12px; color: var(--color-text-secondary);">
              ${vendor.ownerName}
            </div>
          </div>
        </td>
        <td>${vendor.currentPlan.toUpperCase()}</td>
        <td>${formatCurrency(vendor.monthlyFee)}</td>
        <td>${formatDate(vendor.lastPayment)}</td>
        <td>
          <span class="status status--${vendor.paymentStatus === 'current' ? 'success' : 'error'}">
            ${vendor.paymentStatus === 'current' ? 'Current' : 'Overdue'}
          </span>
        </td>
        <td>
          <div style="display: flex; gap: 4px;">
            ${vendor.paymentStatus === 'overdue' ? 
              `<button class="btn btn--sm btn--warning" onclick="PaymentManager.sendReminder('${vendor.id}')">Send Reminder</button>` : 
              `<button class="btn btn--sm btn--secondary" onclick="PaymentManager.viewPaymentHistory('${vendor.id}')">History</button>`
            }
            <button class="btn btn--sm btn--outline" onclick="PaymentManager.adjustPayment('${vendor.id}')">Adjust</button>
          </div>
        </td>
      </tr>
    `).join('');
  }
  
  static sendReminder(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      showToast(`Payment reminder sent to ${vendor.businessName}`, 'success');
    }
  }
  
  static viewPaymentHistory(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      showToast(`Payment history for ${vendor.businessName}`, 'info');
    }
  }
  
  static adjustPayment(vendorId) {
    const vendor = app.activeVendors.find(v => v.id === vendorId);
    if (vendor) {
      showToast(`Payment adjustment for ${vendor.businessName}`, 'info');
    }
  }
  
  static sendDunningEmails() {
    const overdueVendors = app.activeVendors.filter(v => v.paymentStatus === 'overdue');
    showToast(`Sending payment reminders to ${overdueVendors.length} vendors`, 'info');
  }
  
  static exportPayments() {
    showToast('Payment export functionality would be available here', 'info');
  }
}

// Role Manager
class RoleManager {
  static renderRoles() {
    const grid = document.getElementById('rolesGrid');
    if (!grid) return;
    
    grid.innerHTML = app.moderators.map(moderator => `
      <div class="role-card">
        <div class="role-header">
          <div>
            <h4 class="role-name">${moderator.name}</h4>
            <p class="role-email">${moderator.email}</p>
          </div>
          <span class="status status--${moderator.status === 'active' ? 'success' : 'error'}">
            ${moderator.status.toUpperCase()}
          </span>
        </div>
        
        <div style="margin-bottom: 16px;">
          <p><strong>Role:</strong> ${moderator.role}</p>
          <p><strong>Joined:</strong> ${formatDate(moderator.joinDate)}</p>
          <p><strong>Last Active:</strong> ${formatDateTime(moderator.lastActive)}</p>
        </div>
        
        <div class="role-permissions">
          <strong>Permissions:</strong>
          <div style="margin-top: 8px;">
            ${moderator.permissions.map(permission => 
              `<span class="permission-tag">${permission.replace('_', ' ')}</span>`
            ).join('')}
          </div>
        </div>
        
        <div class="role-actions">
          <button class="btn btn--sm btn--secondary" onclick="RoleManager.editRole('${moderator.id}')">
            Edit
          </button>
          <button class="btn btn--sm btn--outline" onclick="RoleManager.viewActivity('${moderator.id}')">
            Activity
          </button>
          <button class="btn btn--sm btn--${moderator.status === 'active' ? 'warning' : 'success'}" onclick="RoleManager.toggleStatus('${moderator.id}')">
            ${moderator.status === 'active' ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      </div>
    `).join('');
  }
  
  static addModerator() {
    showToast('Add Moderator functionality would be available here', 'info');
  }
  
  static editRole(moderatorId) {
    const moderator = app.moderators.find(m => m.id === moderatorId);
    if (moderator) {
      showToast(`Edit role for ${moderator.name}`, 'info');
    }
  }
  
  static viewActivity(moderatorId) {
    const moderator = app.moderators.find(m => m.id === moderatorId);
    if (moderator) {
      showToast(`Activity log for ${moderator.name}`, 'info');
    }
  }
  
  static toggleStatus(moderatorId) {
    const moderator = app.moderators.find(m => m.id === moderatorId);
    if (moderator) {
      moderator.status = moderator.status === 'active' ? 'inactive' : 'active';
      RoleManager.renderRoles();
      showToast(`${moderator.name} ${moderator.status === 'active' ? 'activated' : 'deactivated'}`, 'success');
    }
  }
  
  static managePermissions() {
    showToast('Permission management functionality would be available here', 'info');
  }
}

// Analytics Manager
class AnalyticsManager {
  static createGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx) return;

    if (app.charts.growthChart) {
      app.charts.growthChart.destroy();
    }

    app.charts.growthChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Vendor Growth',
            data: [280, 295, 305, 318, 325, 332, 338, 342, 345],
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: false,
            tension: 0.4
          },
          {
            label: 'Revenue Growth',
            data: [1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.35, 2.4, 2.45],
            borderColor: '#FFC185',
            backgroundColor: 'rgba(255, 193, 133, 0.1)',
            fill: false,
            tension: 0.4,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Vendors'
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'Revenue (₹L)'
            },
            grid: {
              drawOnChartArea: false,
            },
          }
        }
      }
    });
  }

  static createPlanRevenueChart() {
    const ctx = document.getElementById('planRevenueChart');
    if (!ctx) return;

    if (app.charts.planRevenueChart) {
      app.charts.planRevenueChart.destroy();
    }

    app.charts.planRevenueChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Basic Plan', 'Standard Plan', 'Premium Plan'],
        datasets: [{
          data: [37500, 124800, 91350],
          backgroundColor: ['#FFC185', '#1FB8CD', '#5D878F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { 
            position: 'bottom',
            labels: {
              generateLabels: function(chart) {
                const original = Chart.defaults.plugins.legend.labels.generateLabels;
                const labels = original.call(this, chart);
                labels.forEach((label, i) => {
                  label.text += ` (${formatCurrency(chart.data.datasets[0].data[i])})`;
                });
                return labels;
              }
            }
          }
        }
      }
    });
  }
  
  static exportReport() {
    showToast('Analytics report export functionality would be available here', 'info');
  }
}

// Settings Manager
class SettingsManager {
  static renderSettings() {
    const plansContainer = document.getElementById('subscriptionPlans');
    if (!plansContainer) return;
    
    plansContainer.innerHTML = app.subscriptionPlans.map(plan => `
      <div class="plan-item">
        <div class="plan-name">${plan.name}</div>
        <div class="plan-price">₹${plan.monthlyPrice.toLocaleString()}/month</div>
        <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">
          ₹${plan.yearlyPrice.toLocaleString()}/year
        </div>
      </div>
    `).join('');
  }
  
  static editPlans() {
    showToast('Plan editing functionality would be available here', 'info');
  }
  
  static saveSettings() {
    showToast('Settings saved successfully', 'success');
  }
}

// Audit Manager
class AuditManager {
  static renderAuditLogs() {
    const tbody = document.querySelector('#auditTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = app.auditLogs.map(log => `
      <tr>
        <td>${formatDateTime(log.timestamp)}</td>
        <td>${log.action.replace('_', ' ').toUpperCase()}</td>
        <td>${log.user}</td>
        <td>${log.description}</td>
        <td>${log.ipAddress}</td>
        <td>
          <span class="status status--${log.status === 'success' ? 'success' : 'error'}">
            ${log.status.toUpperCase()}
          </span>
        </td>
      </tr>
    `).join('');
  }
  
  static exportLogs() {
    showToast('Audit logs export functionality would be available here', 'info');
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing super admin platform');
  
  initializeLoginHandlers();
  initializeNavigationHandlers();
  initializeModalHandlers();
  
  console.log('Super admin platform initialized successfully');
});

function initializeLoginHandlers() {
  console.log('Initializing login handlers');
  
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    console.log('Login form found, attaching event listener');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Login form submitted');
      
      const credentials = {
        email: document.getElementById('adminEmail').value.trim(),
        password: document.getElementById('adminPassword').value.trim(),
        twoFactorCode: document.getElementById('twoFactorCode').value.trim()
      };
      
      console.log('Attempting login with credentials:', { ...credentials, password: '***' });
      
      if (AuthManager.login(credentials)) {
        console.log('Login successful, switching to dashboard');
        
        PageManager.showPage('adminDashboard');
        PageManager.showSection('dashboardSection');
        DashboardManager.updateDashboard();
        
        // Create charts after a short delay
        setTimeout(() => {
          console.log('Creating dashboard charts');
          DashboardManager.createRevenueChart();
          DashboardManager.createVendorStatusChart();
          DashboardManager.createSubscriptionChart();
        }, 100);
        
        showToast(`Welcome ${app.currentUser.name}!`, 'success');
      } else {
        console.log('Login failed');
        showToast('Invalid credentials. Please check your login details.', 'error');
      }
    });
  } else {
    console.error('Login form not found!');
  }
}

function initializeNavigationHandlers() {
  console.log('Initializing navigation handlers');
  
  // Logout button
  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Logout button clicked');
      AuthManager.logout();
    });
  }

  // Navigation buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section + 'Section';
      console.log('Navigation button clicked:', section);
      PageManager.showSection(section);
      loadSectionContent(section);
    });
  });
}

function loadSectionContent(section) {
  console.log('Loading section content:', section);
  
  if (section === 'dashboardSection') {
    DashboardManager.updateDashboard();
    setTimeout(() => {
      DashboardManager.createRevenueChart();
      DashboardManager.createVendorStatusChart();
      DashboardManager.createSubscriptionChart();
    }, 100);
  } else if (section === 'vendorsSection') {
    VendorManager.renderVendors();
  } else if (section === 'applicationsSection') {
    ApplicationManager.renderApplications();
  } else if (section === 'paymentsSection') {
    PaymentManager.renderPayments();
  } else if (section === 'rolesSection') {
    RoleManager.renderRoles();
  } else if (section === 'analyticsSection') {
    setTimeout(() => {
      AnalyticsManager.createGrowthChart();
      AnalyticsManager.createPlanRevenueChart();
    }, 100);
  } else if (section === 'settingsSection') {
    SettingsManager.renderSettings();
  } else if (section === 'auditSection') {
    AuditManager.renderAuditLogs();
  }
}

function initializeModalHandlers() {
  console.log('Initializing modal handlers');
  
  document.querySelectorAll('.modal .close-btn, .modal .modal-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.closest('.modal').classList.add('hidden');
    });
  });
}

// Global functions for onclick handlers
window.VendorManager = VendorManager;
window.ApplicationManager = ApplicationManager;
window.PaymentManager = PaymentManager;
window.RoleManager = RoleManager;
window.AnalyticsManager = AnalyticsManager;
window.SettingsManager = SettingsManager;
window.AuditManager = AuditManager;