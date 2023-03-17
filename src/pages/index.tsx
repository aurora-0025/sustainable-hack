import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import FAQ from "@/components/FAQ";
import Buttons from "@/components/Buttons";
import BarChart from "@/components/Charts";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold">
        Here Designers make awesome landing pages
      </h1>
      <h4 className="pt-4 text-xl font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eum
        nostrum alias iusto mollitia recusandae magnam ipsum est incidunt
        architecto id enim unde blanditiis
      </h4>

      <div className=" flex">
        <button className=" w-70 mt-4 mr-4 flex h-12 items-center gap-2 rounded-lg bg-blue-500 px-3 font-bold text-white shadow-lg drop-shadow-[5px_5px_0px_rgb(0,0,0)] hover:translate-y-1 hover:translate-x-1 hover:drop-shadow-[0px_0px_0px_rgb(0,0,0)]  ">
          Get Started
          <svg
            className="h-8 w-8 transition-all delay-75 hover:rotate-[-45deg] "
            clip-rule="evenodd"
            fill-rule="evenodd"
            fill="white"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <button className=" w-70 mt-4 flex h-12 items-center gap-2 rounded-lg bg-white px-3 font-bold text-black shadow-lg drop-shadow-[5px_5px_0px_rgb(0,0,0)] hover:translate-y-1 hover:translate-x-1 hover:drop-shadow-[0px_0px_0px_rgb(0,0,0)]  ">
          Download
          <svg
            className="h-8 w-8 transition-all delay-75 hover:rotate-[-45deg] "
            clip-rule="evenodd"
            fill-rule="evenodd"
            fill="black"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
      <div className="mt-5  max-w-md rounded-lg border-[1px] border-black bg-orange-400 p-3 shadow-lg hover:shadow-sm ">
        <h2 className="text-3xl font-bold">3D</h2>
        <p className="text-black-600 text-xl font-semibold">
          Perfect your craft with the ame tools useed blah blah blah
        </p>
        <p className="text-black-600 mt-2 font-semibold">Popular tags</p>
        <Buttons text="dff" />
        <Buttons text="fsdf" />
        <Buttons text="dfsd" />
      </div>

      <div className="mt-5 max-w-md rounded-lg border-2 border-b-[5px] border-r-[5px] border-black p-3 shadow-lg hover:shadow-sm ">
        <h2 className="text-3xl font-bold">Hello World</h2>
        <p className="font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maiores
          earum iusto accusamus odit dicta eveniet perspiciatis, doloremque
          nobis molestiae ipsam! Fugiat veniam, sunt tempore accusamus aliquid
          neque voluptate laudantium.
        </p>
      </div>

      <div className="w-vw mt-5 rounded-md border-2 border-b-8 border-r-8 border-solid border-black p-2">
        <h1 className="text-center text-2xl font-bold">
          Frequently Asked Questions
        </h1>
        <FAQ />
      </div>

      <div className="mx-auto mt-6 max-w-2xl">
        <div className="max-w-md rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Member&apos;s List
            </h3>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Top Story
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
      </div>
    </div>
  );
}
