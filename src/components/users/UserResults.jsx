import { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
    // destructure states & setters from Context
    const { users, loading } = useContext(GithubContext);

    // Show spinner while loading, then results when done
    return loading ? (
        <Spinner />
    ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserResults;
