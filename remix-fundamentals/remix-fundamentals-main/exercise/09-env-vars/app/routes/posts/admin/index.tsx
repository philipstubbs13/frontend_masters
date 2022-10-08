import { Link } from "@remix-run/react";

// export async function loader() {
//   return json({
//     adminEmail: process.env.ADMIN_EMAIL
//   })
// }

export default function AdminIndex() {
  // const { adminEmail }  = useLoaderData();

  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
      <p>
        Admin Email: {ENV.ADMIN_EMAIL}
      </p>
    </p>
  );
}
