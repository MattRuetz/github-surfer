import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import errorImg from '../../img/error.png';

function Alert() {
    const { alert } = useContext(AlertContext);

    return (
        alert !== null && (
            <p className="flex items-start mb-4 space-x-2">
                {alert.type === 'error' && (
                    <>
                        <img
                            src={errorImg}
                            alt="ERROR"
                            style={{
                                width: '50px',
                                height: 'auto',
                            }}
                        />
                        <p className="flex-1 text-base font-semibold leading-7 text-white">
                            <strong>{alert.msg}</strong>
                        </p>
                    </>
                )}
            </p>
        )
    );
}

export default Alert;
