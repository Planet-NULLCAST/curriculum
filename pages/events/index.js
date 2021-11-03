import SiteHeader from "../../component/layout/SiteHeader/SiteHeader";
import EventHeader from "../../component/layout/EventLayouts/EventHeader";
import EventFeatured from "../../component/layout/EventLayouts/EventFeatured";
import EvListing from "../../component/layout/EventLayouts/EventListing";
import SectionSwag from "../../component/layout/SectionSwag/SectionSwag";
import SiteFooter from "../../component/layout/SiteFooter/SiteFooter";
import Head from "next/head";
import EventService from "../../services/EventService"
import { useState } from "react";
import { homePageSchema, logoPath, url } from "../../seoschema/schema";
import notify from "../../lib/notify";

export async function getServerSideProps() {
  const limit = 10;

  try {
    const postParams = {
      sort_field: "event_time",
      order: "ASC",
      limit: limit,
      page: 1,
      with_table: "users, tags"
    };
    const responseEvents = await EventService.getLatestEvents(postParams);
    if (responseEvents.events.length > 0) {
      return {
        props: {
          events: responseEvents.events,
          count: responseEvents.count,
          limit: responseEvents.limit
        }
      };
    } else {
      return {
        props: {
          events: [],
          count: 0
        }
      };
    }
  } catch (err) {
    notify(err?.response?.data?.message ?? err?.message, 'error');
    return {
      props: {}
    };
  }
}

export default function EventListing({ events, count, limit }) {

  // For test only, remove this in production (EventFeatured component with this data also)
  const test = {
    "id": 10000008,
    "created_at": "2021-11-01T16:14:16.314Z",
    "created_by": 10000024,
    "status": "published",
    "published_at": null,
    "banner_image": "https://images.unsplash.com/photo-1579001843871-a9f7eb4311e0?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "updated_at": "2021-11-02T14:46:12.590Z",
    "meta_title": "Creative Search Bar and Input Field Design Inspiration",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "location": "Trivandrum, INDIA",
    "primary_tag": null,
    "event_time": "2021-11-11T16:20:35.138Z"
  }

  const [newEvents, setNewEvents] = useState(events);

  const currentCount = (count) => {
    getNewEvents(count);
  };

  const getNewEvents = async (clickNo) => {
    const postParams = {
      sort_field: "published_at",
      order: "ASC",
      limit: limit,
      page: 1,
      with_table: "users, tags"
    };
    try {
      const responseEvents = await EventService.getLatestEvents(postParams);

      setNewEvents((prevValue) => {
        return [...prevValue, ...responseEvents.events];
      });
    } catch (err) {
      notify(err?.response?.data?.message ?? err?.message, 'error');
    }
  };
  return (
    <div>
      <Head>
        <title>Events | Nullcast</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...homePageSchema,
              url: `${url}/events`,
              description: "events"
            })
          }}
        ></script>
        <meta
          name="description"
          content="nullcast is a series of events, blogs, podcasts and short videos for everything web related."
        />
        <link rel="canonical" href={`${url}/events`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="events" />
        <meta
          property="og:description"
          content="nullcast is a series of events, blogs, podcasts and short videos for everything web related."
        />
        <meta property="og:url" content={`${url}/events`} />
        <meta property="og:image" content={logoPath} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="events" />
        <meta
          name="twitter:description"
          content="nullcast is a series of events, blogs, podcasts and short videos for everything web related."
        />
        <meta name="twitter:url" content={`${url}/events`} />
        <meta name="twitter:image" content={logoPath} />
        <meta property="og:image:width" content="352" />
        <meta property="og:image:height" content="212" />
      </Head>
      <SiteHeader />
      <EventHeader />
      {/* {events && <EventFeatured event={events[0]} />} */}
      {events && <EventFeatured event={test} />}
      {events?.length > 0 ? (
        <EvListing
          events={newEvents}
          currentCount={currentCount}
          eventCount={count} 
        />
      ) : (
        <div className="flex items-center justify-center m-9 font-semibold">
          There's no published blogs yet!
        </div>
      )}
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
