import React, { useEffect, useState } from "react";
const Account = ({ total_bank_balance }) => {
  const [values, setValues] = useState({
    total_amount: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    values.total_amount = parseInt(values.total_amount) + total_bank_balance;

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const res = await fetch(
      `http://localhost:3001/api/update_balance/63ec453886139528d674a584`,
      requestOptions
    );
    const data = await res.json();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <p className="my-2 mx-1 text-xl">Add money to company account : </p>
      <input
        id="total_amount"
        className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
        placeholder="James"
        type="number"
        name="total_amount"
        onChange={onChange}
      />
      <button className="bg-blue-500 mx-2 my-2 h-10 cursor-pointer text-white font-bold py-2 px-4 rounded">
        Send
      </button>
    </form>
  );
};

export default Account;
