'use server'
import { pool } from './dbConnect'
import bcrypt from 'bcrypt'

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