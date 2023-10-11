// Libraries
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Constants
import { caption, info, list, subtitle, title } from "../../index.style"; // Styles

const Grids = ({ data }) => {

    return (
        <Stack sx= { list } component= { Link } to= { `/assets-supplies/issuance/form/update/${data.id}` }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                <Typography sx= { title }><span style= { info }>Serial no. | Model: </span>{ data.serial_no ?? data.model }</Typography>
                <Typography sx= { subtitle } variant= "caption"><span style= { info }>Issued to: </span>{ data.issued_to }</Typography>
                <Typography sx= { subtitle } variant= "caption"><span style= { info }>Issued by: </span>{ data.issued_by }</Typography>
                <Typography sx= { subtitle } variant= "caption"><span style= { info }>Date issued: </span>{ data.date_issued }</Typography>
            </Stack>
        </Stack>
    );
}

Grids.propTypes = { data: PropTypes.object.isRequired }

export default Grids;