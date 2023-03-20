import Head from "next/head";
import { Inter } from "next/font/google";
import FAQ from "@/components/FAQ";
import Buttons from "@/components/Buttons";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const data = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
        {
            data: [250, 1000],
            backgroundColor: ["#1F2937", "#649eff"],
            hoverBackgroundColor: ["#1E293B", "#FF6384"],
            borderWidth: [0, 0],
            borderRadius: [10, 50],
        },
    ],
};



function dashboard() {
    return (
        <div className="flex justify-center bg-gray-900 p-5 md:p-10 ">
            <div className="mt-6 flex max-w-[1240px] flex-col ">
                <div className="flex  flex-col justify-evenly gap-10 p-5 md:flex-row">
                    <div className="flex flex-col divide-y-[0.5px] divide-gray-700 rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                        <div className="mt-5 flex-col">
                            <div className="text-sm font-bold text-blue-700">
                                Sus HAck name
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-decoration-line: text-4xl font-semibold text-white  hover:text-blue-300">
                                    Sponsor Dashboard
                                </h1>
                                <h1 className="text-xl font-bold text-white">M+12</h1>
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly divide-y-[0.5px] divide-gray-700 md:flex-row md:divide-x-[0.5px] ">
                            <div className="mt-5 flex-shrink-0">
                                <img
                                    className="rounded-lg h-80 w-80 "
                                    src="https://static.vecteezy.com/system/resources/previews/007/545/739/original/donation-box-illustration-vector.jpg"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="  mt-5 flex-col  ">
                                <h1 className="ml-5 mt-5  text-2xl font-bold text-white  hover:text-blue-300">
                                    Daily Projections
                                </h1>
                                <h4 className=" ml-5 pt-2 text-xl font-medium text-white">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </h4>

                                <h1 className="ml-5 mt-5  text-2xl font-bold text-white  hover:text-blue-300">
                                    Forum Check in
                                </h1>
                                <h4 className=" ml-5 pt-2 text-xl font-medium text-white">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col divide-y-[0.5px] divide-gray-700 rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                        <div className=" flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                                Community Return
                            </h3>
                            <div className="h-30 w-30  mt-10 mb-4">
                                <Doughnut data={data} />
                            </div>
                        </div>
                        <div className="mt-5  flex justify-between ">
                            <h3 className="font text-xl  text-gray-900 dark:text-white">
                                Personalised
                            </h3>
                            <h3 className="font text-xl  text-gray-900 dark:text-white">
                                Database
                            </h3>
                        </div>
                    </div>
                </div>


                <div className="flex  flex-col justify-center gap-10 p-5 md:flex-row">
                    
                    <div className="max-w-lg overflow-hidden rounded shadow-lg">
                        <img
                            className="w-50"
                            src="https://www.shutterstock.com/image-vector/modern-multicultural-society-concept-crowd-260nw-1283029945.jpg"
                            alt="Mountain"
                        />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold text-white">Community 1</div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            </div>
                            <p className="text-base text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #WheatFarm
                            </span>
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #Nigeria
                            </span>
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #Self
                            </span>
                        </div>
                        <div className="flex max-w-md items-center gap-100 justify-around">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">20%</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sponsor</a>
                        </div>
                    </div>

                    <div className="max-w-lg overflow-hidden rounded shadow-lg">
                        <img
                            className="w-50"
                            src="https://www.shutterstock.com/image-vector/modern-multicultural-society-concept-crowd-260nw-1283029945.jpg"
                            alt="Mountain"
                        />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold text-white">Community 2</div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            </div>
                            <p className="text-base text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #WheatFarm
                            </span>
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #Nigeria
                            </span>
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #Self
                            </span>
                        </div>
                        <div className="flex max-w-md items-center gap-100 justify-around">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">40%</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sponsor</a>
                        </div>
                    </div>

                    <div className="max-w-lg overflow-hidden rounded shadow-lg">
                        <img
                            className="w-50"
                            src="https://www.shutterstock.com/image-vector/modern-multicultural-society-concept-crowd-260nw-1283029945.jpg"
                            alt="Mountain"
                        />
                        <div className="px-6 py-4">
                            <div className="mb-2 text-xl font-bold text-white">Community 3</div>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-grey-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
                            </div>
                            <p className="text-base text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #WheatFarm
                            </span>
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #Nigeria
                            </span>
                            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                                #Self
                            </span>
                        </div>
                        <div className="flex max-w-md items-center gap-100 justify-around">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">70%</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sponsor</a>
                        </div>
                    </div>

                    
                
                   

                </div>
            </div>
        </div>

    );
}

export default dashboard;
