"use client";

import { useState } from "react";
import DataTable from "react-data-table-component"

export default function DatatableLayout(){

    const [filterText, setFilterText] = useState("")

    // Name, Email, Phone Number, Age
    const columns = [
        { name: "Name", selector: row => row.name },
        { name: "Email", selector: row => row.email },
        { name: "Phone Number", selector: row => row.phone_number },
        { name: "Age", selector: row => row.age }
    ]

    // Table Data
    const tableData = [
        { name: "User 1", email: "user1@gmail.com", phone_number: "+918787878909", age: "21" },
        { name: "User 2", email: "user2@gmail.com", phone_number: "+916789098767", age: "25" },
        { name: "User 3", email: "user3@gmail.com", phone_number: "+989897986899", age: "31" },
        { name: "User 4", email: "user4@gmail.com", phone_number: "+898789878987", age: "57" },
        { name: "User 5", email: "user5@gmail.com", phone_number: "+543454354545", age: "43" },
    ]

    const customStyles = {
        headCells: {
            style: {
                background: "linear-gradient(to right, #7c3aed, #4f46e5)",
                color: "white",
                fontSize: "12px",
                fontWeight: "600",
                padding: "12px",
                textTransform: "uppercase",
                lineHeight: "1.2",
            },
        },
        cells: {
            style: {
                whiteSpace: "normal",
                fontSize: "14px",
            },
        },
        rows: {
            style: {
                padding: "12px 10px",
            },
        },
    };

    const filteredData = tableData.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(filterText.toLowerCase())
    );

    return <>
        <div className="flex flex-wrap justify-between items-center gap-4">
            <input
                type="text"
                placeholder="Search..."
                className="border rounded-xl px-4 py-2 w-64 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            /> 

            <DataTable
                columns={columns}
                data={filteredData}
                highlightOnHover
                pagination
                striped
                responsive
                customStyles={ customStyles }
            />
        </div>
    </>
}