import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import React, { useContext, useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { removedBlog } from "../Redux/Action";
import { GlobalContext } from '../Context/GlobalContext'


const Dashboard = () => {
 

  const dispatch = useDispatch();

  const myBlogs = useSelector((store) => store.BlogsReducer);

  const {data} = useContext(GlobalContext)

  const [none, setNone] = useState(false)

 useEffect(()=>{
  setTimeout(() => {
    setNone(true)
  }, 1500);
 },[])

  return (
    <>
    <section className={none ? "sec-none" : ""} id='admin'>
        <h2>Welcome {data.userName}</h2>
    </section>
      <section  id="dashboard">
        <div className="container">
          <div className={myBlogs == '' ? "row none" : "row 1"}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head start">
                  <p>Image</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head start">
                  <p>Title</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head con">
                  <p>Content</p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 head">
                  <span></span>
                </div>
              </div>
            </div>

            {myBlogs.map((item) => {
              return (
                <div className="col-lg-12 ">
                  <div className="row">
                    <div className="col-3 col-sm-3 col-md-2 col-lg-2 content img">
                      <img width={100} src={item.image} alt="" />
                    </div>
                    <div className="col-2 col-sm-3 col-md-3 col-lg-3 content">
                      <p className="p">{item.title}</p>
                    </div>
                    <div className="col-5 col-sm-4 col-md-5 col-lg-5 content center">
                      <p>{item.content}</p>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 content center btn-col">
                      <button>
                      <NavLink to={`/editpage/${item.id}`}>

                        <AiOutlineEdit className="i" />
                      </NavLink>
                      </button>
                      <button
                        className="ms-3"
                        onClick={() => dispatch(removedBlog(item.id))}
                      >
                        <BsTrash3 className="i" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="button">
            <NavLink to={"/addblogs"}>Add Blogs</NavLink>
          </button>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
