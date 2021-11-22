import React from "react";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../../features/coins/coinsSlice";

const Pagination = (props) => {
  const dispatch = useDispatch();
  //   const pageNumbers = [];

  //   for (let i = 1; i <= Math.ceil(props.totalCoins / props.coinsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  //   console.log(pageNumbers, "pageNumbers");
  return (
    <div className="text-center">
      <button
        onClick={() => dispatch(setPageNumber())}
        className=" my-4 transform hover:scale-110 px-4 text-sm py-2 font-medium text-white bg-green-500 rounded-3xl"
      >
        View more
      </button>
    </div>
  );
};

export default Pagination;
