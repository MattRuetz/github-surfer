const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            // save search results (payload) to users, not loading
            return { ...state, users: action.payload, loading: false };

        case 'GET_USER_AND_REPOS':
            // save a single user's data in user. not loading
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            };
        case 'CLEAR_USERS':
            // set users to empty array, not loading - reset state
            return { ...state, users: [], loading: false };
        case 'SET_LOADING':
            // set loading to true - show spinner instead of any content
            return { ...state, loading: true };
        default:
            return state;
    }
};

export default githubReducer;
