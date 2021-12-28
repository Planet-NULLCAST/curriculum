import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import SectionSwag from "../../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";
import EventService from "../../services/EventService";
import Cookies from "universal-cookie";
import { url, logoPath } from "../../seoschema/schema";
import notify from "../../lib/notify";
import EventSpotlight from "../../component/layout/EventDetails/EventSpotlight";
import Detail from "../../component/layout/EventDetails/Detail";
import ShareEvent from "../../component/layout/EventDetails/ShareEvent";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  try {
    const eid = context.params.event_id;
    const response = await EventService.getEventById(eid);
    if (!response?.data) {
      return {
        redirect: {
          permanent: false,
          destination: "/404"
        }
      };
    }
    return {
      props: {
        event: response.data
      }
    };
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, "error");
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    };
  }
}

export default function BlogListing({ event }) {
  const {
    id,
    guest_name,
    guest_designation,
    guest_image,
    registration_link,
    guest_bio,
    created_at,
    created_by,
    status,
    published_at,
    banner_image,
    updated_at,
    meta_title,
    description,
    location,
    primary_tag,
    event_time
  } = event;
  const cookies = new Cookies();
  const userCookie = cookies.get("userNullcast");
  const [viewShare, setViewShare] = useState(false);
  let pageUrl = registration_link;
  useEffect(() => {
    viewShare ? document.body.classList.add('overflow-hidden'): document.body.classList.remove('overflow-hidden')
  }, [viewShare])
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": `${meta_title}`,
              "startDate": `${event_time}`,
              "endDate": `${event_time}`.split("T")[0] + "T17:30:00.000Z",
              "eventAttendanceMode":
                "https://schema.org/MixedEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": [
                {
                  "@type": "VirtualLocation",
                  "url": `${registration_link}`
                },
                {
                  "@type": "Place",
                  "name": `${location}`,
                  "address": {}
                }
              ],
              "image": [`${banner_image}`],
              "description": `${description}`,
              "about": `${description}`,
              "performer": {
                "@type": "Person",
                "name": `${guest_name}`,
                "jobTitle": `${guest_designation}`,
                "image": {
                  "@type": "ImageObject",
                  "url": `${guest_image}`,
                  "width": 1200,
                  "height": 1200
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Nullcast Event",
                "logo": `${logoPath}`
              }
            })
          }}
        ></script>
        <title>{meta_title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${url}/events/${id}`} />
        <meta property="og:type" content="events.event" />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${url}/events/${id}`} />
        <meta property="og:image" content={banner_image} />
        <meta property="event:start_time" content={event_time} />
        <meta
          property="event:end_time"
          content={`${event_time}`.split("T")[0] + "T17:30:00.000Z"}
        />
        <meta name="twitter:card" content={"summary_large_image"} />
        <meta name="twitter:title" content={meta_title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={`${url}/events/${id}`} />
        <meta name="twitter:image" content={banner_image} />
        <meta name="twitter:label1" content="Taken By" />
        <meta name="twitter:data1" content={guest_name} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <SiteHeader />
      {viewShare && (
        <ShareEvent location={pageUrl} hideWindow={() => setViewShare(false)} />
      )}
      <EventSpotlight showWindow={() => setViewShare(true)} data={event} />
      <Detail event={event} />
      <SectionSwag />
      <SiteFooter />
    </>
  );
}
