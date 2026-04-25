import React from 'react'
import contactImg from '../../assets/images/Service 24_7-pana 1.png'

const contactPage = () => {
  return (
    <>
        <div>
            <div>
                <div className='px-60 py-14'>
                  <h1 className='text-5xl font-extrabold'>Contact Us</h1>
                  <p className='text-sm py-2 text-gray-400'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR<br/> JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR <br/>SOCIAL MEDIA. </p>

              </div>
            </div>

            <div className="min-h-screen flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* LEFT SIDE (FORM) */}
        <div className="bg-white p-6 rounded-xl shadow-md">

          {/* Top Buttons */}
          <div className="flex justify-between mb-4">
            <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
              VIA SUPPORT CHAT
            </button>
            <button className="bg-black text-white px-12 py-2 rounded-md text-sm">
              VIA CALL
            </button>
          </div>

          {/* Email Form Button */}
          <button className="w-full border border-black py-2 text-sm font-medium mb-4">
            VIA EMAIL FORM
          </button>

          {/* Form */}
          <form className="space-y-4">
            <div className="relative w-full my-6">
  {/* Label */}
  <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
    Name
  </label>

  {/* Input */}
  <input
    type="text"
    className="w-full border border-gray-400 rounded-sm py-3 px-3 outline-none focus:border-black"
  />
</div>

           <div className="relative w-full my-6">
  {/* Label */}
  <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
    E-Mail
  </label>

  {/* Input */}
  <input
    type="email"
    className="w-full border border-gray-400 rounded-sm py-3 px-3 outline-none focus:border-black"
  />
</div>

            <div className="relative w-full my-6">
  {/* Label */}
  <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-700">
    Text
  </label>

  {/* Input */}
  <textarea
    
    className="w-full border border-gray-400 rounded-sm py-3 px-3 outline-none focus:border-black"
  ></textarea>
</div>

            <div className="flex justify-end">
              <button className="bg-black text-white px-6 py-2 rounded-md">
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE (IMAGE + TEXT) */}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={contactImg}
            alt="support"
            className=" mb-4"
          />

          <h1 className="text-5xl font-bold">24/7</h1>
          <p className="text-2xl font-semibold text-gray-700">SERVICE</p>
        </div>

      </div>
    </div>

        </div>
    </>
  )
}

export default contactPage