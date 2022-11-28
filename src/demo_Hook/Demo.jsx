import React, { memo, useEffect, useMemo, useRef, useState } from "react";
//function component: ko có state và life cycle
//=> giải pháp: React Hook

//Công dụng:
//1. Giúp FC có thể use đc state và life cycle
//2. Cho phép tái sử dụng logic giữa các component với nhau

//danh sách hook
//1. useState
//2. useEffect
//3. useCallBack()
//4.useMemo()
//5. useRef
//5.1 useRef: Dom trog component (hạn chế dùng)
//5.2 useRef:

const Demo = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState("loc");
  const titleRef = useRef();
  let test1 = useRef();

  useEffect(() => {
    console.log("test1", count);
    //clean function: chạy trc khi useEffect chạy lại
    return () => {
      console.log("clean 1", count);
    };
  }, [a, count]); //Nếu tham số (a) - mảng dependency ko thay đổi thì useEffect sẽ ko chạy lại và ngược lại

  useEffect(() => {
    console.log("test2");
    //clean function: chạy khi component umount
    return () => {
      //same as componentWillUnmount()
    };
  }, []); // mảng dependency rỗng thì useEffect sẽ ko chạy lại

  useEffect(() => {
    console.log("test3");
  }); //Do ko có mảng dependency nên useEffect này sẽ luôn chạy khi component load lại

  const sum = useMemo(() => {
    //khi dùng useMemo giá trị bên trong sẽ chỉ đc khởi tạo 1 lần và sẽ ko thay đổi
    console.log("sum init again");
    return 10 + 300 + 1000000 + 20 + count; //dù count có đổi thì sum vẫn giữ nguyên
  }, [count]); //thêm dependency để thay đổi giá trị sum theo mỗi lần giá trị bên trong dependency thay đổi
  return (
    <div
      style={{
        backgroundColor: "green",
      }}
    >
      <h1 ref={titleRef}>{count}</h1>
      <h1>{sum}</h1>
      <button
        onClick={() => {
          test1.current = test1.current + 1;
          console.log('test1.current: ', test1.current);
          console.log("test11111: ", test1);
          setCount(count + 1);
          titleRef.current.style.color = "red";
        }}
      >
        increase count
      </button>
    </div>
  );
};

export default memo(Demo);
