import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            {/* section that will hold everything in this file */}
            <section className="h-[100vh] flex items-center justify-center w-[100vw] bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] w-[24%] rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-2 mt-3">Talks chat</h3>
                    <p className="text-center mb-4 text-xl font-semibold">Register</p>
                    <form className="flex flex-col gap-7 px-10">
                        <input placeholder="Name" className="h-10 ps-3 rounded-md" type="text" name="" id="" />
                        <input placeholder="Email" className="h-10 ps-3 rounded-md" type="email" name="" id="" />
                        <input placeholder="Password" className="h-10 ps-3 rounded-md" type="password" name="" id="" />
                        <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="" id="file" />
                        <label className=" flex gap-2 justify-start items-center" htmlFor="file">
                            <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                            <p className="text-lg font-semibold">
                                Upload your profile picture
                            </p>
                        </label>
                        <input className="h-10 bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Register" />
                    </form>
                    <p className="text-center my-4">Already have an account?<Link to={"/login"}>Login</Link></p>
                </section>
            </section>
        </>
    );
};

export default Register;