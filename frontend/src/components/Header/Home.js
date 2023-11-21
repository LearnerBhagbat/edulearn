import React, { useRef } from "react";
import "./home.css";
import configData from "../../config.json";

const Home = () => {
  const Email = useRef(null);
  const Password = useRef(null);

  function login() {
    //        console.log(Password.current.value)
    fetch(configData.SERVER_URL + "api/users/login", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email.current.value,
        password: Password.current.value,
      }),
    })
      .then((Response) => Response.json())
      .then((Result) => {
        console.log(Result);
        if (Result.status === "200") {
          window.localStorage.setItem("userid", Result.result);

          //window.localStorage.setItem("users", JSON.stringify(Result));
          if (Result.result == 1) {
            window.location.href = "/Dashboard";
          } else if (Result.result == 2) {
            window.location.href = "/TeacherDashboard";
          }
          alert("Successfully");
        } else {
          alert("user not found");
        }
      });
  }

  return (
    <div>
      <div>
        <div className="main">
          <div className="content">
            <img src="./images/cutm-logo.png" alt=""></img>

            <h1>
              Welcome To <br />
              <span>EduLearn</span> !
            </h1>
            <p className="par">Teach in a more Interactive Enviroment.</p>

            <button className="cn">
              <a href="/#">JOIN US</a>
            </button>

            <div className="form">
              <h2>Login Here</h2>
              <input
                type="email"
                ref={Email}
                name="email"
                placeholder="Enter Username"
              />
              <input
                type="password"
                ref={Password}
                placeholder="Enter Password "
              />
              <button onClick={login} className="btnn">
                Login
              </button>

              <p className="link">
                Don't have an account
                <br />
                <a href="/Registration">Sign up </a> here
              </p>
              <p className="liw">Log in with</p>
              <div className="symbol">
                <a href="/#">
                  <i className="fab fa-google"></i>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/#">
                  <i className="fab fa-instagram"></i>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <div />
              </div>
            </div>
          </div>
        </div>

        <section className="about" />
        <div className="container">
          <div className="about-text">
            <h1>About Us</h1>
            <br />

            <p>
              EduLearn is an educational technology company offering a
              communication, collaboration, and coaching platform for many
              schools and teachers.
              <br />
              The EduLearn network enables teachers to share content, distribute
              quizzes, assignments, and manage communication with students,
              colleagues, and parents.
              <br />
              EduLearn is very teacher-centric in their design and philosophy:
              students and parents can only join EduLearn if invited to do so by
              a teacher.”
            </p>
            <div />
          </div>
          <section />
        </div>
      </div>

      <div className="service">
        <div className="title">
          <h2>Our Services</h2>
        </div>

        <div className="box">
          <div className="card">
            <i className="fas fa-users"></i>
            <h5>Join as a Student</h5>
            <div className="pra">
              <p>
                Here Student can access their work assigned by their teacher .
              </p>
              <p style={{ align: "center" }}>
                <a className="button" href="/#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="far fa-user"></i>
            <h5>Join as a Teacher</h5>
            <div className="pra">
              <p>
                This Helps a teacher to assign work to his/her students and also
                keep an eye on their activity.
              </p>

              <p style={{ align: "center" }}>
                <a className="button" href="/#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className="card">
            <i className="far fa-id-card"></i>
            <h5>Join as a Parent</h5>
            <div className="pra">
              <p>As a parent you can see the activity log of you child.</p>
              <p style={{ align: "center" }}>
                <a className="button" href="/#">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>EduLearn by Centurion University</p>
        <p>
          A Enviroment where teaching is made easy in a form of social media
          tool student love to learn and interact with their teacher.
          <br />
          Find us{" "}
        </p>
        <div className="siteFooterBar">
          <center>
            <div className="ft">
              <img src="./images/cutm-logo.png" alt=""></img>
            </div>
          </center>
        </div>
        <div className="social">
          <a href="/#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/#">
            <i className="fab fa-twitter"></i>
          </a>
          <br />

          <br />
        </div>
        <br />
        <br></br>
        <br />
        <br></br>
        <br />
        <br></br>
        <br></br>
        <br />
        <br></br>
        <br />
        &nbsp;
        <p className="end">© CopyRight Reserve By EduLearn</p>
      </footer>
    </div>
  );
};

export default Home;
