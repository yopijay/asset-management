// Libraries
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

// Components
import Textfield from "core/components/form/textfield";
import Textarea from "core/components/form/textarea";
import Switch from "core/components/form/switch";
import Checkbox from "core/components/form/checkbox";
import Dropdown from "core/components/form/dropdown";

const Index = ({ fields }) => {

    return (
        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
            { fields.map((field, index) => (
                <Grid item key= { index } { ...field.grid }>
                    { field.type === 'textfield' ? <Textfield { ...field.props } /> : '' }
                    { field.type === 'textarea' ? <Textarea { ...field.props } /> : '' }
                    { field.type === 'switch' ? <Switch { ...field.props } /> : '' }
                    { field.type === 'checkbox' ? <Checkbox { ...field.props } /> : '' }
                    { field.type === 'dropdown' ? <Dropdown { ...field.props } /> : '' }
                </Grid>
            )) }
        </Grid>
    );
}

Index.propTypes = { fields: PropTypes.array.isRequired }

export default Index;