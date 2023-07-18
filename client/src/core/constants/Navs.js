// Libraries
// import React from "react";

// const Dashboard = React.lazy(() => import(''))

export const Components = ([
    { label: 'Overview', components: [
        { path: '/', name: 'dashboard', title: 'Dashboard', component: 'DASHBOARD' },
        { path: '/products', name: 'products', title: 'Products', component: 'PRODUCTS' },
        { path: '/assets', name: 'assets', title: 'Assets', component: 'ASSETS' },
        { path: '/users', name: 'users', title: 'Users', component: 'USERS' },
        { path: '/reports', name: 'reports', title: 'Reports', component: 'REPORTS' }
    ] },
    { label: 'Maintenance', components: [
        { path: '/company', name: 'company', title: 'Company', component: 'COMPANY' },
        { path: '/department', name: 'department', title: 'Department', component: 'DEPARTMENT' },
        { path: '/position', name: 'position', title: 'Position', component: 'POSITION' },
        { path: '/asset-type', name: 'asset-type', title: 'Asset Type', component: 'ASSET TYPES' },
        { path: '/brands', name: 'brands', title: 'Brands', component: 'BRANDS' },
        { path: '/racks', name: 'racks', title: 'Racks', component: 'RACKS' }
    ] }
]);