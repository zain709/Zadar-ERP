import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import Layout from "../../components/Layouts/Layout";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <Layout showFooter={false}>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Menu</h1>
        <p className="explore-menu-text">
          Embark on a culinary journey with our Explore Menu, curated to
          tantalize your taste buds with exotic flavors and dishes. From
          international delights to chef-inspired creations, each item promises
          a delicious adventure waiting to be discovered..
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((Prev) =>
                    Prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </Layout>
  );
};

export default ExploreMenu;
