import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
   const tshirts = useLoaderData();
   console.log(tshirts);
   return (
      <div>
         <h2>total tshirt: {tshirts.length}</h2>
      </div>
   );
};

export default Home;
