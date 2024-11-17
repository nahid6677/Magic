import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const loadData = useLoaderData()
    // console.log(loadData)
    return (
        <div className="w-full">
            <header className="w-full py-3 px-2 bg-green-300">
                <h2 className="text-2xl text-center font-bold text-black">Magic</h2>
            </header>
            <div className="w-11/12 mx-auto  my-5" >
                <div className="md:w-11/12 mx-auto w-full px-2 ">
                    <div className="p-3">
                        {
                            loadData.map(data => <h2 key={data.id} className="text-xl border rounded-lg p-3 my-2 text-black font-bold">{`${data.name_bangla}-${data.name_english}`}</h2>)
                        }
                    </div>
                    <div className="w-full flex justify-center">
                        <Link to={'next-1'}> <button className="btn px-10 bg-green-500 font-bold text-2xl"> Start</button> </Link>
                        {/* <button className="btn px-10 bg-green-500 font-bold text-2xl"> Start</button> */}
                        {/* <Link to={''} className="btn px-10 bg-green-500 font-bold text-2xl"> Start</Link> */}
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Home;