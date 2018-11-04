import React from 'react';
import  { Row, Col } from 'react-grid-system';



const Rig = props => {
    const { rig } = props
    return (
    <Row>
        <Col className='header-column'>{ rig.rigNumber }</Col>
        <Col className='header-column'>{ rig.minerVersion }</Col>
        <Col className='header-column'>{ rig.hashrateTotal }</Col>
        <Col className='header-column'>{ rig.acceptedShares }/{ rig.rejectedShares }/{ rig.invalidShares }</Col>
        <Col className='header-column'>{ rig.poolSwitches }</Col>
        <Col className='header-column'>{ rig.hashratePerCard }</Col>
        <Col className='header-column'>{ rig.tempPerCard }</Col>
        <Col className='header-column'>{ rig.fanPerCard }</Col>
        <Col className='header-column'>{ Math.floor(rig.totalTimeInMinutes / 60) } : { rig.totalTimeInMinutes % 60  }</Col>
    </Row>
    );
}


export default Rig;