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

export const input = {
    border: 'solid 1px #dfe6e9',
    padding: {
        xs: '6px 8px',
        md: '8px 10px'
    },
    borderRadius: '6px'
}