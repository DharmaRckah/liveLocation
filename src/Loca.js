// import React, { useEffect, useState } from "react";

// function GetCurrentAddress() {
//   const [add, setAdd] = useState("");
//   // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       const { latitude, longitude } = pos.coords;
//       console.log(latitude, longitude);
//       const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => setAdd(data.address));
//     });
//   }, []);
//   console.log(add, "sfsfh");
//   return (
//     <>
//       <p>road : {add.road}</p>
//       <p>city : {add.city}</p>
//       <p>country :{add.country}</p>
//     </>
//   );
// }

// export default GetCurrentAddress;
import React, { useEffect, useState } from "react";

function GetCurrentAddress() {
  const [add, setAdd] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.address || {}));
    });
  }, []);

  console.log(add, "sfsfh");

  // Function to render all properties of the address object
  const renderAddressProperties = () => {
    return Object.keys(add).map((property) => (
      <p key={property}>
        {property}: {add[property]}
      </p>
    ));
  };

  return (
    <>
      <h3>Created By Admin Dharma For Fetching live location</h3>

      {renderAddressProperties()}
    </>
  );
}

export default GetCurrentAddress;
