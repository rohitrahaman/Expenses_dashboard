import React from "react";

function Expense() {
  return (
    <section>
      <div className="flex">
        <div className="w-2/3 min-h-screen p-16">
          <div className="flex items-center gap-44">
            <div>
              <h1 className="font-bold text-3xl">Expenses</h1>
              <p className="text-xs text-gray-400">01 - 25 March, 2020</p>
            </div>
            <div className=" w-8 h-8  gap-0 flex">
              <img src="./img/logo.png" alt="" />
              <img src="./img/logo.png" alt="" />
              <img src="./img/logo.png" alt="" />
            </div>
          </div>
          <div className="w-96 mt-10 ml-3">
            <img src="./img/bar.svg" alt="" />
          </div>
          <div className="mt-10 flex flex-col gap-5 ">
            <div className="flex justify-between border border-t-0 border-r-0 border-l-0 border-b-5">
              <h1>Today</h1>
              <img src="./img/3dot.svg" alt="" />
            </div>
            <div>
              <img src="./img/tl1.svg" alt="" />
            </div>
            <div>
              <img src="./img/tl2.svg" alt="" />
            </div>
            <div>
              <img src="./img/tl3.svg" alt="" />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-5 ">
            <div className="flex justify-between border border-t-0 border-r-0 border-l-0 border-b-5">
              <h1>Monday, 23 March 2020</h1>
              <img src="./img/3dot.svg" alt="" />
            </div>
            <div>
              <img src="./img/tm1.svg" alt="" />
            </div>
            <div>
              <img src="./img/tm2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/3 min-h-screen p-10">
          <div className="text-2xl text-center font-semibold">
            <h1>Where your money go?</h1>
          </div>
          <div className="flex flex-col gap-4 items-center mt-10">
            <div>
              <img src="./img/sp1.svg" alt="" />
            </div>
            <div>
              <img src="./img/sp2.svg" alt="" />
            </div>
            <div>
              <img src="./img/sp3.svg" alt="" />
            </div>
            <div>
              <img src="./img/sp4.svg" alt="" />
            </div>
            <div>
              <img src="./img/sp5.svg" alt="" />
            </div>
            <div>
              <img className="mt-5" src="./img/bt.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expense;
