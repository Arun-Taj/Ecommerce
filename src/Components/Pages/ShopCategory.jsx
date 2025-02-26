import React, { useContext } from "react";
import { ShopContext } from "../../ShopContext/ShopContext";
import Items from "../Item/Items";
import { RiArrowDropDownLine } from "react-icons/ri";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("ShopCategory - all_product:", all_product); // Debug log
  return (
    <div>
      <img src={props.banner} alt="" />
      <div>
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className="flex items-center">
          Sort by <RiArrowDropDownLine size={30} />
        </div>
      </div>
      <div>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
