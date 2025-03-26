"use client"


import { useEffect, useState } from "react";

export default function DataOnline() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/slot_data.json")
            .then((res) => res.json())
            .then(setData);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start px-6">
            <h1 className="text-4xl font-bold mb-6 text-center">スロットデータ一覧</h1>
            <div className="w-full max-w-7xl overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300 text-sm shadow-md">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="border p-2">日付</th>
                            <th className="border p-2">台番号</th>
                            <th className="border p-2">累計スタート</th>
                            <th className="border p-2">BB回数</th>
                            <th className="border p-2">RB回数</th>
                            <th className="border p-2">ART回数</th>
                            <th className="border p-2">最大持玉</th>
                            <th className="border p-2">BB確率</th>
                            <th className="border p-2">RB確率</th>
                            <th className="border p-2">ART確率</th>
                            <th className="border p-2">合成確率</th>
                            <th className="border p-2">前日最終スタート</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row: any, index: number) => (
                            <tr key={`${row.date}-${row.unit_no}-${index}`} className="odd:bg-gray-800">
                                <td className="border p-2 text-center whitespace-nowrap">{row.date}</td>
                                <td className="border p-2 text-center">{row.unit_no}</td>
                                <td className="border p-2 text-right">{row.start}</td>
                                <td className="border p-2 text-right">{row.bb}</td>
                                <td className="border p-2 text-right">{row.rb}</td>
                                <td className="border p-2 text-right">{row.art}</td>
                                <td className="border p-2 text-right">{row.max_medals}</td>
                                <td className="border p-2 text-center">{row.bb_rate}</td>
                                <td className="border p-2 text-center">{row.rb_rate}</td>
                                <td className="border p-2 text-center">{row.art_rate}</td>
                                <td className="border p-2 text-center">{row.total_rate}</td>
                                <td className="border p-2 text-right">{row.last_start}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}