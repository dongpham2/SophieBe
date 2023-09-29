import React from 'react'
import Logo from "../assets/images/logo.png"
import Logo1 from "../assets/images/logo1.png"
import Logo2 from "../assets/images/logo2.png"
import Logo3 from "../assets/images/logo3.png"
import Logo4 from "../assets/images/logo4.png"
import Logo5 from "../assets/images/logo5.png"
import Logo6 from "../assets/images/Logo6.png"
import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"

function Services() {
  const services = [
    {id: 1, title: "Membership Organisations", discription: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/images/icon1.png"},
    {id: 2, title: "National Associations", discription: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/images/icon2.png"},
    {id: 3, title: "Clubs And Groups", discription: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/images/icon3.png"}
  ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey'>Our clients</h2>
        <p className='text-neutralDGrey'>We have been working with some fortune 500+ clients</p>
        {/* company */}
        <div className='flex justify-between my-12 flex-wrap items-center gap-8'> 
          <img src={Logo} />
          <img src={Logo1} />
          <img src={Logo2} />
          <img src={Logo3} />
          <img src={Logo4} />
          <img src={Logo5} />
          <img src={Logo6} />
        </div>
        <div className='md-20 md:w-1/2 mx-auto text-center'>
          <h2 className='font-semibold text-4xl text-neutralDGrey mb-3'>Manage your entire community in a single system</h2>
          <p className='text-neutralDGrey'>Who is Nextcent suitable for?</p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
          {
            services.map(service => <div key={services.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-between h-full'>
              <div >
                <div className='bg-[#e8f5e9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                  <img src={service.image} className='-ml-5'/>
                </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2'>{services.title}</h4>
                <p className='text-sm text-neutralDGrey'> {service.discription}</p>
              </div>
            </div>)
          }
        </div>
      </div>
    
    </div>
  )
}

export default Services