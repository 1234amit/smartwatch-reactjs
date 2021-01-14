import React from 'react';
import classes from './ProductDetails.module.css';



const ProductDetails = (props) => {
    //const colorOptions = props.data.colorOptins.map((item, pos) => {
    //  return(
    //    <img className={classes.ProductImage} src= {item.imageUrl} 
    //    alt={item.styleName} />
    //  )
    //})

    const featureList = props.data.featureList.map((item, pos) => {
      const classArr = [classes.FeatureItem] ;

      if (pos === 0){
        classArr.push(classes.SelectedFetureItem)
      }
      return (
        <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
      );
    });
    return (
        <div className ={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>

          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Red Strap" />
            <img className={classes.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="Black Strap" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Strap" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Strap" />
            
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
            {/*<button className={[classes.FeatureItem, classes.SelectedFetureItem]. join(' ')}>Time</button>*/} 
            {/*<button className={classes.FeatureItem}>Heart Rate</button>*/}
          </div>

            <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    )
}

export default ProductDetails
