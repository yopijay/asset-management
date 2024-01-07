export const content = {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const title = {
    fontFamily: 'Montserrat Black',
    fontSize: '1.17rem',
    color: '#394867',
}

export const card = {
    backgroundColor: '#FFFFFF',
    borderRadius: '7px',
    flexGrow: 1,
    padding: {
        xs: '20px',
        sm: '30px',
        lg: '40px'
    },
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const savebtn = {
    textAlign: 'center',
    width: '150px',
    color: '#f5f6fa',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#40739e',
    padding: '8px 0',
    borderRadius: '7px',
    '&:hover': { backgroundColor: '#487eb0' }
}

export const cancelbtn = {
    textAlign: 'center',
    width: '150px',
    padding: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '7px',
    backgroundColor: '#ced6e0',
    textDecoration: 'none',
    color: '#636e72',
    '&:hover': { backgroundColor: '#dfe4ea' }
}