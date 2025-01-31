export const content = {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.17rem',
    color: '#636e72',
}

export const card = {
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    flexGrow: 1,
    padding: {
        xs: '20px',
        sm: '30px',
        lg: '40px'
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const input = {
    border: 'solid 1px #dfe6e9',
    padding: {
        xs: '10px 8px 8px 8px',
        md: '6px 10px 5px 10px'
    },
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out'
}

export const savebtn = {
    textAlign: 'center',
    width: '150px',
    color: '#f5f6fa',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#40739e91',
    padding: '8px 0',
    borderRadius: '8px',
    '&:hover': { backgroundColor: '#487eb091' }
}

export const cancelbtn = {
    textAlign: 'center',
    width: '150px',
    padding: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '8px',
    backgroundColor: '#ced6e091',
    textDecoration: 'none',
    color: '#636e72',
    '&:hover': { backgroundColor: '#dfe4ea91' }
}