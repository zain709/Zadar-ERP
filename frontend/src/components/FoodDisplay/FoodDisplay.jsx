import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItems/FoodItem";
import Layout from "../Layouts/Layout";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <Layout showHeader={false} showFooter={false}>
      <div
        className="food-display"
        id="food-display"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <h2>Top dishes for you</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FoodDisplay;
