import { useEffect, useState } from "react";
import Head from "next/head";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import Landing from "../component/leadership/Landing";
import Tabs from "../component/leadership/Tabs";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import LeaderBoardService from "../services/LeaderBoardService";
import notify from "../lib/notify";

export default function Leaderboard() {
  const [LeaderBoardData, setLeaderBoardData] = useState({
    users: [],
    count: 0,
    limit: 0,
    page: 0
  });
  async function getLeaderBoard() {
    try {
      const { data } = await LeaderBoardService.getLeaderBoard();
      setLeaderBoardData(data);
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, "error");
    }
  }
  useEffect(() => {
    getLeaderBoard();
  }, []);

  const contents = {
    type: "courses",
    title: "Leaderboard",
    subtitle:
      "Get the latest scoop from the world of development with the latest news, hacks, tricks, and more on javascript, machine learning, enterprise architecture and more",
    buttonText: "Get Started for free",
    image: "/images/bg-coursespotlight2.svg",
    alt: "Want to be a Mighty Duck?",
    imageWidth: 482,
    imageHeight: 377,
    bgcolor: "#083644"
    // bgimage: "bg1"
  };
  return (
    <div>
      <Head>
        <title>Leaderboard | Nullcast </title>
      </Head>
      <SiteHeader />
      <Landing contents={contents} />
      <Tabs
        data={LeaderBoardData.users}
        count={LeaderBoardData.count}
        pages={LeaderBoardData.page}
        limit={LeaderBoardData.limit}
      />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
