import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl text-black-950 mt-10 ">
          ช่องทางการติดต่อ
        </h1>
        <hr className="mt-5 mb-5" />

        <div className="card shadow rounded-md p-10 bg-amber-400">
          <h2 className="text-lg font-semibold">โทรศัพท์:</h2>
          <p>062-9387887, 087-898989</p>

          <h2 className="text-lg font-semibold mt-4">ที่อยู่:</h2>
          <p>90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000</p>

          <h2 className="text-lg font-semibold mt-4">อีเมล:</h2>
          <p>rodde@gmail.com</p>
        </div>

        <h2 className="font-bold text-2xl text-black-950 mt-10 text-center">
          ติดต่อเรา
        </h2>
        <hr className='mt-5 mb-5'/>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              ชื่อ:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="ชื่อของคุณ"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              อีเมล:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="อีเมลของคุณ"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              ข้อความ:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="ข้อความของคุณ"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-black hover:bg-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              ส่งข้อความ
            </button>
          </div>
        </form>
        
        <hr className='mt-5 mb-5'/>
        <div className="mt-10">
          {/* แผนที่ Google Maps สามารถแทรก iframe ของ Google Maps ที่นี่ */}
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.14499735415492!2d100.0692521725674!3d13.819816038713434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2e5c243cc7c87%3A0x1e2896260e30270a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lit4Liy4LiK4Li14Lin4Lio4Li24LiB4Lip4Liy4LiZ4LiE4Lij4Lib4LiQ4Lih!5e0!3m2!1sth!2sth!4v1727102796766!5m2!1sth!2sth" 
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-md"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
