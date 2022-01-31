import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Loginstyles from "../styles/Login.module.css";
import SideLogin from "../component/login/side/SideLogin";
import { LoadIcon } from "../component/ButtonLoader/LoadIcon";
import Head from "next/head";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Cookies from "universal-cookie";
import moment from "moment";
import { signIn, emailToken } from "../services/AuthService";

import { getCookieValue } from "../lib/cookie";
import notify from "../lib/notify";

export async function getServerSideProps({ query }) {
  try {
    const token = query.token;
    const data = await emailToken(token);
    if (data) {
      return {
        redirect: {
          destination: `/login?verify=${encodeURIComponent(data.message)}`
        }
      };
    } 
  } catch (err) {
    console.log(err);
    return {
        redirect: {
          destination: `/login?verify=${encodeURIComponent(err.message)}`
        }
    };
  }
}

export default function verifyLogin({ }) {
  return (
    <div>
      <Head>
        <title>Verify | Nullcast</title>
      </Head>
    </div>
  );
}
