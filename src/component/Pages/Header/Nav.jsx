import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Nav = () => {
                
              const navLinks = (
                <>
                  <li className="text-[17px]">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      <span className="flex items-center gap-1 ">
                        <FaHome></FaHome>
                        <p>Home</p>
                      </span>
                    </NavLink>
                  </li>
                  <li className="text-[17px]">
                    <NavLink
                      to="/book"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      <span className="flex items-center gap-1">
                        <FaBook></FaBook>
                        Book Zone
                      </span>
                    </NavLink>
                  </li>
                  <li className="text-[17px]">
                    <NavLink
                      to="/semester"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      <span className="flex items-center gap-1">
                        <PiStudent></PiStudent>
                        Semester
                      </span>
                    </NavLink>
                  </li>
                  <li className="text-[17px]">
                    <NavLink
                      to="/guide"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      <span className="flex items-center gap-1">
                        <FaBookmark></FaBookmark>
                        Guide
                      </span>
                    </NavLink>
                  </li>
                  <li className="text-[17px]">
                    <NavLink
                      to="/noties"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      <span className="flex items-center gap-1">
                        <IoIosNotifications />
                        Notice
                      </span>
                    </NavLink>
                  </li>
                </>
              );
          

              return (
                <div>
                  <div className="max-w-7xl mx-auto">
                    <div className="navbar bg-base-100">
                      <div className="navbar-start">
                        <div className="dropdown">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                              />
                            </svg>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            {navLinks}
                          </ul>
                        </div>
                        <div>
                          <img className="w-full"
                            src="https://i.ibb.co/k1Wh5kb/Blue-Modern-Free-Academy-Logo-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                          {navLinks}
                        </ul>
                      </div>
                      <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                          >
                            <div className="w-10 rounded-full">
                              <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                              />
                            </div>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                              </a>
                            </li>
                            <li>
                              <a>Settings</a>
                            </li>
                            <li>
                              <a>Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Nav;