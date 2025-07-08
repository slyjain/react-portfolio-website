
import React from 'react';

const PostgresIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className={className}>
        <path fill="#336791" d="M64,127.5C29,127.5,0.5,99,0.5,64S29,0.5,64,0.5s63.5,28.5,63.5,63.5S99,127.5,64,127.5z"/>
        <path fill="#FFFFFF" d="M96.2,32.1H76.5v20H60.2v12.8h16.3v42.1h19.7V32.1z M31,77.7c0,5.6,4.6,10.2,10.2,10.2h12.5V75.1H41.2 c-5.6,0-10.2,4.6-10.2,10.2V77.7z M53.8,62.3H41.2c-5.6,0-10.2-4.6-10.2-10.2V49c0-5.6,4.6-10.2,10.2-10.2h12.5V62.3z"/>
    </svg>
);

export default PostgresIcon;
