export default async function Profile(){
  return(
    <div className="mx-10">
      <h1 className="text-center text-2xl mb-5">Profile</h1>
      <div className="space-y-5">
        <ul className="flex justify-between border-b-2 border-gray-700 px-5">
          <li>Name</li>
          <li></li>
        </ul>
        <ul className="flex justify-between border-b-2 border-gray-700 px-5">
          <li>Email</li>
          <li></li>
        </ul>
        <ul className="flex justify-between border-b-2 border-gray-700 px-5">
          <li>Phone</li>
          <li></li>
        </ul>
        <ul className="flex justify-between border-b-2 border-gray-700 px-5">
          <li>Address</li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}