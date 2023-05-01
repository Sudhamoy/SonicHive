import "./Category.scss";
import React from "react";
//import cat1 from "../../../assets/category/cat-1.jpg";


const Category = (categories) => {
    
    return (
        <div className="shop-by-category">
        <div className="categories">
            {categories['categories']===undefined?<div>no</div>:categories['categories'].data.map((item)=>{
                return(
            <div key={item.id} className="category">
                <img src={process.env.REACT_APP_DEV_URL +""+item.attributes.img.data[0].attributes.url} alt=""/> 
            </div>)})}
        </div>
        </div>

    );
};

export default Category; 
