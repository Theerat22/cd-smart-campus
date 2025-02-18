"use client";
import { useState } from "react";
import classNames from "classnames";

const MedalTable = () => {
  const [data] = useState([
    { id: 1, color: "orange", gold: 5, silver: 3, bronze: 2, total: 10 },
    { id: 2, color: "pink", gold: 3, silver: 2, bronze: 1, total: 6 },
    { id: 3, color: "green", gold: 4, silver: 5, bronze: 3, total: 12 },
    { id: 4, color: "purple", gold: 2, silver: 4, bronze: 1, total: 7 },
  ]);

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-xl font-semibold text-center text-gray-700">ผลคะแนนกีฬาสี</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                {/* <th className="px-6 py-3 text-gray-600 uppercase text-sm">ลำดับ</th> */}
                <th className="px-6 py-3 text-gray-600 uppercase text-sm">สี</th>
                <th className="px-6 py-3 text-gray-600 uppercase text-sm">🥇</th>
                <th className="px-6 py-3 text-gray-600 uppercase text-sm">🥈</th>
                <th className="px-6 py-3 text-gray-600 uppercase text-sm">🥉</th>
                <th className="px-6 py-3 text-gray-600 uppercase text-sm">รวม</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b">
                  {/* <td className="px-6 py-4 text-gray-700 font-bold">{index + 1}</td> */}
                  <td className="px-6 py-4 text-gray-700 font-bold">
                    <div className={classNames("rounded-full w-8 h-8", {
                            "bg-gradient-to-r from-yellow-500 to-yellow-300": row.color === "orange",
                            "bg-gradient-to-r from-pink-500 to-pink-300": row.color === "pink",
                            "bg-gradient-to-r from-purple-500 to-purple-300": row.color === "purple",
                            "bg-gradient-to-r from-green-500 to-green-300": row.color === "green",
                            })}
                    ></div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-bold">{row.gold}</td>
                  <td className="px-6 py-4 text-gray-700 font-bold">{row.silver}</td>
                  <td className="px-6 py-4 text-gray-700 font-bold">{row.bronze}</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MedalTable;