
const Register = () => {
    return (
        <>
            {/* section that will hold everything in this file */}
            <section className="h-[100vh] flex items-center justify-center w-[100vw] bg-[#31473a]">
                {/* section to hold the main content */}
                <section className="bg-[#f1f1f2] rounded-xl">
                    <h3 className="text-center text-3xl font-semibold mb-3 mt-2">Talks chat</h3>
                    <p className="text-center text-xl font-semibold">Register</p>
                    <form className="flex flex-col gap-10 p-10">
                        <input type="text" name="" id="" />
                        <input type="email" name="" id="" />
                        <input type="password" name="" id="" />
                        <input type="file" name="" id="" />
                        <input type="submit" value="Register" />
                    </form>
                </section>
            </section>
        </>
    );
};

export default Register;