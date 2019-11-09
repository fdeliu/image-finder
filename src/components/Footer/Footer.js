import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className="bg-primary text-white fixed-bottom">
           <div className="container d-flex">
                <p className="my-auto">Disclamer: This application uses <em>Pixabay API</em></p>
                <p className="ml-auto my-auto">{year} &copy; Flamur Deliu</p>
           </div>
        </div>
    )
}
