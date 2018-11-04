import React from 'react';

import './HeaderInfo.css';

const HeaderInfo = (props) => {
    return (
        <div className='header-info'>
            <span><h3>Total Hashrate:<br/> { props.totalHashrate } </h3></span><span><h3>Total Shares A/R:<br/> { props.totalAcceptedShares }/{ props.totalRejectedShares} </h3></span>
        </div>
    );
}




export default HeaderInfo;