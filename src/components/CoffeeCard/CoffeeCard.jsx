import { NavLink } from "react-router-dom";

const CoffeeCard = () => {
    return (
        <div>
            <div className=" bg-no-repeat h-screen bg-[url(https://i.ibb.co/GPZ7GRS/1.png)] w-full ">
               <h1 className="flex items-center justify-center mt-16">--- Sip & Savor ---</h1>
               <h1 className="flex items-center justify-center pt-4 font-bold text-3xl">Our Popular Products</h1>
                <div className="flex justify-center items-center pt-4">
                    <NavLink to="/addcoffee">
                    <button  className="btn btn-outline  bg-[#E3B577] text-white">Add Coffee</button>
                    </NavLink>
                </div>
                <div className="grid sm:grid-cols-2 grid-rows-1 gap-4 m-20">
                    <div className="card card-side bg-[#F5F4F1] pt-4">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side bg-[#F5F4F1]  pt-4">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoffeeCard;