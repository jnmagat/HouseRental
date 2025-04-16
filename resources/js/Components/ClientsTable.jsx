// resources/js/Components/ClientsTable.jsx
import React from "react";

export default function ClientsTable({ clients }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Clients Table</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">First Name</th>
                        <th className="border p-2">Last Name</th>
                        <th className="border p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.length > 0 ? (
                        clients.map((client) => (
                            <tr key={client.id}>
                                <td className="border p-2">{client.id}</td>
                                <td className="border p-2">{client.f_name}</td>
                                <td className="border p-2">{client.l_name}</td>
                                <td className="border p-2">{client.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="border p-2 text-center">
                                No clients found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
