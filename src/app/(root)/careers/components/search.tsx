"use client"
import React from "react"

const Search = () => {
  return (
    <div className="relative w-full text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search for roles and designations"
        className="h-14 w-full rounded-xl bg-white px-5 pr-10 text-sm focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mr-4 mt-4">
        <svg className="size-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default Search
