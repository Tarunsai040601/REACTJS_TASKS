import React from "react";

const Task_01 = () => {
  const students_data = [
    { id: 1, name: "jhon", grade: "A" },
    { id: 2, name: "EMMA", grade: "B" },
    { id: 3, name: "Lian", grade: "C" },
    { id: 4, name: "Oliva", grade: "D" },
  ];

  console.log("students_data:", students_data);

  return (
    <div>
      <div>
        <h1>Students_Lists</h1>
      </div>

      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GRADE</th>
            </tr>
          </thead>

          <tbody>
            {students_data.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task_01;