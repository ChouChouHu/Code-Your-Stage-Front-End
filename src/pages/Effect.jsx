/* eslint-disable no-unused-vars */
// import SeatingChart from "../partials/SeatingChart";
import { useCallback, useEffect, useMemo, useState } from "react";
import Layout from "../partials/Layout";

export default function Home() {
  // const obj = useMemo(() => ({
  //   id: 1,
  //   expenses: [
  //     { description: "Rent", amount: 1000 },
  //     { description: "Groceries", amount: 100 },
  //     { description: "Utilities", amount: 150 },
  //   ],
  // }), []);

  const [times, setTimes] = useState(0);
  const [group, setGroup] = useState({
    id: 1,
    expenses: [
      { description: "Rent", amount: 1000 },
      { description: "Groceries", amount: 100 },
      { description: "Utilities", amount: 150 },
    ],
  });

  useEffect(() => {
    // setGroup((prevGroup) => ({
      //
      // ...prevGroup,
      //
      // id: 1,
      // expenses: [
      //   { description: "Rent", amount: 1000 },
      //   { description: "Groceries", amount: 100 },
      //   { description: "Utilities", amount: 150 },
      // ],
      //
      // ...prevGroup,
      // expenses: prevGroup.expenses.map((expense) => ({
      //   ...expense,
      //   amount: expense.amount + 1,
      // })),
      // 
      // ...prevGroup,
      // id: 2,
      //
      // ...prevGroup,
      // expenses: getExpenses(),
    // }));
    // setGroup(obj);
    setTimes(times + 1);
  }, [group]);

  return (
    <Layout>
      <div className="h-[100vh] bg-background">
        <div className="p-10">
          <div>id: {group.id},</div>
          <div>
            [
            {group.expenses?.map((expense, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className="ml-4" key={index}>
                {`{`} description:{" "}
                <span className="mr-1">{expense.description},</span>
                amount: <span>{expense.amount}</span>
                {` },`}
              </div>
            ))}
            ]
          </div>
          <div className="mt-10">useEffect 的 callback 執行了：{times} 次</div>
        </div>
      </div>
    </Layout>
  );
}
