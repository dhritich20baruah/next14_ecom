import Image from "next/image";
import { pool } from "../../utility/dbConnect";
import Link from "next/link";

export default async function Home() {
  "use server";
  const result = await pool.query("SELECT * FROM product");
  const products = result.rows;
  const latestProducts = products.slice(-3);

  return (
    <main>
      <div className="flex-col justify-evenly md:flex md:flex-row">
        <div className="text-center flex justify-center items-center w-[50%]">
          <p className="p-10">
            <span className="text-3xl">Experience Our New Product</span>
            <br />
            Introducing the iWatch Model X3, the latest innovation in smartwatch
            technology. Equipped with a built-in blood pressure monitor, this
            cutting-edge timepiece empowers you to monitor your health on the
            go. Stay connected and stay healthy with iWatch Model X3.
          </p>
        </div>
        <img
          src="https://i.postimg.cc/1Xv0nKNR/product1.jpg"
          alt=""
          className="w-[50%]"
        />
      </div>
      {/* ABOUT */}
      <div className="flex-col justify-evenly md:flex md:flex-row">
        <img
          src="https://i.postimg.cc/MHmPsRMg/product5.jpg"
          alt=""
          className="w-[50%] h-[40rem] object-cover"
        />
        <div className="text-center flex justify-center items-center w-[50%]">
          <div>
            <p className="text-4xl">ABOUT THE PRODUCT</p>
            <p className="p-10">
              Introducing the all-new SmartTime X3, the ultimate smart watch
              designed to elevate your lifestyle and redefine the way you
              interact with technology. Packed with cutting-edge features and
              sleek aesthetics, this next-generation wearable is here to
              revolutionize your daily routine. Stay connected and organized
              like never before with the SmartTime X3. Its vibrant,
              high-resolution display adapts to your surroundings, ensuring
              crystal-clear visibility in any light. From reading messages to
              tracking your fitness goals, the intuitive touchscreen makes
              navigation a breeze. Powered by a state-of-the-art AI assistant,
              the SmartTime X3 anticipates your needs and delivers personalized
              suggestions throughout the day. Whether it's suggesting the best
              route to beat traffic or reminding you of an important meeting,
              your smart watch is your ever-reliable companion.
            </p>
          </div>
        </div>
      </div>
      <div className="features bg-black text-white p-10">
        <h3 className="text-center text-3xl">FEATURES</h3>
        <div className="flex text-center my-3">
          <div className="px-3">
            <i className="material-icons">explore</i>
            <h4 className="text-xl">Gyro and Accelerometer</h4>
            <p className="text-justify">
              Track movement, activity levels, and even sleep patterns. Monitor
              your health and fitness levels.Also use it for navigation and
              location services.
            </p>
          </div>
          <div className="px-3">
            <i className="material-icons">favorite_border</i>
            <h4 className="text-xl">Heart Monitor</h4>
            <p className="text-justify">
              Monitor heart rate and track progress over time. Set goals for
              improving heart health. SOS feature that can be activated in case
              of emergency.
            </p>
          </div>
          <div className="px-3">
            <i className="material-icons">record_voice_over</i>
            <h4 className="text-xl">Voice Dial/Commands</h4>
            <p className="text-justify">
              The voice command feature allows you to make calls, send messages,
              set reminders, play music, and even control your smart home
              devices, all with simple voice commands.
            </p>
          </div>
          <div className="px-3">
            <i className="material-icons">music_video</i>
            <h4 className="text-xl">Mp3 Player</h4>
            <p className="text-justify">
              The MP3 player feature allows you to store and play your own music
              files, giving you the freedom to listen to your music collection
              without the need for a separate device.
            </p>
          </div>
        </div>
      </div>
       {/* Latest Products */}
       <h3 className="text-center my-8 text-3xl font-bold">Latest Products</h3>
      <div className="latest-product my-10 flex mx-auto justify-evenly">
        {latestProducts.map((element)=>{
          return(
            <div key={element.id} className="text-center shadow-lg shadow-black mx-5 md:w-[30%]">
              <div className='card'>
              <Link href={"/ProductDetails/" + element.id} style={{textDecorationLine: 'none'}} className="text-black flex flex-col justify-center items-center">
              <img src={element.image} alt="" className='w-1/2 h-auto object-contain'/>
              <div className="card-body">
              <p className='text-lg font-semibold'>{element.name}</p>
              <p className='card-text font-bold text-red-700'>Rs.{element.price}/-</p>
              </div>
              </Link>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  );
}
