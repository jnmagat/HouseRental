import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ClientComponent() {
    return (
        <>
            <AuthenticatedLayout>
                <Head title="Dashboard" />

                {/* Main layout container */}
                <div className="flex min-h-screen bg-gray-100">
                    {/* Sidebar */}
                    <div className="w-64 bg-gray-800 text-white p-4">
                        <h3 className="text-lg font-semibold mb-6">CMS Menu</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="hover:bg-gray-700 p-2 rounded block"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/clients"
                                    className="hover:bg-gray-700 p-2 rounded block"
                                >
                                    Clients
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 p-2 rounded block"
                                >
                                    Users
                                </a>
                            </li>
                            {/* <li>
                            <a
                                href="#"
                                className="hover:bg-gray-700 p-2 rounded block"
                            >
                                Settings
                            </a>
                        </li> */}
                        </ul>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-6">
                        {/* Breadcrumbs */}
                        <nav className="text-sm text-gray-600 mb-4">
                            <Link
                                to="/dashboard"
                                className="hover:text-blue-600"
                            >
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-500">Clients</span>
                        </nav>

                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div>User Component</div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
