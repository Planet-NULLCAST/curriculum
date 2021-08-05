import styles from "./ListingHeader.module.scss";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export default function ListingHeader() {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    router.push({
      pathname: "/search",
      query: { q: e.target.search.value, clickNo: 0 }
    });
  };
  return (
    <section className={styles.section}>
      <div className="container container--small md:flex justify-between items-center">
        <Fade>
          <div className="md:w-7/12 lg:w-1/2">
            <h2>Nullcast is a Series of Blogs</h2>
            <p>
              Get the latest scoop from the world of development with the latest
              news, hacks, tricks, and more on javascript, machine learning,
              enterprise architecture and more
            </p>
            <div className={styles.form}>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for blogs"
                  name="search"
                />
                <button>
                  <svg
                    width="20"
                    height="13"
                    viewBox="0 0 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.706 5.758L14.456.305a.975.975 0 00-1.42.004c-.392.41-.39 1.074.003 1.482l3.524 3.66H1.004C.45 5.452 0 5.922 0 6.5s.45 1.048 1.004 1.048h15.559l-3.524 3.66a1.081 1.081 0 00-.003 1.483.975.975 0 001.42.004l5.249-5.452a1.083 1.083 0 000-1.485z"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="md:w-5/12 lg:w-1/2 md:flex items-center justify-end">
            <figure>
              <img
                src="/images/duck.svg"
                alt="duck"
                height="250rem"
                width="259rem"
              />
            </figure>
          </div>
        </Fade>
      </div>
    </section>
  );
}
