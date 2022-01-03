import { useEffect, useState } from "react";
import Styles from "./pagination.module.scss";

export default function Pagination({ TotalCount, changePage, pageNum, limit }) { 
  // pagenum is coming as string, so converting to number
  pageNum = +pageNum
  const [TotalPages, setTotalPages] = useState();
  const [FirstThree, setFirstThree] = useState([]);
  const [LastThree, setLastThree] = useState([]);
  const [pageNo, setpageNo] = useState(pageNum);
  const [middle, setmiddle] = useState(false);
  const [valuePage, setvaluePage] = useState("");

  // console.log("outside", pageNo);
  useEffect(() => {
    setTotalPages(Math.ceil(TotalCount / limit));
    // console.log({ pageNum });
    setpageNo(pageNum);
  }, [TotalCount]);
  useEffect(() => {
    if (TotalPages >= 6) {
      setFirstThree([1, 2, 3, 4, 5]);
      setLastThree([TotalPages]);
    }
    if (TotalPages <= 5) {
      let temp = [];
      for (let step = 0; step < TotalPages; step++) {
        temp.push(step + 1);
      }
      setFirstThree(temp);
    }
  }, [TotalPages]);

  useEffect(() => {
    if (pageNo > 5 && pageNo < TotalPages) {
      setmiddle(true);
    } else if (pageNo >= TotalPages || pageNo <= 5) {
      setmiddle(false);
    }
    // console.log("changepage");
    changePage(pageNo);
  }, [pageNo]);

  // console.log(pageNo);
  const nextBut = () => {
    if (pageNo !== TotalPages) {
      setpageNo(pageNo + 1);
      console.log(pageNo);
    }
  };
  const prevBut = () => {
    if (pageNo !== 1) {
      setpageNo(pageNo - 1);
      console.log(pageNo);
    }
  };
  return (
    <>
      {TotalCount > 0 && (
        <div className="bg-white h-12 flex justify-center w-full items-center rounded border">
          <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700">
              <div
                className={`h-8 w-8 mr-1 flex justify-center items-center rounded-full ${
                  pageNo === 1
                    ? `${Styles.arrowStyleDisabled} cursor-not-allowed`
                    : `${Styles.arrowStyle}  cursor-pointer hover:bg-black`
                }  `}
                onClick={() => {
                  prevBut();
                  setvaluePage("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`feather feather-chevron-left w-4 h-4`}
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="flex h-8 font-medium rounded-full">
                <div className="flex h-8 font-medium rounded-full ">
                  <div
                    className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500 ${
                      pageNo === FirstThree[0] && "text-white bg-black"
                    }`}
                    onClick={() => {
                      setpageNo(FirstThree[0]);
                      setvaluePage("");
                    }}
                  >
                    {FirstThree[0]}
                  </div>
                  {pageNo === TotalPages - 1 && TotalPages > 6 && (
                    <div
                      className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500 ${
                        pageNo === FirstThree[1] && "text-white bg-black"
                      }`}
                      onClick={() => {
                        setpageNo(FirstThree[1]);
                        setvaluePage("");
                      }}
                    >
                      {FirstThree[1]}
                    </div>
                  )}
                  {pageNo === TotalPages - 1 && TotalPages > 6 && (
                    <div
                      className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500 ${
                        pageNo === FirstThree[2] && "text-white bg-black"
                      }`}
                      onClick={() => {
                        setpageNo(FirstThree[2]);
                        setvaluePage("");
                      }}
                    >
                      {FirstThree[2]}
                    </div>
                  )}
                  {!middle && (
                    <>
                      {FirstThree[1] && (
                        <div
                          className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500  ${
                            pageNo === FirstThree[1] && "text-white bg-black"
                          }`}
                          onClick={() => {
                            setpageNo(FirstThree[1]);
                            setvaluePage("");
                          }}
                        >
                          {FirstThree[1]}
                        </div>
                      )}
                      {FirstThree[2] && (
                        <div
                          className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500  ${
                            pageNo === FirstThree[2] && "text-white bg-black"
                          }`}
                          onClick={() => {
                            setpageNo(FirstThree[2]);
                            setvaluePage("");
                          }}
                        >
                          {FirstThree[2]}
                        </div>
                      )}
                      {FirstThree[3] && (
                        <div
                          className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500  ${
                            pageNo === FirstThree[3] && "text-white bg-black"
                          }`}
                          onClick={() => {
                            setpageNo(FirstThree[3]);
                            setvaluePage("");
                          }}
                        >
                          {FirstThree[3]}
                        </div>
                      )}
                      {FirstThree[4] && (
                        <div
                          className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500  ${
                            pageNo === FirstThree[4] && "text-white bg-black"
                          }`}
                          onClick={() => {
                            setpageNo(FirstThree[4]);
                            setvaluePage("");
                          }}
                        >
                          {FirstThree[4]}
                        </div>
                      )}
                      {TotalPages > 6 && (
                        <div className="w-8 mx-2 md:flex justify-center items-center hidden font-semibold leading-5 transition duration-150 ease-in  rounded-full ">
                          ...
                        </div>
                      )}
                    </>
                  )}
                  {middle && (
                    <>
                      {pageNo - 1 > 1 && (
                        <div className="w-8 mx-2 md:flex justify-center items-center hidden font-semibold leading-5 transition duration-150 ease-in  rounded-full ">
                          ...
                        </div>
                      )}
                      {pageNo - 1 > 1 && (
                        <div
                          className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500 `}
                          onClick={() => {
                            setpageNo(pageNo - 1);
                            setvaluePage("");
                          }}
                        >
                          {pageNo - 1}
                        </div>
                      )}
                      <div
                        className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  text-white bg-black`}
                        onClick={() => {
                          setpageNo(pageNo);
                          setvaluePage("");
                        }}
                      >
                        {pageNo}
                      </div>
                      {pageNo + 1 < TotalPages && (
                        <div
                          className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500 `}
                          onClick={() => {
                            setpageNo(pageNo + 1);
                            setvaluePage("");
                          }}
                        >
                          {pageNo + 1}
                        </div>
                      )}
                      {pageNo + 1 < TotalPages && (
                        <div className="w-8 mx-2 md:flex justify-center items-center hidden font-semibold leading-5 transition duration-150 ease-in  rounded-full ">
                          ...
                        </div>
                      )}
                    </>
                  )}
                  {LastThree[0] && (
                    <div
                      className={`w-8 mx-2 md:flex justify-center items-center hidden font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500  ${
                        pageNo === LastThree[0] && "text-white bg-black"
                      }`}
                      onClick={() => {
                        setpageNo(LastThree[0]);
                        setvaluePage("");
                      }}
                    >
                      {LastThree[0]}
                    </div>
                  )}
                  <div
                    className={`w-8 flex justify-center md:hidden items-center font-semibold  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  hover:text-gray-500 `}
                  >
                    {pageNo}
                  </div>
                </div>
              </div>
              <div
                className={`h-8 w-8 mr-1 flex justify-center items-center rounded-full ${
                  pageNo === TotalPages
                    ? `${Styles.arrowStyleDisabled} cursor-not-allowed`
                    : `${Styles.arrowStyle}  cursor-pointer  hover:bg-black`
                }  `}
                onClick={() => {
                  nextBut();
                  setvaluePage("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`feather feather-chevron-left w-4 h-4`}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm ml-5 text-gray-400 font-semibold">
              Go to page :
            </p>
            <input
              type="text"
              name=""
              // id=""
              className="border w-12 ml-2 border-gray-400 rounded px-2 text-xs py-1"
              value={valuePage}
              onChange={(e) => {
                const valueX = e?.target?.value?.match(/[0-9]*/g).join("");
                if (valueX <= TotalPages) {
                  if (valueX > 0) {
                    setvaluePage(valueX);
                  } else {
                    setvaluePage("");
                  }
                }
              }}
            />
            <button
              className={`flex items-center ml-2 ${Styles.go}`}
              type="button"
              onClick={() => {
                setpageNo(parseInt(valuePage));
              }}
            >
              <span className="text-gray-900 text-sm font-semibold">Go</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#545E6B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`feather feather-chevron-left w-4 h-4`}
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
