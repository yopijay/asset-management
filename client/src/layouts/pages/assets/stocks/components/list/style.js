export const content = {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
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
    border: 'solid 1px #F3F3F3',
    borderRadius: '50px',
    padding: '5px 15px 5px 15px',
    width: {
        xs: '100%',
        sm: '350px',
        md: '500px'
    }
}

export const btnicon = { 
    display: {
        xs: 'block',
        lg: 'none'
    }, 
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#A0C49D',
    color: '#ffffff',
    borderRadius: '7px',
    padding: '7px 15px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#86a583' }
}

export const btntxt = { 
    display: {
        xs: 'none',
        lg: 'block'
    }, 
    textDecoration: 'none',
    cursor: 'pointer',
    backgroundColor: '#A0C49D',
    color: '#ffffff',
    borderRadius: '7px',
    padding: '7px 15px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#86a583' }
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
    color: '#636e72',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    fontSize: '110%',
    fontFamily: 'Montserrat SemiBold'
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

export const card = {
    backgroundColor: '#FFFFFF',
    padding: '40px 0',
    borderRadius: '8px',
    '&:hover': { backgroundColor: '#F1F1F1' },
    transition: 'all 0.2s ease-in-out',
    textDecoration: 'none',
    color: 'inherit'
}