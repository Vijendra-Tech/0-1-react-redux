import React from "react";
import { useDispatch } from "react-redux";
import { updatePrice } from "../fakeInfoSlice";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const sampleName = useSelector((state) => state.sampleName?.value);
  const pillowObj = useSelector((state) => state.fakeName?.value);
  return (
    <div>
      <b>Redux Store example</b>
      <p>This values comes fom Store:{sampleName}</p>
      <hr />
      <p>
        {" "}
        Pillow Brand <b>{pillowObj.title}</b> and Price is{" "}
        <b>{pillowObj.price}</b>
      </p>
      <button
        onClick={() => {
          dispatch(
            updatePrice({
              title: "New Pillow",
              price: "$" + 200,
            })
          );
        }}
      >
        UpdatePrice{" "}
      </button>
    </div>
  );
}

export default Header;
