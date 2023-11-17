import React from "react";
import blogs from "../data/Blogs";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";

function Blog() {
  return (
    <div className="pt-14 pb-10 px-10">
      <div className="flex gap-3 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46.605"
          height="43.024"
          viewBox="0 0 46.605 43.024"
        >
          <g id="blog" transform="translate(0 -8.181)">
            <rect
              id="Rectangle_548"
              data-name="Rectangle 548"
              width="12.417"
              height="2.626"
              transform="translate(8.45 13.605)"
              fill="#fdcc6f"
            ></rect>
            <path
              id="Path_1249"
              data-name="Path 1249"
              d="M165.988,34.751a1.64,1.64,0,1,0-1.162-.481A1.652,1.652,0,0,0,165.988,34.751Z"
              transform="translate(-128.383 -18.192)"
              fill="#fdcc6f"
            ></path>
            <path
              id="Path_1250"
              data-name="Path 1250"
              d="M138.988,34.751a1.64,1.64,0,1,0-1.162-.481A1.652,1.652,0,0,0,138.988,34.751Z"
              transform="translate(-107.292 -18.192)"
              fill="#fdcc6f"
            ></path>
            <path
              id="Path_1251"
              data-name="Path 1251"
              d="M111.986,34.751a1.64,1.64,0,1,0-1.16-.481A1.654,1.654,0,0,0,111.986,34.751Z"
              transform="translate(-86.2 -18.192)"
              fill="#fdcc6f"
            ></path>
            <path
              id="Path_1252"
              data-name="Path 1252"
              d="M0,8.181V42.837H10.828v8.369l15.7-8.369H46.6V8.181Zm43.322,3.282v6.908H3.282V11.463ZM25.712,39.554l-11.6,6.183V39.554H3.282v-17.9h40.04v17.9Z"
              fill="#fdcc6f"
            ></path>
            <rect
              id="Rectangle_549"
              data-name="Rectangle 549"
              width="27.939"
              height="2.626"
              transform="translate(9.333 26.171)"
              fill="#fdcc6f"
            ></rect>
            <rect
              id="Rectangle_550"
              data-name="Rectangle 550"
              width="27.939"
              height="2.626"
              transform="translate(9.333 31.973)"
              fill="#fdcc6f"
            ></rect>
          </g>
        </svg>
        <h1 className="text-3xl text-primary font-extrabold pb-4">
          Check our favourites communities
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 md:px-14 pt-8">
        {blogs.map((blog, index) => (
          <div className="bg-white shadow-card rounded-xl py-3 overflow-hidden flex flex-col items-between">
            <div className="h-full">
              <div className="flex gap-2 px-3 pb-3">
                <p className="text-gray-400 text-sm">{blog.month}</p>
                <p className="text-sm">{blog.day}</p>
              </div>
              <div className="w-full h-64 overflow-hidden ">
                <Link to={`${blog.viewLink}`}>
                  <img
                    src={blog.image}
                    className="hover:scale-105 duration-500 object-cover w-full h-full"
                  />
                </Link>
              </div>
              <div className="px-8 pt-4 text-center">
                <Link to={`${blog.viewLink}`} className="pt-4 font-bold hover:opacity-80 md:text-base ">{blog.title}</Link>
                <p className="text-sm pt-2">{blog.desc}</p>
              </div>
            </div>
            <Link to="post-category/discord-communities" className="flex gap-5 items-center text-sm pt-6 px-10">
                <BsBookmark />
                <p>Discord Communities</p>
              </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to='/blog/' className="bg-secondary py-3 px-6 w-fit text-center text-white rounded-md hover:opacity-90" >
            <p>Read Blog</p>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
