import React from "react";
import { box1, box2, box3 } from "../assets";
import { BiSolidPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { circile } from "../assets";

const benefits = [
  {
    image: box1,
    desc: "Get more visibility and qualified member leads",
  },
  {
    image: box2,
    desc: "Collect customer verified reviews",
  },
  {
    image: box3,
    desc: "Own your business dashboard and watch realtime stats",
  },
];
function CommunityBenefit() {
  return (
    <div className="mt-10 bg-bg-color py-14 flex items-center px-10 relative text-center">
      <div>
        <div className="flex md:flex-row flex-col gap-3 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.941"
            height="37.679"
            viewBox="0 0 28.941 37.679"
          >
            <g id="medalla" transform="translate(-59.366)">
              <path
                id="Path_1247"
                data-name="Path 1247"
                d="M85.806,20.6l2.5-2.462-1.188-3.3,1.188-3.3-2.5-2.462-.368-3.489-3.32-1.132L80.277,1.466l-3.484.421L73.837,0,70.88,1.887,67.4,1.466,65.555,4.453l-3.32,1.132-.368,3.489-2.5,2.462,1.188,3.3-1.188,3.3,2.5,2.462.368,3.489,1.843.629-3.159,9.875,5.408-.3,4.231,3.382L73.241,29.3l.6.38.6-.38,2.682,8.382L81.346,34.3l5.408.3L83.595,24.72l1.843-.629ZM69.432,33.949l-2.384-1.9L64,32.212l2-6.26L67.4,28.211l3.484-.421.434.277Zm11.193-1.9-2.384,1.9-1.882-5.882.434-.277,3.484.421,1.392-2.259,2,6.26Zm2.764-9.589-2.735.933-1.515,2.459L76.272,25.5l-2.435,1.554L71.4,25.5l-2.866.346L67.02,23.388l-2.735-.933-.3-2.872-2.058-2.026.978-2.719-.978-2.719,2.058-2.026.3-2.872,2.735-.933,1.515-2.459,2.866.346,2.435-1.554,2.435,1.554,2.866-.346,1.515,2.459,2.735.933.3,2.872,2.058,2.026-.978,2.719.978,2.719-2.058,2.026Z"
                fill="#fdcc6f"
              ></path>
              <path
                id="Path_1248"
                data-name="Path 1248"
                d="M147.755,84.791a8.6,8.6,0,1,0,8.6,8.6A8.608,8.608,0,0,0,147.755,84.791Zm0,14.988a6.389,6.389,0,1,1,6.389-6.389A6.4,6.4,0,0,1,147.755,99.779Z"
                transform="translate(-73.918 -78.551)"
                fill="#fdcc6f"
              ></path>
            </g>
          </svg>
          <h1 className="md:text-3xl text-2xl text-primary font-extrabold pb-4">
            Beneﬁts of Having Your Community With Us
          </h1>
        </div>
        <div className="flex justify-center mt-10">
        <div className="grid md:grid-cols-3 gap-6 w-fit">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center text-lg flex flex-col gap-6 items-center">
              <img src={benefit.image} alt={benefit.image} className="text-center"/>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
        </div>
      <div className="flex justify-center mt-10">
        <Link to='/add-community/' className="bg-secondary py-3 px-6 flex gap-2 items-center w-fit text-center text-white rounded-md hover:opacity-90" >
            <BiSolidPlusCircle className="text-lg"/>
            <p>Add your community</p>
        </Link>
      </div>
      <img src={circile} className="absolute bottom-5 md:left-5 -left-10 w-28" />
      </div>
    </div>
  );
}

export default CommunityBenefit;
