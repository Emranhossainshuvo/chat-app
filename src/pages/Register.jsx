import {  createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import {auth} from "../firebase"

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



    }

    return (
        <>
            {/* section that will hold everything in this file */}
            <section className="h-[100vh] flex items-center justify-center w-[100vw] bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] w-[24%] rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-2 mt-3">Talks chat</h3>
                    <p className="text-center mb-4 text-xl font-semibold">Register</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-7 px-10">
                        <input placeholder="Name" className="h-10 ps-3 outline-none rounded-md" type="text" name="" id="" />
                        <input placeholder="Email" className="h-10 ps-3 outline-none rounded-md" type="email" name="" id="" />
                        <input placeholder="Password" className="h-10 ps-3 outline-none rounded-md" type="password" name="" id="" />
                        <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="" id="file" />
                        <label className=" cursor-pointer flex gap-2 justify-start items-center" htmlFor="file">
                            <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                            <p className="text-lg font-semibold">
                                Upload your profile picture
                            </p>
                        </label>
                        <input className="h-10 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Register" />
                    </form>
                    <p className="text-center my-4">Already have an account?<Link to={"/login"}>Login</Link></p>
                </section>
            </section>
        </>
    );
};

export default Register;