import React from "react";

function IntroPage() {
  return (
    <>
        <h3>Join us as we make learning fun and interactive!</h3>
        <div style={{ display: "flex" }}>
      <img style={{marginLeft: "15px",
            marginRight: "15px",
            width: "400px"}}
            src="https://ecisveep.nic.in/uploads/monthly_2020_09/quiz1.jpg.61177099d6a538285bc188f82053dde8.jpg" />
      
      <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
          }}
        >
        Attempt quizzes seamlessly and smoothly without any struggle or hassle.
        Quiz-In gives a high-tech website with extremely user friendly
        interactive pages.
        
      </h4>
    </div>
    </>
  );
}

export default IntroPage;
