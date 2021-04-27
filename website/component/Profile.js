export default function Profile({ fName, lName, userName }) {
  return (
    <div className="inline-block m-0 p-0 text-right align-top">
      <div className="mt-2 inline-block mr-2">
        <div className="m-0 p-0 leading-none">
          {`${fName} ${lName}`}
        </div>
        <div className="m-0 p-0 text-gray-500 leading-none">
          {userName}
        </div>
      </div>
      <div className="align-top inline-block mr-2">
        <img className="rounded-full" src="/images/propic.png" />
      </div>
    </div>
  );
}