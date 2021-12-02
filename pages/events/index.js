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
      status: "published",
      page: 1,
      with_table: "users, tags"
    };
    const responseEvents = await EventService.getLatestEvents(postParams);
    if (responseEvents.count > 0) {
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
          count: 0,
          limit: 0
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
  const [newEvents, setNewEvents] = useState(events);

  const currentCount = (count) => {
    getNewEvents(count);
  };

  const getNewEvents = async (clickNo) => {
    const postParams = {
      sort_field: "published_at",
      order: "ASC",
      limit: limit,
      status: "drafted",
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
      {events && <EventFeatured event={events[0]} />}
      {events?.length > 0 ? (
        <EvListing
          events={newEvents}
          currentCount={currentCount}
          eventCount={count} 
        />
      ) : (
        <div className="flex items-center justify-center m-9 font-semibold">
          There's no events yet!
        </div>
      )}
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}
