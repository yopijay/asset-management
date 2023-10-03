// Libraries
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Stock = props => {
    const { type } = useParams();
    const { fetching, errors, control, getValues, setValue, setError } = props;

    return ([
        {
            grid: { xs: 12, sm: 4 },
            props: {
                name: 'category_id',
                label: '*Category',
                disabled: type !== 'new',
                fetching: fetching,
                options: [],
                onChange: (e, item) => { 
                    setError('category_id', { message: '' });
                    setValue('category_id', item.id);
                    setValue('category', ((item.name).replace(' ', '_')).toLowerCase());
                    // brdmenu({ table: 'tbl_brands', data: { type: 'per-category', id: item.id } });
                }
            },
            type: 'dropdown'
        },
    ]);
}

Stock.propTypes = {
    fetching: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.node.isRequired,
    getValues: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
}

export default Stock;