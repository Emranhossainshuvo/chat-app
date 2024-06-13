import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase"
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Register = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];


        try {

            const res = await createUserWithEmailAndPassword(auth, email, password);


            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(

                (error) => {
                    setErr(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                        })

                        await setDoc(doc(db, "userChats", res.user.uid), {})
                        navigate("/")
                    });
                }
            );
        } catch {
            setErr(true)
        }




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
                        {err && <span className="text-red-600">Something went wrong</span>}
                    </form>
                    <p className="text-center my-4">Already have an account?<Link to={"/login"}>Login</Link></p>
                </section>
            </section>
        </>
    );
};

export default Register;