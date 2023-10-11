export const validation = ({ data, errors }) => {
    if(data.company_id === undefined || data.company_id === null || data.company_id === '') { errors.push({ name: 'company_id', message: 'This field is required!' }); }
    if(data.department_id === undefined || data.department_id === null || data.department_id === '') { errors.push({ name: 'department_id', message: 'This field is required!' }); }
    if(data.position_id === undefined || data.position_id === null || data.position_id === '') { errors.push({ name: 'position_id', message: 'This field is required!' }); }
    if(data.issued_to === undefined || data.issued_to === null || data.issued_to === '') { errors.push({ name: 'issued_to', message: 'This field is required!' }); }
    if(data.branch === undefined || data.branch === null || data.branch === '') { errors.push({ name: 'branch', message: 'This field is required!' }); }
    if(data.category_id === undefined || data.category_id === null || data.category_id === '') { errors.push({ name: 'category_id', message: 'This field is required!' }); }
    if(data.brand_id === undefined || data.brand_id === null || data.brand_id === '') { errors.push({ name: 'brand_id', message: 'This field is required!' }); }
    if(data.stock_id === undefined || data.stock_id === null || data.stock_id === '') { errors.push({ name: 'stock_id', message: 'This field is required!' }); }
}