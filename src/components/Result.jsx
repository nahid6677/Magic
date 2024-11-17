import { Link, useLoaderData, useParams } from "react-router-dom";
const Result = () => {
    const params = useParams();
    const id = params.fId;
    const idInt = parseInt(id)
    const loadData = useLoaderData();
    return (
        <div className="w-full">
            <header className="w-full py-3 px-2 bg-green-300">
                <h2 className="text-2xl text-center font-bold text-black">Magic</h2>
            </header>
            <div className="w-11/12 mx-auto  my-5" >
                <div className="md:w-11/12 mx-auto w-full px-2 ">
                    <div className="p-3">
                        <h2 className='text-2xl text-center text-red-500'> Your Choosc</h2>
                        {
                            loadData.map(data => data.id === idInt && <h2 key={data.id} className="text-xl text-center py-10 text-green-600  my-2 font-bold">{`${data.name_bangla}-${data.name_english}`}</h2>)
                        }
                    </div>
                    <div className="w-full flex justify-center">
                        <Link to={'/'}><button className="btn px-3 bg-green-500 font-bold text-xl">Again</button></Link>
                        {/* <Link to={''}><button className="btn px-3 bg-green-500 font-bold text-xl">Yes</button></Link> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Result;