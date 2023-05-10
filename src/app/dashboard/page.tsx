// "use client";
// import React from "react";
//
// import { useQuery } from "@tanstack/react-query";
//
// const getFacts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };
//
// const Page = async () => {
//   const { data } = useQuery({ queryKey: ["randomFacts"], queryFn: getFacts });
//   console.log("data", data);
//
//   return <div></div>;
// };
//
// export default Page;
