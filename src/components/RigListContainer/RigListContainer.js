import React from 'react';
import  { Grid, Row, Col } from 'react-bootstrap';
import './RigListContainer.css';
import Rig from '../Rig/Rig';

const RigListContainer = props => {  
    const { rigInfo } = props  

        return (
            <div className='rig-list-container'>
                <Grid className='grid-header'>
                    <Row className='show-grid'>
                        {/* { Object.keys(rigInfo[0]).forEach(key => 
                            <Col className='header-column' xs={4} md={1}>{ key }</Col>
                        )} */}
                        <Col className='header-column' xs={4} md={1}>Miner Version</Col>
                        <Col className='header-column' xs={4} md={1}>Hashrate</Col>
                        <Col className='header-column' xs={4} md={1}>Accepted Shares</Col>
                        <Col className='header-column' xs={4} md={1}>Rejected Shares</Col>
                        <Col className='header-column' xs={4} md={1}>Invalid Shares</Col>
                        <Col className='header-column' xs={4} md={1}>Pool Switches</Col>
                        <Col className='header-column' xs={4} md={1}>Hashrate Per Card</Col>
                        <Col className='header-column' xs={4} md={1}>Temp Per Card</Col>
                        <Col className='header-column' xs={4} md={1}>Fan Per Card</Col>
                        <Col className='header-column' xs={4} md={1}>Time Active</Col>
                    </Row>
                    { rigInfo.map(rig =>
                        <Row key={ rig.rigNumber}>
                            <Rig rig={ rig } />
                        </Row>
                    )}
                </Grid>
            </div>
        );
}

export default RigListContainer;
