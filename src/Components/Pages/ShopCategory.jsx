import React, { useContext } from "react";
import { ShopContext } from "../../ShopContext/ShopContext";
import Items from "../Item/Items";
import { RiArrowDropDownLine } from "react-icons/ri";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("ShopCategory - all_product:", all_product); // Debug log
  return (
    <div className="block mx-auto my-[30px]">
      <img src={props.banner} alt="" className="px-6"/>
      <div className="flex px-6  pt-2 justify-between">
        <p>
          <span className="font-bold">Showing 1-12 </span>out of 36 products
        </p>
        <div className="flex items-center ml-4   border border-slate-600 rounded-lg cursor-pointer">
          Sort by <RiArrowDropDownLine size={30} />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center mt-8 gap-6 px-6">
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
      <div className="flex justify-center items-center pt-8 ">
        <button className="rounded-2xl border border-slate-600 p-2 bg-slate-300 font-bold">Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
