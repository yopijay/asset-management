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

export const download = {
    backgroundColor: '#526D82',
    color: '#FFFFFF',
    padding: '7px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#3f5465' }
}

export const upload = {
    backgroundColor: '#526D82',
    color: '#FFFFFF',
    padding: '7px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#3f5465' }
}

export const logs = {
    backgroundColor: '#526D82',
    color: '#FFFFFF',
    padding: '7px 12px',
    borderRadius: '7px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    display: { xs: 'block', lg: 'none' },
    '&:hover': { backgroundColor: '#3f5465' }
}

export const orderby = {
    padding: '5px 15px',
    backgroundColor: '#DDE6ED',
    borderRadius: '20px',
    color: '#526D82',
    cursor: 'pointer'
}

export const items = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexGrow: 1,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const list = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 17px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px'
}

export const listinfo = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
}