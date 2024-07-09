import React from 'react';
import img1 from './assets/img1.jpg'
const FamilyWellness = () => {
    return (
        <>
            <nav className=' h-10 flex items-center bg-red-500 text-white '>
                <ul className=' flex justify-evenly w-full cursor-pointer'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>FAQ</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <div className='flex justify-center bg-slate-300'>
                <img src={img1} alt=""  className='h-[700px] w-[1200px]'/>
            </div>
            <div className=' bg-red-800 flex flex-col p-4 gap-10 items-center text-white'>
                <h1 className=' text-3xl'>Think Health. Think Massage.</h1>
                <p className=' w-[600px] text-center'>we are open 9am to 6pm, monday through sunday. if you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
                <div className=' flex gap-8'>
                    <button className='border border-white px-4 py-2'>LEARN MORE ABOUT US</button>
                    <button className='border border-white px-4 py-2'>CONTACT US TODAY</button>
                </div>
               
            </div>

            <div className=' flex flex-col justify-center bg-slate-300 p-6  gap-4'>
                <p className='text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo modi consequatur inventore quos cumque alias temporibus debitis, soluta odio ad pariatur error harum eveniet. Sint adipisci similique numquam cumque praesentium? </p>
                <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iure doloribus voluptate alias atque, error nemo incidunt dolorem? At suscipit rerum eos autem beatae eius facilis voluptatibus praesentium impedit quos.</p>
                <p className='text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam qui explicabo magnam quidem nulla fugit quo id, recusandae cupiditate, laudantium soluta ut sapiente repellendus dignissimos, iste aut corporis facilis provident!</p>
            </div><hr />

            <div className=' flex flex-col items-center p-6 bg-slate-300'>
                <h2>Family Wellness Massage Therapy</h2>
                <p>9876 main street. suite 123, Mainland , ML12345</p>
                <p>phone:987654321</p>
            </div>
        </>
    );
}

export default FamilyWellness;
