const initialState = {
    courier: [
        {
            id: 1,
            name: 'JNE',
            charge: 11000
        },
        {
            id: 2,
            name: 'Tiki',
            charge: 12000
        },
        {
            id: 3,
            name: 'J&T',
            charge: 13000
        }
    ]
}

const courier = (state = initialState, action) => {
    return state;
}

export default courier;