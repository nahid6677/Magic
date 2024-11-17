import { Link, useLoaderData } from "react-router-dom";

const Next1 = () => {
    const loadData = useLoaderData();
    return (
        <div className="w-full">
            <header className="w-full py-3 px-2 bg-green-300">
                <h2 className="text-2xl text-center font-bold text-black">Magic</h2>
            </header>
            <div className="w-11/12 mx-auto  my-5" >
                <div className="md:w-11/12 mx-auto w-full px-2 ">
                <div className="w-full flex justify-center">
                    <Link to={'/'}><button className="btn px-3 bg-green-500 font-bold text-xl">Home</button></Link>
                </div>
                    <div className="p-3">
                        {/* <h2> Next- 1</h2> */}
                        {
                            loadData.map(data => <h2 key={data.id} className="text-xl border rounded-lg p-3 my-2 text-black font-bold">{`${data.name_bangla}-${data.name_english}`}</h2>)
                        }
                    </div>
                    <div className="w-full flex justify-between">
                        <Link to={'/next-2'}><button className="btn px-3 bg-green-500 font-bold text-xl">No</button></Link>
                        <Link to={'/Next1Yes'}><button className="btn px-3 bg-green-500 font-bold text-xl">Yes</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Next1;