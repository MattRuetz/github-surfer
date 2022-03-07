import { useEffect, useState } from 'react';
import loadingAnim from '../../img/loading.svg';
import UserItem from './UserItem';

function UserResults() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        });

        const data = await res.json();

        setUsers(data);
        setLoading(false);
    };

    // Show spinner while loading, then results when done
    return loading ? (
        <img src={loadingAnim} alt="" style={{ scale: '50%' }} />
    ) : (
        <div className="grid grid-calls-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserResults;
