export const validation = (data, errors) => {
    switch(data.category) {
        case 'laptop':
            if(!data.brand_id) { errors.push({ name: 'brand_id', message: 'This field is required!' }); }
            if(data.serial_no === '') { errors.push({ name: 'serial_no', message: 'This field is required!' }); }
            break;
        default:
            if(!data.category) { errors.push({ name: 'category_id', message: 'This field is required!' }); }
    }
}