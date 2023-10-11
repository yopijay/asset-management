// Libraries
import { Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Constants
import { caption, list, subtitle, title } from "../../index.style"; // Styles

const List = ({ data }) => {

    return (
        <Stack sx= { list }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" sx= {{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography variant= "caption" sx= { caption }>{ data.series_no }</Typography>
                <Typography sx= { title }><span style= {{ fontSize: '85%', marginRight: '10px', color: '#9DB2BF' }}>Serial no. | Model: </span>{ data.serial_no ?? data.model }</Typography>
                <Typography sx= { subtitle }><span style= {{ fontSize: '85%', marginRight: '10px', color: '#9DB2BF' }}>Issued to: </span>{ data.issued_to }</Typography>
                <Typography sx= { subtitle }><span style= {{ fontSize: '85%', marginRight: '10px', color: '#9DB2BF' }}>Issued by: </span>{ data.issued_by }</Typography>
                <Typography sx= { subtitle }><span style= {{ fontSize: '85%', marginRight: '10px', color: '#9DB2BF' }}>Date issued: </span>{ data.date_issued }</Typography>
            </Stack>
            <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 } paddingLeft= "10px">
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1.5 }>
                    <Typography color= "#9BA4B5" component= { Link } to= { `/assets-supplies/issuance/form/update/${data.id}` }><FontAwesomeIcon icon= { solid('pencil') } size= "lg" /></Typography>
                    <Typography color= "#9BA4B5" component= { Link } to= { `/assets-supplies/issuance/form/view/${data.id}` }><FontAwesomeIcon icon= { solid('eye') } size= "lg" /></Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}

List.propTypes = { data: PropTypes.object.isRequired }

export default List;