import { pool } from "../../../../utility/dbConnect";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

export const POST = async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    return NextResponse.json({ status: 405 });
  }
  const { email, password } = await req.json();

  try {
    const customer = await pool.query(
      `SELECT * FROM customer WHERE customer_email = $1`,
      [email]
    );

    if (customer.rows.length === 0) {
      return NextResponse.json({
        status: "Unauthorized",
        message: "Invalid email or password",
      });
    }

    const hashedPassword = customer.rows[0].password;
    const validation = await bcrypt.compare(password, hashedPassword);

    if (validation) {
      const token = jwt.sign(
        {
          name: customer.rows[0].customer_name,
          id: customer.rows[0].id,
          email: customer.rows[0].email,
        },
        JWT_SECRET
      );

      return NextResponse.json({ status: "OK", token });
    } else {
      return NextResponse.json({ status: "Invalid Password" });
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
};
