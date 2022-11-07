import React from "react";

function Home() {
  return (
    <div>
      <p>
        Quiz-In offers simplicity in framing as well as attempting a quiz,
        making it friendly for both teachers and users. If you have any queries
        or suggestions, you can contact us directly.
      </p>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
          fontFamily: "",
        }}
      >
        When in doubt, find us here:
      </p>
      <div
        className="wrapper"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/761/761755.png"
          alt="mail"
          style={{ height: "30px", paddingRight: "10px", paddingTop: "9px" }}
        />
        <p>
          Mail your queries at:
          <a style={{ fontFamily: "sans-serif", textDecoration: 'underline' }}>
            queries@quizin.com
          </a>
        </p>
      </div>
      <div
        className="wrapper"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/720/498/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
          alt="phone"
          style={{ height: "30px", paddingRight: "10px", paddingTop: "9px" }}
        />
        <p>Call us on our toll free number: </p>
        <p className="card">1800 3456 7968</p>
      </div>

      <div
        className="wrapper"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://www.freeiconspng.com/thumbs/address-icon/contact-address-icon-4.png"
          alt="phone"
          style={{ height: "30px", paddingRight: "0px", paddingTop: "9px" }}
        />
        <p>Central office: </p>
        <p className="card">Hashu Adwani Memorial Complex, Collector's Colony, Chembur, Mumbai, Maharashtra 400074</p>
      </div>
    </div>
  );
}

export default Home;
