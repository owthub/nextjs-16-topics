"use client";

import { useState } from "react";
import DataTable from "react-data-table-component"
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

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

    const handleDownloadCSVButton = () => {
        
        if (!filteredData.length) return;

        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const csv = XLSX.utils.sheet_to_csv(worksheet);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

        saveAs(blob, 'table-data.csv');
    }

    const handleDownloadExcelButton = () => {
        
        if (!filteredData.length) return;

        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });

        const blob = new Blob(
            [excelBuffer],
            {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            }
        );

        saveAs(blob, 'table-data.xlsx');
    }

    return <>
        <div className="flex flex-wrap justify-between items-center gap-4">

            <div className="flex gap-3">
                <button
                    onClick={ handleDownloadCSVButton }
                    className="px-4 py-2 rounded-lg text-white text-sm font-medium
                    bg-blue-600 hover:bg-blue-700 transition"
                >
                    Download CSV
                </button>

                <button
                    onClick={ handleDownloadExcelButton }
                    className="px-4 py-2 rounded-lg text-white text-sm font-medium
                    bg-green-600 hover:bg-green-700 transition"
                >
                    Download Excel
                </button>
            </div>

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