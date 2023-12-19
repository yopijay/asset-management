export const validation = (data, errors) => {
    if(!data.brand_id) { errors.push({ name: 'brand_id', message: 'This field is required!' }); }
    if(!data.branch) { errors.push({ name: 'branch', message: 'This field is required!' }); }

    switch(data.category) {
        case 'laptop':
            if(data.serial_no === '') { errors.push({ name: 'serial_no', message: 'This field is required!' }); }
            break;
        case 'system_unit':
            if(data.serial_no === '') { errors.push({ name: 'serial_no', message: 'This field is required!' }); }
            break;
        case 'monitor':
            if(data.serial_no === '') { errors.push({ name: 'serial_no', message: 'This field is required!' }); }
            break;
        case 'toner':
            if(data.model === '') { errors.push({ name: 'model', message: 'This field is required!' }); }
            if(!data.type) { errors.push({ name: 'type', message: 'This field is required!' }); }
            if(!data.condition) { errors.push({ name: 'condition', message: 'This field is required!' }); }
            if(data.quantity === '') { errors.push({ name: 'quantity', message: 'This field is required!' }); }
            break;
        case 'printer':
            if(data.model === '') { errors.push({ name: 'model', message: 'This field is required!' }); }
            if(!data.type) { errors.push({ name: 'type', message: 'This field is required!' }); }
            break;
        default:
            if(!data.category) { errors.push({ name: 'category_id', message: 'This field is required!' }); }
    }
}