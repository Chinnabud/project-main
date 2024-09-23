import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto">
      <h1 className="font-bold text-4xl text-black-950 mt-10">
        เกี่ยวกับRodD
      </h1>
      <hr className="mb-3 mt-3" />

      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl">
            รายละเอียด
            <br />
            <p className="text-lg underline-offset-auto">
            ----------------------------------------------------------------------------------------------------

            </p>
            <br />
            <p className="text-lg underline-offset-auto">
            ----------------------------------------------------------------------------------------------------

            </p>
            <br />
            <p className="text-lg underline-offset-auto">
            ----------------------------------------------------------------------------------------------------

            </p>
            <br />
            <p className="text-lg underline-offset-auto">
            ----------------------------------------------------------------------------------------------------

            </p>
            <br />
            <p className="text-lg underline-offset-auto">
            ----------------------------------------------------------------------------------------------------

            </p>
            <br />
            <p className="text-lg underline-offset-auto">
            ----------------------------------------------------------------------------------------------------

            </p>
          </h1>
          <div className="w-auto h-auto">
            <img
              className=" shadow-md rounded-xl"
              src="../public/Image/repair.jpg"
              alt="Logo"
            />
            <p className="font-bold text-4xl text-black-950 mt-3 text-lg text-center">
            ให้บริการซ่อมบำรุงนานสูงสุดถึง12เดือน

            </p>
          </div>
          
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default About;
