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
    padding: '4px 16px 4px 16px',
    width: {
        xs: '100%',
        sm: '350px',
        md: '500px'
    }
}

export const logs = {
    backgroundColor: '#40739e91',
    color: '#f5f6fa',
    padding: '8px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    display: { xs: 'block', lg: 'none' },
    '&:hover': { backgroundColor: '#487eb091' }
}

export const download = {
    backgroundColor: '#40739e91',
    color: '#f5f6fa',
    padding: '8px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#487eb091' }
}

export const upload = {
    backgroundColor: '#40739e91',
    color: '#f5f6fa',
    padding: '8px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#487eb091' }
}

export const btnicon = { 
    display: {
        xs: 'block',
        lg: 'none'
    }, 
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#40739e91',
    color: '#f5f6fa',
    borderRadius: '8px',
    padding: '8px 16px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#487eb091' }
}

export const btntxt = { 
    display: {
        xs: 'none',
        lg: 'block'
    }, 
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#40739e91',
    color: '#f5f6fa',
    borderRadius: '8px',
    padding: '8px 16px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#487eb091' }
}

export const orderby = {
    padding: '4px 16px',
    backgroundColor: '#dfe6e991',
    borderRadius: '8px',
    color: '#636e72',
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
    color: '#2d3436',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const subtitle = {
    color: '#636e72',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const caption = {
    color: '#b2bec3',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
}

export const status = stats => ({ 
    backgroundColor: stats === 1 ? '#A0C49D91' : '#FF666691', 
    borderRadius: '4px',
    padding: '4px 16px',
    color: '#ffffff',
    fontSize: '85%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%'
});

export const menu = {
    backgroundColor: '#D8D9DA91',
    padding: '4px 12px',
    borderRadius: '4px',
    color: '#636e72',
    cursor: 'pointer'
}