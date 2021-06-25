import styles from "./BlogPost.module.scss";
import Link from "next/link";
import Slider from "react-slick";
import { useState, useEffect } from "react";

export default function BlogPost(props) {
  const createMarkup = (value) => {
    return { __html: value };
  };
  const [headings, setHeadings] = useState();
  useEffect(() => {
    // const htmlString = String(createMarkup(props.html).__html);
    // console.log(htmlString);
    // const res = htmlString.match(/<h2[^>]+>(.*?)<\/h2>/g);
    // console.log({ res });
    // const res2 = res.map((i) => i.match(/\>(.*?)\</));
    // console.log({ res2 });
    const h2Tags = Array.from(
      document.getElementById("component").getElementsByTagName("h2")
    ).map((item) => {
      return {
        id: item.id,
        text: item.innerHTML
      };
    });
    // console.log({ h2Tags });
    setHeadings(h2Tags);
  }, []);

  return (
    <>
      <style jsx>{`
        .bg1 {
          background: #282828;
          color: #fff;
          padding: 80px 0;
          position: relative;
        }
        .bg1:before,
        .bg1:after {
          background: #282828;
          content: "";
          position: absolute;
          z-index: -1;
          width: 100vw;
          height: 100%;
          top: 0;
        }
        .bg1:before {
          right: 0;
        }
        .bg1:after {
          left: 0;
        }
        .twitter-tweet {
          margin: auto;
        }
      `}</style>
      <section className={styles.post}>
        <div className={styles.postWrap}>
          <div className="container container--post">
            <div className={styles.postHeader}>
              <div className={styles.wrapVote}>
                <div className={styles.vote}>
                  <a href="" className="uo">
                    <svg
                      width="37"
                      height="28"
                      viewBox="0 0 37 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.805 2.013L.977 22.21C.338 23.144 0 24.084 0 24.865c0 1.51 1.212 2.445 3.241 2.445h29.886c2.027 0 3.237-.933 3.237-2.44 0-.783-.339-1.707-.98-2.642L21.557 2.02C20.666.72 19.467 0 18.18 0c-1.286 0-2.484.712-3.375 2.013z"
                        fill="#CFCFCF"
                      />
                    </svg>
                  </a>
                  <span className="count">10215</span>
                  <a href="" className="down">
                    <svg
                      width="37"
                      height="28"
                      viewBox="0 0 37 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.805 25.751L.977 5.553C.338 4.62 0 3.68 0 2.899 0 1.389 1.212.454 3.241.454h29.886c2.027 0 3.237.933 3.237 2.44 0 .782-.339 1.707-.98 2.642L21.557 25.744c-.891 1.3-2.09 2.02-3.377 2.02-1.286 0-2.484-.712-3.375-2.013z"
                        fill="#CFCFCF"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.widget}>
                <div className={styles.index}>
                  <h3>Page Index</h3>
                  <ol>
                    {headings &&
                      headings.map((heading) => (
                        <li key={heading.id}>
                          <a href={`#${heading.id}`}>
                            <p className="linkUnderline">{heading.text}</p>
                          </a>
                        </li>
                      ))}
                  </ol>
                </div>
                <div className={styles.social}>
                  <h3>Share</h3>
                  <ul>
                    <li className={styles.facebook}>
                      <Link href="/">
                        <a rel="noopener">
                          <svg
                            width="7"
                            height="16"
                            viewBox="0 0 7 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.722 2.657H7V.113C6.78.078 6.021 0 5.138 0 3.296 0 2.033 1.325 2.033 3.76V6H0v2.844h2.033V16h2.493V8.845h1.951L6.787 6H4.526V4.04c0-.822.194-1.384 1.196-1.384z" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.linkedin}>
                      <Link href="/">
                        <a rel="noopener">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.535 15.627h.004V9.896c0-2.804-.604-4.964-3.882-4.964-1.575 0-2.633.865-3.065 1.684h-.045V5.194H6.439v10.433h3.236V10.46c0-1.36.258-2.676 1.942-2.676 1.66 0 1.685 1.553 1.685 2.763v5.08h3.233zM1.17 5.194h3.24v10.433H1.17V5.194zM2.788 0C1.752 0 .911.84.911 1.877c0 1.036.841 1.894 1.877 1.894s1.877-.858 1.877-1.894A1.878 1.878 0 002.788 0z" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.twitter}>
                      <Link href="/">
                        <a rel="noopener">
                          <svg
                            width="19"
                            height="16"
                            viewBox="0 0 19 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18.413 2.589c-.685.3-1.414.5-2.175.596a3.752 3.752 0 001.66-2.086 7.541 7.541 0 01-2.392.914 3.772 3.772 0 00-6.528 2.58c0 .3.025.587.087.86a10.681 10.681 0 01-7.778-3.947 3.8 3.8 0 00-.516 1.908A3.78 3.78 0 002.447 6.55a3.727 3.727 0 01-1.705-.465v.042a3.791 3.791 0 003.023 3.707 3.766 3.766 0 01-.99.125c-.24 0-.485-.014-.714-.065a3.81 3.81 0 003.527 2.629 7.582 7.582 0 01-4.68 1.61 7.08 7.08 0 01-.902-.052 10.624 10.624 0 005.789 1.693c6.944 0 10.74-5.752 10.74-10.738a9.69 9.69 0 00-.014-.488 7.529 7.529 0 001.892-1.96z" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.instagram}>
                      <Link href="/">
                        <a rel="noopener">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="#757575"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.116 0h-5.86A4.884 4.884 0 00.373 4.884v5.86a4.884 4.884 0 004.883 4.883h5.86A4.884 4.884 0 0016 10.744v-5.86A4.884 4.884 0 0011.116 0zm3.419 10.744a3.422 3.422 0 01-3.419 3.418h-5.86a3.422 3.422 0 01-3.418-3.418v-5.86a3.422 3.422 0 013.418-3.419h5.86a3.422 3.422 0 013.419 3.419v5.86z" />
                            <path d="M8.186 3.907a3.907 3.907 0 100 7.814 3.907 3.907 0 000-7.814zm0 6.349a2.445 2.445 0 01-2.441-2.442 2.445 2.445 0 012.441-2.442 2.445 2.445 0 012.442 2.442 2.445 2.445 0 01-2.442 2.442zM12.386 4.134a.52.52 0 100-1.041.52.52 0 000 1.041z" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.postContent}>
              <div
                dangerouslySetInnerHTML={createMarkup(props.html)}
                id="component"
              />
              {/* 

                        <p>He wrote this in 2007, but it is still valid today, especially in the case of tech startups.

    Year-on-year we see hundreds of startups popping up everywhere with what sounds like the next big thing in tech that's going to revolutionize the industry and year-on-year without fail we see the vast majority of them fail.</p>

    <h3 id="post1">Twitter post</h3>
                        <figure className="kg-card kg-embed-card"><blockquote className="twitter-tweet" data-width="550"><p lang="en" dir="ltr">In the third installment of <a href="https://twitter.com/hashtag/OpenMinded?src=hash&amp;ref_src=twsrc%5Etfw">#OpenMinded</a>, <a href="https://twitter.com/KendallJenner?ref_src=twsrc%5Etfw">@KendallJenner</a> is joined by Dr. Curley Bonds (<a href="https://twitter.com/md_bonds?ref_src=twsrc%5Etfw">@md_bonds</a>), who explains how to step up as an ally for a loved one who is experiencing a panic attack or seems regularly anxious.<br /><br />Watch more: <a href="https://t.co/aAzSYRjj3A">https://t.co/aAzSYRjj3A</a> <a href="https://t.co/a301idiLwi">pic.twitter.com/a301idiLwi</a></p>&mdash; Vogue Magazine (@voguemagazine) <a href="https://twitter.com/voguemagazine/status/1395487612614455304?ref_src=twsrc%5Etfw">May 20, 2021</a></blockquote>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        </figure>

                        <p>A startup can fail for a wide variety of reasons, but most often than not, they fail because they don't achieve product-market fit. It is because the product they have built—no matter how good it is—is not selling.  Customers are not talking about it, they don't understand its values, dwindling sales numbers, below par user base, and so on. Which points to one thing </p>
                        <h3 id="post2">Image post</h3>
                        <figure className="kg-card kg-image-card"><img src="https://nullcast-assets.s3.amazonaws.com/dev/posts/4243524wrtfsdf/nullcast-banner-template.png" className="kg-image" alt loading="lazy" width="340" height="192" /></figure>
                        <h2 id="heading-1">heading 1</h2>
                        <blockquote>
                        <p>a quote<br />
                        some other quote<br />
                        <strong>bold</strong><br />
                        <em>italic</em></p>
                        </blockquote>
                        <h3 id="post3">Sample list</h3>
                        <ul>
                        <li>afafa</li>
                        <li>adfasdfasdf</li>
                        <li>asdfasfas</li>
                        <li>adfafsadf</li>
                        </ul>
                        
                        <figure className="kg-card kg-embed-card"><iframe width="356" height="200" src="https://www.youtube.com/embed/Cv0q056lL0Y?feature=oembed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></figure>


                        <div>

                        <h3>Subtitle</h3>

                        <p>A startup can fail for a wide variety of reasons, but most often than not, they fail because they don't achieve product-market fit. It is because the product they have built—no matter how good it is—is not selling.  Customers are not talking about it, they don't understand its values, dwindling sales numbers, below par user base, and so on. Which points to one thing </p>

                        <pre><code>&lt;div className="navbar"&gt;
                            &lt;div className="nav"&gt;
                                &lt;a href="#home" className="activeTab" onclick="setActive('home')" id='home'&gt;
                                    &lt;i className="fa fa-home"&gt;&lt;/i&gt;
                                    Home
                                &lt;/a&gt;
                                &lt;a href="#contact" onclick="setActive('contact')" id='contact'&gt;
                                    &lt;i className="fa fa-phone-square-alt"&gt;&lt;/i&gt;
                                    Contact
                                &lt;/a&gt;
                                &lt;a href="#gallery" onclick="setActive('gallery')" id='gallery'&gt;
                                    &lt;i className="fa fa-image"&gt;&lt;/i&gt;
                                    Gallery
                                &lt;/a&gt;
                                &lt;a href="#login" onclick="setActive('login')" id='login'&gt;
                                    &lt;i className="fa fa-sign-in-alt"&gt;&lt;/i&gt;
                                    Login
                                &lt;/a&gt;
                            &lt;/div&gt;
                            &lt;div className="tab activeTabhome" id='tab'&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;</code></pre>

                        </div>

                     */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
