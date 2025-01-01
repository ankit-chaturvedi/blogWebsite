export default function Card(props) {
    return (
        <>
            <div className="card flex  hover:text-gray-200 hover:bg-emerald-800 shadow-md cursor-pointer transition-all duration-100 ease-in-out border-2  border-opacity-40 border-gray-300 rounded-lg opacity-95
            text-slate-700 flex-col md:flex-row items-center justify-center gap-4   md:w-5/6 p-4  mt-6 ">
                <div className="card-image w-64 h-52">
                    <img
                        src={props.img}
                        alt="unsplash"
                        className="w-full h-full"/>
                </div>
                <div
                    className="card-text w-2/3 h-full flex flex-col items-center md:items-start justify-between gap-4 p-2">
                    <div className="card-headings">
                        <h2 className="text-lg font-md">{props.title}</h2>
                        <h3 className="text-xs mx-4"> @userName</h3>
                    </div>
                    <div className="card-content text-sm">
                        <p>{props.content}</p>
                    </div>
                    <button className="py-2 px-4 bg-yellow-100 rounded-2xl text-sm hover:bg-yellow-300 ">expand
                    </button>
                </div>
            </div>
        </>
    )
}
