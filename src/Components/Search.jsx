
const Search = () => {
    return (
        <div className="border-b-2 searchhh border-gray-400">
            <div className="serchform">
                <input className="bg-transparent border-none text-white outline-none" placeholder="Find a user " type="text" />
            </div>
            <div className="userchat p-3 flex items-center gap-10 cursor-pointer hover:bg-gray-600">
                <img className="w-[50px] h-[50px] rounded-[50%] object-cover" src="https://i.ibb.co/DQR0TGc/126.jpg" alt="" />
                <div>
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;