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
    color: '#FFFFFF',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#A0C49D',
    padding: '8px 0',
    borderRadius: '7px',
    '&:hover': { backgroundColor: '#86a583' }
}

export const cancelbtn = {
    textAlign: 'center',
    width: '150px',
    padding: '8px 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '7px',
    backgroundColor: '#DDE6ED',
    textDecoration: 'none',
    color: '#394867',
    '&:hover': { backgroundColor: '#cdd6dd' }
}