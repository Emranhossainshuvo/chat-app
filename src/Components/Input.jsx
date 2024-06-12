
const Input = () => {
    return (
        <div className="input h-[50px] flex items-center justify-between bg-white p-2">
            <input type="text" className="w-[100%] outline-none text-purple-900 text-lg border-none" name="" placeholder="Type something..." id="" />
            <div className="send flex items-center">
                <img src="https://i.ibb.co/34rpnFv/icons8-attach-24.png" alt="" />
                <input type="file" name="" id="file" style={{display: "none"}} />
                <label htmlFor="file">
                    <img className="h-[24px] cursor-pointer w-[35px]" src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                </label>
                <button className="border-none px-[10px] py-[7px] text-white bg-sky-700 rounded-sm ms-2">Send</button>

            </div>
        </div>
    );
};

export default Input;