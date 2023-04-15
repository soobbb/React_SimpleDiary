// import React, { useState, useEffect } from "react";

// const CounterA = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`CounterA Update - count: ${count}`);
//   });
//   return <div>{count}</div>;
// });

// // 프롭이 객체라서 (얕은 비교)라서 react.memo를 써도 랜더가 된에?
// const CounterB = ({ obj }) => {
//   useEffect(() => {
//     console.log(`CounterB Update - count: ${obj.count}`);
//   });
//   return <div>{obj.count}</div>;
// };

// const areEqual = (prevProps, nextProps) => {
//   // return true; // 이전 프롭스 현재 프롭스가 같다 => 리랜더링 x
//   // return false // 이전 프롭스 현재 프롭스가 다르다 => 리랜더링 O
//   if (prevProps.obj.count === nextProps.obj.count) {
//     return true;
//   }
//   return false;
// };

// const MemoizedCounterB = React.memo(CounterB, areEqual);

// const OptimizeTest = () => {
//   const [count, setCount] = useState(1);
//   const [obj, setObj] = useState({
//     count: 1,
//   });

//   return (
//     <div style={{ padding: 50 }}>
//       <div>
//         <h2>Counter A</h2>
//         <CounterA count={count} />
//         <button onClick={() => setCount(count)}>A botton</button>
//       </div>
//       <div>
//         <h2>Counter B</h2>
//         <MemoizedCounterB obj={obj} />
//         <button
//           onClick={() =>
//             setObj({
//               count: obj.count,
//             })
//           }
//         >
//           B botton
//         </button>
//       </div>
//     </div>
//   );
// };

// // export default OptimizeTest;
