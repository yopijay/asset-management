// Libraries
import React from "react";

// Assets & Supplies
const AssetsBrand = React.lazy(() => import('layouts/pages/assets-supplies/brand'));
const Classificaiton = React.lazy(() => import('layouts/pages/assets-supplies/classification'));
const Assets = React.lazy(() => import('layouts/pages/assets-supplies/assets'));
const Supplies = React.lazy(() => import('layouts/pages/assets-supplies/supplies'));

// Maintenance
const Company = React.lazy(() => import('layouts/pages/maintenance/company'));
const Department = React.lazy(() => import('layouts/pages/maintenance/department'));
const Position = React.lazy(() => import('layouts/pages/maintenance/position'));
const Employee = React.lazy(() => import('layouts/pages/maintenance/employee'));

export const Components = ([
    { label: 'Overview', components: [
        { path: '/', name: 'dashboard', title: 'Dashboard', component: 'DASHBOARD' }
    ] },
    { label: 'Assets & Supplies', components: [
        { path: '/assets-supplies/brand', name: 'assets-supplies-brand', title: 'Brand', component: <AssetsBrand /> },
        { path: '/assets-supplies/classification', name: 'assets-supplies-classification', title: 'Classification', component: <Classificaiton /> },
        { path: '/assets-supplies/assets', name: 'assets', title: 'Assets', component: <Assets /> },
        { path: '/assets-supplies/supplies', name: 'supplies', title: 'Supplies', component: <Supplies /> },
        { path: '/assets-supplies/issuance', name: 'issuance', title: 'Issuance', component: 'ISSUANCE' }
    ] },
    { label: 'Warehouse', components: [
        { path: '/warehouse/brand', name: 'warehouse-brand', title: 'Brand', component: 'BRANDS' },
        { path: '/warehouse/racks', name: 'warehouse-racks', title: 'Racks', component: 'RACKS' },
        { path: '/warehouse/products', name: 'warehouse-products', title: 'Products', component: 'PRODUCTS' },
        { path: '/warehouse/physical-count', name: 'warehouse-physical-count', title: 'Physical Count', component: 'PHYSICAL COUNT' }
    ] },
    { label: 'Maintenance', components: [
        { path: '/maintenance/company', name: 'company', title: 'Company', component: <Company /> },
        { path: '/maintenance/department', name: 'department', title: 'Department', component: <Department /> },
        { path: '/maintenance/position', name: 'position', title: 'Position', component: <Position /> },
        { path: '/maintenance/employee', name: 'employee', title: 'Employee', component: <Employee /> },
        { path: '/maintenance/role-access', name: 'role-access', title: 'Role & Access', component: "ROLE & ACCESS" }
    ] }
]);