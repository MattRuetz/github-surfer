import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// axios endpoint, for simplified request statements
const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token${GITHUB_TOKEN}` },
});

// Get search results from API
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text,
    });

    const res = await github.get(`/search/users?${params}`);
    // return array of users matching search text
    return res.data.items;
};

// Get user AND their repos
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 15,
    });

    // Await both promises concurrently
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`),
    ]);

    return { user: user.data, repos: repos.data };
};
