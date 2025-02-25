import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Account() {
    const [user, setUser] = useState([])
    const isLogin = !!localStorage.getItem("token")
    const token = localStorage.getItem("token")
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (!token) return; // If no token, exit

                // Verify user token
                const verifyResponse = await axios.post("http://localhost:5000/userverify", { token });
                const userId = verifyResponse.data.userId;

                // Fetch user data
                const userResponse = await axios.post("http://localhost:5000/user", { userId });

                setUser(userResponse.data);
                console.log(userResponse.data);
            } catch (error) {
                console.error("Error:", error.response?.data || error.message);
            }
        };

        fetchUserData();
    }, [token]);

    return (
        <div className="w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex gap-[55px] justify-center items-center mt-[100px]">
                    <div>
                        <img src={`https://avatar.iran.liara.run/public/boy`} alt="avatar" width={200} />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>name: <span>{user?.username}</span></div>
                        <div>email: <span>{user?.email}</span></div>
                    </div>
                </div>
                <Link to="/account/edit">
                    <button className='w-fit flex justify-center items-center gap-[10px] bg-red-600 py-1.5 px-3 rounded-lg text-white'> <p>Edit</p> <FaRegEdit className='' /> </button>
                </Link>
            </div>
            {user.diet && user?.diet.Breakfast ? (
                <div className="response-container sm:p-10 w-[600px] sm:m-10 p-5 m-5 md:p-20 md:m-20 rounded-lg bg-blue-50">
                    <strong className='flex justify-center items-center text-lg mb-5'>Diet</strong>
                    <p><strong>Breakfast:</strong> {user.diet.Breakfast}</p>
                    <p><strong>Lunch:</strong> {user.diet.Lunch}</p>
                    <p><strong>Snacks:</strong> {user.diet.Snacks}</p>
                    <p><strong>Dinner:</strong> {user.diet.Dinner}</p>
                    <p><strong>Hydration:</strong> {user.diet.Hydration}</p>
                </div>
            ) : null}


        </div>
    )
}

export default Account