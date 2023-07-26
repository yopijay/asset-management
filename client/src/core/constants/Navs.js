// Libraries
import React from "react";

// Maintenance
const Company = React.lazy(() => import('layouts/pages/maintenance/company'));
const Department = React.lazy(() => import('layouts/pages/maintenance/department'));
const Position = React.lazy(() => import('layouts/pages/maintenance/position'));
const Employee = React.lazy(() => import('layouts/pages/maintenance/employee'));

export const Components = ([
    { label: 'Overview', components: [
        { path: '/', name: 'dashboard', title: 'Dashboard', component: 'DASHBOARD' }
    ] },
    { label: 'Maintenance', components: [
        { path: '/maintenance/company', name: 'company', title: 'Company', component: <Company /> },
        { path: '/maintenance/department', name: 'department', title: 'Department', component: <Department /> },
        { path: '/maintenance/position', name: 'position', title: 'Position', component: <Position /> },
        { path: '/maintenance/employee', name: 'employee', title: 'Employee', component: <Employee /> },
        { path: '/maintenance/brands', name: 'brands', title: 'Brands', component: 'BRANDS' },
        { path: '/maintenance/racks', name: 'racks', title: 'Racks', component: 'RACKS' }
    ] }
]);