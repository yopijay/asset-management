// Libraries
import React from "react";

// Dashboard
const Dashboard = React.lazy(() => import('layouts/pages/dashboard'));

// Assets
const Stocks = React.lazy(() => import('layouts/pages/assets/stocks'));
const Request = React.lazy(() => import('layouts/pages/assets/request'));
const Received = React.lazy(() => import('layouts/pages/assets/received'));
const Issuance = React.lazy(() => import('layouts/pages/assets/issuance'));
// const Assets = React.lazy(() => import('layouts/pages/assets-supplies/assets'));
// const Issuance = React.lazy(() => import('layouts/pages/assets-supplies/issuance'));

// Maintenance
const Company = React.lazy(() => import('layouts/pages/maintenance/company'));
const Department = React.lazy(() => import('layouts/pages/maintenance/department'));
const Position = React.lazy(() => import('layouts/pages/maintenance/position'));
const Category = React.lazy(() => import('layouts/pages/maintenance/category'));
const Brand = React.lazy(() => import('layouts/pages/maintenance/brand'));

// Setup
const Users = React.lazy(() => import('layouts/pages/setup/users'));
const Route = React.lazy(() => import('layouts/pages/setup/route'));
const Modules = React.lazy(() => import('layouts/pages/setup/modules'));

export const Components = ([
    { path: '/', name: 'dashboard', title: 'Dashboard', component: <Dashboard /> },
    
    // Assets
    { path: '/assets/stocks', name: 'stocks', title: 'Stocks', component: <Stocks /> },
    { path: '/assets/request', name: 'request', title: 'Request', component: <Request /> },
    { path: '/assets/received', name: 'received', title: 'Received', component: <Received /> },
    { path: '/assets/issuance', name: 'issuance', title: 'Issuance', component: <Issuance /> },
    // { path: '/assets-supplies/assets', name: 'assets', title: 'Assets', component: <Assets /> },
    // { path: '/assets-supplies/issuance', name: 'issuance', title: 'Issuance', component: <Issuance /> },

    // Maintenance
    { path: '/maintenance/company', name: 'company', title: 'Company', component: <Company /> },
    { path: '/maintenance/department', name: 'department', title: 'Department', component: <Department /> },
    { path: '/maintenance/position', name: 'position', title: 'Position', component: <Position /> },
    { path: '/maintenance/category', name: 'category', title: 'Category', component: <Category /> },
    { path: '/maintenance/brands', name: 'brands', title: 'Brands', component: <Brand /> },

    // Setup
    { path: '/setup/users', name: 'users', title: 'Users', component: <Users /> },
    { path: '/setup/route', name: 'route', title: 'Route', component: <Route /> },
    { path: '/setup/modules', name: 'modules', title: 'Modules', component: <Modules /> }
]);