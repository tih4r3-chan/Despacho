import React from 'react'
import LogoSearchBar from "../assets/images/logistics-delivery.png"

export const SearchBar = () => {
  return (
    <>
        <section className="grid grid-cols-12">
            <div className="grid-span-4">
                <img src={LogoSearchBar} alt="logo" />
            </div>
            <div className="grid-span-8">
                holax2
            </div>
        </section>
    </>
  )
}
