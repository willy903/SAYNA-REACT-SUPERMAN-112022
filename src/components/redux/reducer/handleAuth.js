 const users  = [];

const handleAuth = (state = users, action) => {
    switch (action.type) {
        case "RGISTER": return{
            ...users,
            users : [...state.users, action.payload]
        }
        default:
        return state;
        break
    }
}
export default handleAuth;