export const validation = (data, errors) => {
    switch(data.category) {
        case 'laptop':
            if(!data.brand_id) { errors.push({ name: 'brand_id', message: 'This field is required!' }); }
            if(data.serial_no === '') { errors.push({ name: 'serial_no', message: 'This field is required!' }); }
            break;
        case 'toner':
            if(data.model === '') { errors.push({ name: 'model', message: 'This field is required!' }); }
            if(!data.type) { errors.push({ name: 'type', message: 'This field is required!' }); }
            if(!data.condition) { errors.push({ name: 'condition', message: 'This field is required!' }); }
            if(data.quantity === '') { errors.push({ name: 'quantity', message: 'This field is required!' }); }
            break;
        default:
            if(!data.category) { errors.push({ name: 'category_id', message: 'This field is required!' }); }
    }
}