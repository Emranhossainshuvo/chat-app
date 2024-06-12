import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            {/* section that will hold everything in this file */}
            <section className="h-[100vh] flex items-center justify-center w-[100vw] bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] w-[24%] rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-2 mt-3">Talks chat</h3>
                    <p className="text-center mb-4 text-xl font-semibold">Login</p>
                    <form className="flex flex-col gap-7 px-10">
                        <input placeholder="Email" className="h-10 outline-none ps-3 rounded-md" type="email" name="" id="" />
                        <input placeholder="Password" className="h-10 outline-none ps-3 rounded-md" type="password" name="" id="" />
                        
                        <input className="h-10 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Login" />
                    </form>
                    <p className="text-center my-4">Don&apos;t have an account?<Link to={"/register"}>Register</Link></p>
                </section>
            </section>
        </>
    );
};

export default Login;