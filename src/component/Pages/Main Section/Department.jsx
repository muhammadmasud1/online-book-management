import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Department = () => {
              return (
                <div className="max-w-6xl mx-auto my-20">
                  <div className="flex items-center gap-10 justify-between px-5 ">
                    <div>
                      <h1 className="text-5xl text-[#07294D] font-semibold my-5">
                        Semester 
                      </h1>
                      <p className="text-[##393939]">
                        Provide most popular courses that your want to join and{" "}
                        <br />
                        lets start the course for the most simply way in here
                      </p>
                    </div>
                    <div>
                      <div>
                        <Link className="flex items-center gap-3 cursor-pointer">
                          <p className="text-[#07294D] text-xl">View All </p>
                          <FaArrowRight></FaArrowRight>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                            
                  </div>
                </div>
              );
};

export default Department;