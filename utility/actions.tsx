'use server'
import { NextResponse } from 'next/server'
import { pool } from './dbConnect'
import bcrypt from 'bcrypt'
const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

export async function signUp(name: string, email: string, password: string){
    try {
        const customer = await pool.query("SELECT * FROM customer WHERE customer_email= $1", [email])

        if(customer.rows.length>0){
            return null
        }
        const hashedPassword = await bcrypt.hash(password,10)

      const newCustomer = await pool.query(`INSERT INTO customer (customer_name, customer_email, password) VALUES ($1, $2, $3) RETURNING *`, [name, email, hashedPassword])
      console.log(newCustomer.rows[0])
        return true
    } catch (error) {
        console.log(error)
    }
}

export async function signIn(email: string, password: string){
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

      if(validation){
        const token = jwt.sign({
            name: customer.rows[0].customer_name,
            id: customer.rows[0].id,
            email: customer.rows[0].email
        },
        JWT_SECRET
        );

        return NextResponse.json({status: 'OK', token})
      }else {
        return NextResponse.json({ status: "Invalid Password" });
      }
}