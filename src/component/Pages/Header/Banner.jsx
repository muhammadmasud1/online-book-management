
const Banner = () => {
              return (
                <div className="bg-[#F5F2ED]">
                  <div className="">
                    <div className="max-w-6xl mx-auto ">
                      <div
                        className="py-14 gap-10 grid grid-cols-1 
                      md:grid-cols-2 lg:grid-cols-2 items-center justify-between px-5"
                      >
                        <div>
                          <img
                            className="max-w-[85px] my-6"
                            src="https://i.ibb.co/Zz8gZcs/64929042c63f0d96605e84ff-graduate-cap.png"
                            alt=""
                          />
                          <h1 className="text-5xl my-5 font-bold text-[#07294D]">
                            Build <br /> Your Future, Choose <br />
                            your Book
                          </h1>
                          <p>
                            Build your future, choose your book. Empower your
                            journey through knowledge, one page at a time. Dive
                            into endless possibilities
                          </p>
                          <div className="my-5">
                            <button
                              className="btn bg-[#0C8B51] text-white w-44 h-16 rounded-full text-xl
                            hover:bg-[#07294D] "
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div>
                          <img
                            className="w-full"
                            src="https://i.ibb.co/9ptpMTL/64929042c63f0d96605e8509-hero-slider.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};

export default Banner;