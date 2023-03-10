import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "../components/Typewriter"

const Home = () => {
    return (
        <div name="home" className="h-screen w-full animated-background  colorh">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">


                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                      I'm a <span className=""><Typewriter/></span>
                    </h2>

                    <p className="text-gray-400 py-2 max-w-md">
                        Passion for writing computer programms lead me from engineering to web development with objective to create and
                        maintain functional websites and applications.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 text-white-300 color duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>

                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        // className="rounded-2xl mx-auto w-2/3 md:w-full"
                        className=" my-5 mx-auto w-2/5 md:w-full gradient-to-r border-blue-400 animated opaa rounded-full border-8 shadow"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;