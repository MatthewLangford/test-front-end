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
    title : 'HashiBoi App',
    rigInfo : [],
    totals : {} 
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
          poolSwitches: 0,
          hashratePerCard: [30,30,30,30,30,30,30,30,30,30,30,30],
          tempPerCard: [55,55,55,55,55,55,55,55,55,55,55,55],
          fanPerCard: [30,30,30,30,30,30,30,30,30,30,30,30]
      });
    };
    this.setState({
      rigInfo : dummyTestData,
      totals: {
        acceptedShares: 18500,
        rejectedShares: 5,
        hashrate: 21000,
        invalidShares: 0
     }
    });
  };

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
    const { title, rigInfo, totals } = this.state;

    return (
      <div className="App">
        <Header title={ title } />
        <HeaderInfo totals={ totals } />
        <RigListContainer rigInfo={ rigInfo } />
      </div>
    );
  };
};

