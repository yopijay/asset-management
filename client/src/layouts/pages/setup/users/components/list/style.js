export const content = ({ condition }) => ({
    width: {
        xs: '100%',
        lg: condition ? '78%' : '100%'
    },
    height: '100%',
    overflow: 'hidden'
})

export const history = {
    width: '22%',
    height: '100%',
    paddingTop: '80px',
    display: {
        xs: 'none',
        lg: 'flex'
    }
}

export const items = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: '100%'
}

export const loader = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
}

export const search = {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: 'solid 1px #dfe6e9',
    borderRadius: '50px',
    padding: '5px 15px 5px 15px',
    width: {
        xs: '100%',
        sm: '350px',
        md: '500px'
    }
}

export const logs = {
    backgroundColor: '#40739e',
    color: '#f5f6fa',
    padding: '7px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    display: { xs: 'block', lg: 'none' },
    '&:hover': { backgroundColor: '#487eb0' }
}

export const download = {
    backgroundColor: '#40739e',
    color: '#f5f6fa',
    padding: '7px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#487eb0' }
}

export const upload = {
    backgroundColor: '#40739e',
    color: '#f5f6fa',
    padding: '7px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#487eb0' }
}

export const btnicon = { 
    display: {
        xs: 'block',
        lg: 'none'
    }, 
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#40739e',
    color: '#f5f6fa',
    borderRadius: '7px',
    padding: '7px 15px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#487eb0' }
}

export const btntxt = { 
    display: {
        xs: 'none',
        lg: 'block'
    }, 
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#40739e',
    color: '#f5f6fa',
    borderRadius: '7px',
    padding: '7px 15px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#487eb0' }
}

export const orderby = {
    padding: '5px 15px',
    backgroundColor: '#DDE6ED',
    borderRadius: '20px',
    color: '#526D82',
    cursor: 'pointer'
}

export const listview = {
    padding: '20px 16px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    overflow: 'hidden',
    textDecoration: 'none'
}

export const title = {
    color: '#27374D',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const subtitle = {
    color: '#526D82',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const caption = {
    color: '#9DB2BF',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}