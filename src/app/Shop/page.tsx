import Link from "next/link";
import { pool } from "../../../utility/dbConnect";

export default async function page() {
 
  const result = await pool.query("SELECT * FROM product");
  const products = result.rows;

  return (
    <main className="m-10">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
        {products.map((element) => {
          return (
            <div
              className="shadow-lg shadow-black p-5 rounded-md"
              key={element.id}
            >
              <Link
                href={"/Products/" + element.id}
                style={{ textDecorationLine: "none" }}
              >
                <div className="card">
                <img
                  src={element.image}
                  className="h-52 w-full object-contain hover:object-cover"
                  alt="..."
                  />
                <div className="text-center">
                  <p className="font-semibold">{element.name}</p>
                  <p className="text-red-700 font-semibold mt-5">Rs.{element.price}/-</p>
                </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
