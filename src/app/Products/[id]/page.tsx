import { pool } from "../../../../utility/dbConnect";
import ActionsBtns from "./ActionsBtns";

export default async function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
  const result = await pool.query("SELECT * FROM product WHERE id = $1", [
    productId,
  ]);
  const product = result.rows[0];

  return (
    <div className="">
      <div className="md:flex md:flex-row flex-col justify-center my-10 mx-auto">
        <div className="md:w-[50%] w-full max-h-screen overflow-auto">
          <div className="tab-content grid grid-cols-2 grid-rows-2 p-10" id="v-pills-tabContent">
            <div
              className=""
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <img
                src={product?.image}
                alt="product -image"
                className="img-tab-main"
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <img
                src={product?.more_images[0]}
                alt="product -image"
                className="img-tab-main"
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <img
                src={product?.more_images[1]}
                alt="product -image"
                className="img-tab-main"
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <img
                src={product?.more_images[2]}
                alt="product -image"
                className="img-tab-main"
              />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings2"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <img
                src={product?.more_images[3]}
                alt="product -image"
                className="img-tab-main"
              />
            </div>
          </div>

         
        </div>
        <div className="md:w-[50%] p-10 w-full">
          <h3 className="text-xl font-semibold text-justify">{product?.name}</h3>
          <p className="text-lg text-red-800 font-bold my-5">Rs.{product?.price}/-</p>
          <div className="my-3">
            <span className="font-semibold ">Quantity</span>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="shadow-lg shadow-black mx-5"
              style={{ width: "2em", height: "2.5em" }}
            />
          </div>
          <p className="font-semibold text-lg">Product Description</p>
          <p className="text-justify">{product?.details}</p>
          <p className="text-justify">{product?.description}</p>
          <div className="flex justify-center my-12">
            <ActionsBtns />
          </div>
        </div>
      </div>
    </div>
  );
}
