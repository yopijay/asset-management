export const cvalidation = (data, errors, type) => {
    if(!data.issued_to) { errors.push({ name: 'issued_to', message: 'This field is required!' }); }
    if(!data.issued_by) { errors.push({ name: 'issued_by', message: 'This field is required!' }); }
    if(data.date_issued === '') { errors.push({ name: 'date_issued', message: 'This field is required!' }); }
    if(!data.category_id) { errors.push({ name: 'category_id', message: 'This field is required!' }); }
    if(!data.brand_id) { errors.push({ name: 'brand_id', message: 'This field is required!' }); }
    if(!data.item_id) { errors.push({ name: 'item_id', message: 'This field is required!' }); }
    if(!data.branch) { errors.push({ name: 'branch', message: 'This field is required!' }); }
}