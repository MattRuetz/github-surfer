import loadingAnim from '../../img/loading.svg';

function Spinner() {
    return (
        <>
            <img
                src={loadingAnim}
                alt="Loading..."
                style={{
                    display: 'flex',
                    alignSelf: 'center',
                    flex: '1',
                    width: '30%',
                }}
            />
        </>
    );
}

export default Spinner;
