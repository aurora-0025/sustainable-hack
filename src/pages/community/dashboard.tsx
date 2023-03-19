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
            data: [300, 50, 100],
            backgroundColor: ["#4188ff", "#649eff", "#78aaff"],
            hoverBackgroundColor: ["#FF6384", "#FF6384", "#FF6384"],
        },
    ],
};

const data2 = {
    labels: ["Red", "Green", "Blue"],
    datasets: [
        {
            data: [300, 50],
            backgroundColor: ["#4188ff", "#649eff"],
            hoverBackgroundColor: ["#FF6384", "#FF6384"],
        },
    ],
};

function dashboard() {
    return (
        <div className="p-5 md:p-10 flex justify-center">
            <div className="max-w-[1260px] mt-6 flex flex-col ">
            <div className="mt-6 flex  flex-col gap-10 p-5 md:flex-row justify-evenly">
                <div className="flex flex-col divide-y-[0.5px] divide-gray-700 rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                    <div className="mt-5 flex-col">
                        <div className="text-sm font-bold text-blue-700">
                            Sus HAck name
                        </div>
                        <div className="flex justify-between">
                            <h1 className="text-decoration-line: text-4xl font-semibold text-white  hover:text-blue-300">
                                Community Dashboard
                            </h1>
                            <h1 className="text-xl font-bold text-white">
                                M+12
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly divide-y-[0.5px] divide-gray-700 md:flex-row md:divide-x-[0.5px] ">
                        <div className="mt-5 flex-shrink-0">
                            <img
                                className="h-80 w-80 "
                                src="https://png.pngtree.com/png-clipart/20191206/ourmid/pngtree-green-dollar-sign-money-tree-png-image_2070575.jpg"
                                alt="Neil image"
                            />
                        </div>
                        <div className="  mt-5 flex-col  ">
                            <h1 className="ml-5 mt-5  text-2xl font-bold text-white  hover:text-blue-300">
                                Daily Projections
                            </h1>
                            <h4 className=" ml-5 pt-2 text-xl font-medium text-white">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit.
                            </h4>

                            <h1 className="ml-5 mt-5  text-2xl font-bold text-white  hover:text-blue-300">
                                Forum Check in
                            </h1>
                            <h4 className=" ml-5 pt-2 text-xl font-medium text-white">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit.
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col divide-y-[0.5px] divide-gray-700 rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                    <div className=" flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                            Invesments&apos;s List
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
                        <h3 className="font text-xl text-gray-900 dark:text-white">
                            Copies
                        </h3>
                        <h3 className="font text-xl  text-gray-900 dark:text-white">
                            Blah
                        </h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly ">


                <div className="flex-1 max-w-2xl mt-6 -lgrouexed border p-4 shadow-md border-gray-700 bg-gray-800 sm:p-8">
                    <div className=" mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Member&apos;s List
                        </h3>

                        <a
                            href="#"
                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Status
                        </a>
                    </div>

                    <div className="flow-root">
                        <ul
                            role="list"
                            className="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                            <li className="mt-1 py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://wallpapercave.com/wp/wp11696053.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Bocchi the Rohn
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            deez@nuts.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Active
                                    </div>
                                </div>
                            </li>
                            <li className="mt-1 py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://wallpapercave.com/wp/wp11696053.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Bocchi the Rohn
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            deez@nuts.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Active
                                    </div>
                                </div>
                            </li>
                            <li className="mt-1 py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://wallpapercave.com/wp/wp11696053.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            Bocchi the Rohn
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            deez@nuts.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Active
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col">
                <div className="flex-1  max-w-[500px] mt-6">
                    <div className="rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                        <h3 className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                            Daily Report
                        </h3>

                        <div className="flex">
                            <h4 className=" ml-5 mt-5 pt-2 text-lg font-light text-white">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit.
                            </h4>
                            <div className=" h-24 w-24">
                                <Doughnut data={data2} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1  max-w-[500px] mt-6">
                    <div className="rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                        <h3 className="text-2xl font-semibold leading-none text-gray-900 dark:text-white">
                            Remote Jobs
                        </h3>

                        <div className="flex">
                            <h4 className=" ml-5 mt-5 pt-2 text-lg font-light text-white">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit.
                            </h4>
                            <div className="font-semibold text-white  text-[50px]">
                                30+
                            </div>
                        </div>
                    </div>
                </div>
                </div>


                
            </div> 
        </div>
        </div>
    );
}

export default dashboard;
