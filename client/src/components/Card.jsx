export default function Card() {
    return (
        <>
            <div className="card flex flex-col md:flex-row items-center justify-center gap-4  md:w-5/6 p-4  mt-6 ">
                <div className="card-image w-1/3 h-full">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1734629912092-2875217f9764?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="unsplash"
                        className="w-full h-full"/>
                </div>
                <div
                    className="card-text w-2/3 h-full flex flex-col items-center md:items-start justify-between gap-4 p-2">
                    <div className="card-headings">
                        <h2 className="text-lg font-md">Blog Name</h2>
                        <h3 className="text-xs mx-4"> by user Name</h3>
                    </div>
                    <div className="card-content text-sm">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolorem eaque et facilis iste iusto laborum non praesentium
                            repudiandae totam velit veniam veritatis voluptatum. Aliquid distinctio iusto libero nulla sequi.</p>
                    </div>
                    <button className="py-2 px-4 bg-yellow-100 rounded-2xl text-sm hover:bg-yellow-300 ">expand
                    </button>
                </div>
            </div>
        </>
    )
}
