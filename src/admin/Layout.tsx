
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { setAuthed } from "./ProtectedRoute";

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const nav = [
    { name: "Home", path: "/admin/home" },
    { name: "About", path: "/admin/about" },
    { name: "Academics", path: "/admin/academics" },
    { name: "Admissions", path: "/admin/admissions" },
    { name: "Campus Life", path: "/admin/campus-life" },
    { name: "News", path: "/admin/news" },
    { name: "Videos", path: "/admin/videos" },
    { name: "Contact", path: "/admin/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr] bg-gray-50">
      <header className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="font-semibold text-lg">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setAuthed(false);
                navigate("/admin/login", { replace: true });
              }}
            >Logout</Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 p-4 sm:p-6">
        <aside className="bg-white border rounded-md p-3 h-fit">
          <nav className="flex lg:flex-col gap-2 overflow-x-auto">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm whitespace-nowrap ${
                  isActive(item.path) ? "bg-pink-100 text-pink-800" : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="min-h-[60vh]">
          <div className="bg-white border rounded-md p-4 sm:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}


