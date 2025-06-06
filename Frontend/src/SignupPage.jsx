import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SignupPage = ({ acc, setAcc}) => {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };

    const res = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = await res.json();

    if (result) {
      setAcc(true);
      navigate("/");
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="">
        <img
          src="./login-page-bg.jpeg"
          alt=""
          className="-z-10 absolute rounded-lg min-h-screen w-full "
        />

        <div className="flex flex-col justify-center p-4 items-center">
          <div>
              <div className="">
            <h1 className="text-6xl pt-0 ml-30  text-gray-700 ">Welcome!</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className=" bg-white ml-20 m-4 p-4 rounded-lg w-2/3 text-center h-[60vh] w-[55vh]"
          >
            <h2 className=" text-2xl font-bold text-green-900">Signup</h2>
            <br />
            <br />
            <label htmlFor="name">Enter name</label>
            <br />
            <input
              required
              type="text"
              id="name"
              name="name"
              className="border-1  border-gray-300 rounded"
            />
            <br />
            <br />
            <label htmlFor="email">Enter email</label>
            <br />
            <input
              required
              type="email"
              id="email"
              name="email"
              className="border-1 border-gray-300 rounded"
            />
            <br />
            <br />
            <label htmlFor="password">Enter password</label>
            <br />
            <input
              required
              type="password"
              name="password"
              id="password"
              className="border-1 border-gray-300 rounded"
            />
            <br />
            <br />
            <button className="p-2 w-3xs bg-white border-2 hover:scale-[95%] hover:text-white hover:bg-green-900  transition-transform rounded-xl">
              Submit
            </button>
          </form>
          </div>
          <div>
          <button onClick={() => navigate("/login")}>
            Already have an account?{" "}
            <span className="text-green-900 font-bold">Login</span>
          </button>
        </div>
        </div>
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;
