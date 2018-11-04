import React from 'react';
import  { Container, Row, Col } from 'react-grid-system';

import './RigListContainer.css';
import Rig from '../Rig/Rig';

const RigListContainer = props => {  
    const { rigInfo, columnHeader } = props  
    console.log(rigInfo[0])
        return (
            <div className='rig-list-container'>
                <Container fluid={ true } className='grid-header'>
                    <Row className='show-grid'>
                        { columnHeader.map(val => 
                            <Col className='header-column'> { val }</Col>
                        )}
                    </Row>
                    { rigInfo.map(rig =>
                        <Rig key={ rig.rigNumber} rig={ rig } />
                    )}
                </Container>
            </div>
        );
}

export default RigListContainer;
