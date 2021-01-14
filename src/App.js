import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';
import TopBar from './TopBar';

class App extends Component{

  state = {
    productData : ProductData,
    currentPreviewImage: 'https://imgur.com/xSIK4M8.png',
    showHeartBeatSection: false,
  }

  onColorOptionClick = (pos) =>{
    const updatedPreviwImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImage : updatedPreviwImage})
  }

  onFeatureItemClick = (pos) =>{
    let updatedState = false;
    if(pos === 1){
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState})

    console.log(updatedState)
  }

  render() {
    return (
      <div className="App">
          <TopBar />
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage}
             showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails data = {this.state.productData} onColorOptionClick={this.onColorOptionClick}
            onFeatureItemClick={this.onFeatureItemClick} />
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;
