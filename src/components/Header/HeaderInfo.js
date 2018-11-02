import React from 'react';

import './HeaderInfo.css';

const HeaderInfo = (props) => {
    return (
        <div className='header-info'>
            <span><h3>Total Hashrate: { props.totalHashrate } </h3></span><span><h3>Total Shares Accepted: { props.totalAcceptedShares } </h3></span>
            <span><h3>Shares Rejected Shares : { props.totalRejectedShares } </h3></span>
        </div>
    );
}




export default HeaderInfo;