import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

function Home() {
    return (
        <>
            {/* Search Form */}
            <UserSearch />

            {/* Search Results */}
            <UserResults />
        </>
    );
}

export default Home;
