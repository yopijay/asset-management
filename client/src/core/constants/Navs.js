// Libraries
import React from "react";

// Assets & Supplies
const AssetsBrand = React.lazy(() => import('layouts/pages/assets-supplies/brand'));
const Assets = React.lazy(() => import('layouts/pages/assets-supplies/assets'));
const Supplies = React.lazy(() => import('layouts/pages/assets-supplies/supplies'));
const Issuance = React.lazy(() => import('layouts/pages/assets-supplies/issuance'));

// // Warehouse
// const WarehouseBrand = React.lazy(() => import('layouts/pages/warehouse/brand'));
// const Racks = React.lazy(() => import('layouts/pages/warehouse/racks'));
// const Products = React.lazy(() => import('layouts/pages/warehouse/products'));
// const PhysicalCount = React.lazy(() => import('layouts/pages/warehouse/physical-count'));

// // Maintenance
const Company = React.lazy(() => import('layouts/pages/maintenance/company'));
const Department = React.lazy(() => import('layouts/pages/maintenance/department'));
const Position = React.lazy(() => import('layouts/pages/maintenance/position'));
const Employee = React.lazy(() => import('layouts/pages/maintenance/employee'));

// Setup
const Module = React.lazy(() => import('layouts/pages/setup/module'));
const SubModule = React.lazy(() => import('layouts/pages/setup/submodule'));

export const Components = ([
    { path: '/', name: 'dashboard', title: 'Dashboard', component: 'DASHBOARD' },
    
    // Assets & Supplies
    { path: '/assets-supplies/brand', name: 'assets-supplies-brand', title: 'Brand', component: <AssetsBrand /> },
    { path: '/assets-supplies/assets', name: 'assets', title: 'Assets', component: <Assets /> },
    { path: '/assets-supplies/supplies', name: 'supplies', title: 'Supplies', component: <Supplies /> },
    { path: '/assets-supplies/issuance', name: 'issuance', title: 'Issuance', component: <Issuance /> },

    // Maintenance
    { path: '/maintenance/company', name: 'company', title: 'Company', component: <Company /> },
    { path: '/maintenance/department', name: 'department', title: 'Department', component: <Department /> },
    { path: '/maintenance/position', name: 'position', title: 'Position', component: <Position /> },
    { path: '/maintenance/employee', name: 'employee', title: 'Employee', component: <Employee /> },

    // Setup
    { path: '/setup/module', name: 'module', title: 'Module', component: <Module /> },
    { path: '/setup/sub-module', name: 'sub-module', title: 'Sub Module', component: <SubModule /> }
    // { label: 'Overview', components: [
    // ] },
    // { label: 'Assets & Supplies', components: [
    // ] },
    // { label: 'Warehouse', components: [
    //     { path: '/warehouse/brand', name: 'warehouse-brand', title: 'Brand', component: <WarehouseBrand /> },
    //     { path: '/warehouse/racks', name: 'warehouse-racks', title: 'Racks', component: <Racks /> },
    //     { path: '/warehouse/products', name: 'warehouse-products', title: 'Products', component: <Products /> },
    //     { path: '/warehouse/physical-count', name: 'warehouse-physical-count', title: 'Physical Count', component: <PhysicalCount /> }
    // ] },
    // { label: 'Maintenance', components: [
    //     { path: '/maintenance/employee', name: 'employee', title: 'Employee', component: <Employee /> }
    // ] },
    // { label: 'Setup', components: [
    // ] }
]);