import React, { Component } from 'react';
import axios from 'axios';

import HeaderInfo from './components/Header/HeaderInfo';

import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';
import './App.css';

const urlForMiningInfo = 'http://192.168.1.75:3000/api/rigInfo';
const dummyTestData = [];

export default class App extends Component {
  state = {
    headerName : 'HashiBoi App',
    rigInfo : [],   
  }; 

  initializeTestBackEndCode = () => {
    for(let i = 0; i < 60; i++){
      dummyTestData.push({
        rigNumber: i ,
                minerVersion: 11,
                totalTimeInMinutes: 1000,
                hashrateTotal: 360000,
                acceptedShares: 200000,
                rejectedShares: 0,
                invalidShares: 0,
                rigPoolSwitches: 0,
                rigHashRatePerCard: [30,30,30,30,30,30,30,30,30,30,30,30],
                rigGpuTempPerCard: [55,55,55,55,55,55,55,55,55,55,55,55],
                rigGpuFanPerCard: [30,30,30,30,30,30,30,30,30,30,30,30]
      });
    }
    this.setState({
      rigInfo : dummyTestData,
      totalAcceptedShares: 18500,
      totalRejectedShares: 5,
      totalHashrate: 21000
    });
  }

  getMiningData = async url => {
    try {
      const response = await axios.get(url);
      const { rigInfo } = response.data;
      console.log(rigInfo);
      this.setState({rigInfo : rigInfo})   
    } catch (error) {
      console.log(error);
    };
  };  

  componentDidMount() {
    // console.log('app did mount fetching rig data');
    // this.getMiningData(urlForMiningInfo);
    this.initializeTestBackEndCode();
  } 

  

  render() {
    const { headerName, rigInfo, totalAcceptedShares, totalHashrate, totalRejectedShares } = this.state;

    return (
      <div className="App">
        <Header header={ headerName } />
        <HeaderInfo totalAcceptedShares= { totalAcceptedShares } totalHashrate={ totalHashrate } totalRejectedShares={ totalRejectedShares } />
        <RigListContainer rigInfo={ rigInfo } />
      </div>
    );
  }
}

