import React from "react";
import CarList from "../CarList/CarList";
import "./Home.css";




const Home = () => {
  const carsData = [
    { id: 1, title: "BIKE", imgUrl: "https://i.ibb.co/Wzq02GF/Frame.png" },

    { id: 2, title: "BUS", imgUrl: "https://i.ibb.co/LR2HhN5/Frame-1.png" },

    { id: 3, title: "CAR", imgUrl: "https://i.ibb.co/rbmLRHg/Frame-2.png" },

    { id: 4, title: "TRAIN", imgUrl: "https://i.ibb.co/pbVdsGY/Group.png" },
  ];

  return (
    <div>
      <div>{/* <Navigation></Navigation> */}</div>

      <br />
      <br />
      <div className="data-flex">
        {carsData.map((car) => (
          <CarList key={car.id} car={car}></CarList>
        ))}
      </div>
    </div>
  );
};

export default Home;
