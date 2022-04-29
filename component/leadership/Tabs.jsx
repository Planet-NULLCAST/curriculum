import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./tabs.module.scss";
import Pagination from "../../component/pagination/paginationLeaderBoard";
import { useRouter } from "next/router";

export default function Tabs(props) {
  const { data, count, page, limit } = props;


  const router = useRouter();
  const changePage = (newPageNo) => {
    // console.log("change page: ", newPageNo, tagFilter, statusFilter);
    router.push({
      pathname: "leaderboard",
      query: {
        page: newPageNo,
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto py-12 overflow-x-auto">
        <table className={styles.table}>
          <tr className={styles.t_row}>
            <th>Rank</th>
            <th>Creator</th>
            <th>Contributor</th>
            <th>Competitor</th>
            <th>Learner</th>
            <th>Point</th>
          </tr>
          {data.map((obj, i) => {
            return (
              <tr className={styles.t_body} key={i}>
                <td className="border 	">
                  <p className="text-center">{i + 1}</p></td>
                <td className="flex justify-left align-center ">
                  <Image
                    src={obj.avatar}
                    width={42}
                    height={42}
                    className="rounded-full"
                    alt="img"
                  />
                  <span className="md:ml-2 text-center justify-center items-center flex">{obj.full_name}</span>
                </td>
                <td>{obj.points.filter(elt => elt.contributor).length == 0 ? 0 : obj.points[0].contributor}</td>
                <td>{obj.points.filter(elt => elt.competitor).length == 0 ? 0 : obj.points[0].contributor}</td>
                <td>{obj.points.filter(elt => elt.learner).length == 0 ? 0 : obj.points[0].contributor}</td>
                <td >
                  <div className="flex justify-left align-center ">
                    <div className={styles.duckbg}>
                      <Image
                        src={"/images/duck.svg"}
                        width={16}
                        height={16}
                        alt="img"
                      />
                    </div>
                    <span className="md:ml-3">{obj.total_points}</span>
                  </div>

                </td>
              </tr>
            );
          })}
        </table>
        {/* <div
          className={` fixed bottom-0 left-0 w-full flex justify-center items-center px-6 `}
        >
          <Pagination
            TotalCount={count}
            changePage={changePage}
            pageNum={1}
            limit={1}
          />
        </div> */}
        <div className={`${data.length < 10 ? "invisible" : " visible flex justify-end  items-end"}`}>
          {/* <input
            type="text"
            // value={10}
            className="w-10 appearance-none border-2 text-base font-semibold text-center px-2 py-1 bg-[#F8F7F7] rounded-md "
          />
          <div className="px-3 font-bold text-xs text-gray-500">110 of 276</div>
          <div>
            <span className="cursor-pointer mx-2 ">
              <Image
                src={"/images/svgs/left.svg"}
                width={16}
                height={16}
                alt="img"
              />
            </span>
            <span className="cursor-pointer mx-2">
              <Image
                src={"/images/svgs/right.svg"}
                width={16}
                height={16}
                alt="img"
              />

            </span>


          </div> */}
          <Pagination
            TotalCount={count}
            changePage={changePage}
            pageNum={1}
            limit={10}
          />

        </div>
      </div>
    </div>
  );
}
