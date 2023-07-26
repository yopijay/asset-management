// Libraries
import React from "react";

// Maintenance
const Company = React.lazy(() => import('layouts/pages/maintenance/company'));
const Department = React.lazy(() => import('layouts/pages/maintenance/department'));

export const Components = ([
    { label: 'Overview', components: [
        { path: '/', name: 'dashboard', title: 'Dashboard', component: 'DASHBOARD' },
        { path: '/products', name: 'products', title: 'Products', component: 'PRODUCTS' },
        { path: '/assets', name: 'assets', title: 'Assets', component: 'ASSETS' },
        { path: '/users', name: 'users', title: 'Users', component: 'USERS' },
        { path: '/reports', name: 'reports', title: 'Reports', component: 'REPORTS' }
    ] },
    { label: 'Maintenance', components: [
        { path: '/maintenance/company', name: 'company', title: 'Company', component: <Company /> },
        { path: '/maintenance/department', name: 'department', title: 'Department', component: <Department /> },
        { path: '/maintenance/position', name: 'position', title: 'Position', component: 'POSITION' },
        { path: '/maintenance/asset-type', name: 'asset-type', title: 'Asset Type', component: 'ASSET TYPES' },
        { path: '/maintenance/brands', name: 'brands', title: 'Brands', component: 'BRANDS' },
        { path: '/maintenance/racks', name: 'racks', title: 'Racks', component: 'RACKS' }
    ] }
]);