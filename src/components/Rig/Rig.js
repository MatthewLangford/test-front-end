import React from 'react';



const Rig = props => {
    const { rig } = props
    return (
    <div>
        <table>
            
        </table>
        <span>Rig Number: { rig.rigNumber } </span><span>Total Hashrate: { rig.hashrateTotal } </span><span>Time active: { Math.floor(rig.totalTimeInMinutes / 60) } : { rig.totalTimeInMinutes % 60 } <span> minutes</span></span>
        <span> Miner Version: { rig.minerVersion }</span> <span> Total Accepted Shares: { rig.acceptedShares }</span><span> Total Rejected Shares: { rig.rejectedShares }</span><span></span><span>Hashrate </span>
    </div>
    );
}


export default Rig;