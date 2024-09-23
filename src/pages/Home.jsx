import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
const Home = () => {
  const carBrands = [
    {
      img: "Chevrolet.jpg",
      name: "Chevrolet Camaro",
      country: "USA",
      price: "฿6,151,000 "
    },
    {
      img: "gtrr35.jpg",
      name: "Nissan GT-R R35",
      country: "Japan",
      price: "฿9,109,000 "
    },
    {
      img: "honda.jpg",
      name: "Honda Civic1.8",
      country: "Japanese",
      price: "฿599,000 "
    },
    {
      img: "hyundai.jpg",
      name: "Hyundai Grand Starex",
      country: "Korea's",
      price: "฿1,299,000"
    },
    {
      img: "isuzu.jpg",
      name: "Isuzu D-max",
      country: "Japan",
      price: "฿398,000"
    },
    {
      img: "lamborghini.jpg",
      name: "Lamborghini Aventador",
      country: "Italy",
      price: "฿30,010,000"
    },
    {
      img: "mazda.jpg",
      name: "Mazda Sedan 2020",
      country: "Japan",
      price: "฿609,000"
    },
    {
      img: "nissan.jpg",
      name: "Nissan Note 1.2 E 2021 ",
      country: "Japan",
      price: "฿329,000 "
    },
    {
      img: "toyota.jpg",
      name: "Toyota Vellfire 2.5",
      country: "Japan",
      price: "฿2,199,000"
    }
  ];


  return (
    <Layout>
      


        <img
          className="object-cover w-auto h-auto"
          src="./Image/Rod_D.png"
          alt="รูป"
        />
        <section className="text-center sm:text-left mt-20 container mx-auto max-w-screen-xl ">
          <h1 className="font-bold text-4xl  text-black mt-10 ">
            สินค้าเกี่ยวกับ RodD
          </h1>
          <hr className="mb-3 mt-3 " />

          <div className="mt-10 ">
            <div className="flex justify-between ">
              <h1 className="font-bold text-3xl  ">
                รถเข้าใหม่
                <br />
                <p className="text-lg">
                  รถมือสองในตอนนี้มีด้วยกัน9คัน รถมือสองสภาพดีหลากยี่ห้อ ผ่านการตรวจสภาพโดยสถาบันชั้นนำ

                </p>
              </h1>
              <div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-5 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center  ">
                {carBrands.map((car, index) => (
                  <Card
                    key={index}
                    name={car.name}
                    country={car.country}
                    price={car.price}
                    img={car.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      
    </Layout>
  );
};

export default Home;
