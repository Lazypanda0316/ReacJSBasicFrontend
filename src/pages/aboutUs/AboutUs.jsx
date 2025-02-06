import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    let url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

    const fetchedData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setInfos(data.data);
      } catch (error) {
        console.log(`fetching error${error}`);
      }
    };

    fetchedData();
  }, []);
  return (
    <>
      <div>
        <h1>THis is AboutUs Page</h1>
        {infos && infos.length > 0 ? (
          infos.map((item,index) => (
            <div key={index}>
              <h1>{item.Nation}</h1>
              <h2>{item.Population}</h2>
             
            </div>
          ))
        ) : (
          <h1 className="col-span-full text-center text-xl font-bold">
            No Data Found
          </h1>
        )}
      </div>
    </>
  );
};

export default AboutUs;
