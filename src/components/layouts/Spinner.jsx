import loadingAnim from '../../img/loading.svg';

function Spinner() {
    return (
        <img
            src={loadingAnim}
            alt="Loading..."
            style={{
                position: 'relative',
                left: '35%',
                width: '30%',
            }}
        />
    );
}

export default Spinner;
