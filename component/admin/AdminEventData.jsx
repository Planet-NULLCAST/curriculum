const AdminEventData = ({ eventData }) => {
  console.log(eventData.description);

  return (
    <div>
      <img
        src={eventData?.banner_image}
        alt="banner"
        className="h-96 w-full px-20"
      />
      <div className="h-px w-full bg-gray-200 mt-6" />
      <main
        dangerouslySetInnerHTML={{ __html: eventData?.description }}
        className="my-4"
      ></main>
    </div>
  );
};

export default AdminEventData;
