import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import FAQ from "@/components/FAQ";
import Buttons from "@/components/Buttons";

export default function Home() {
    return (
        <div className="p-8">
            <h1 className="text-5xl font-extrabold">
                Here Designers make awesome landing pages
            </h1>
            <h4 className="text-xl pt-4 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid eum nostrum alias iusto mollitia recusandae magnam ipsum
                est incidunt architecto id enim unde blanditiis
            </h4>

            <button className=" w-70 h-12 flex gap-2 items-center bg-blue-500 text-white font-bold px-3 hover:translate-y-1 hover:translate-x-1 drop-shadow-[5px_5px_0px_rgb(0,0,0)] hover:drop-shadow-[0px_0px_0px_rgb(0,0,0)] rounded-lg shadow-lg  ">
                    Get Started  
                    <svg 
                        className="w-8 h-8 transition-all delay-75 hover:rotate-[-45deg] "
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

            <div className="max-w-md  bg-green-700 p-3 mt-5 border-[1px] border-black rounded-lg shadow-lg hover:shadow-sm ">
                <h2 className="text-3xl font-bold">3D</h2>
                <p className="text-black-600 font-semibold text-xl">Perfect your craft with the ame tools useed blah blah blah</p>
                <p className="text-black-600 mt-2 font-semibold">
                    Popular tags
                </p>
                <Buttons text="dff"/>
                <Buttons text="fsdf" />
                <Buttons text="dfsd"/>
            </div>
            

            <div className="max-w-md p-3 mt-5 border-2 border-b-[5px] border-r-[5px] border-black rounded-lg shadow-lg hover:shadow-sm ">
                <h2 className="text-3xl font-bold">Hello World</h2>
                <p className="text-gray-600 font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga maiores earum iusto accusamus odit dicta eveniet
                    perspiciatis, doloremque nobis molestiae ipsam! Fugiat
                    veniam, sunt tempore accusamus aliquid neque voluptate
                    laudantium.
                </p>
            </div>

            <div className="rounded-md w-vw border-solid border-black border-2 mt-5 border-b-8 border-r-8 p-2">
                <h1 className="text-2xl font-bold text-center">
                    Frequently Asked Questions
                </h1>
                <FAQ />
            </div>

            <div className="max-w-md mt-10 ext-2xl font-bold text-center">Card 1</div>
        </div>
    );
}
