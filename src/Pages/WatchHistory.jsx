import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center mb-5 mt-5 container'>
        <h3>WatchHistory</h3>
        <Link to={'/home'}><i class="fa-solid fa-arrow-left fa-beat"></i>Back to Home</Link>
      </div>
      <table className="table mb-5 container shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Video Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th><i class="fa-solid fa-ellipsis"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Animal</td>
            <td><a href="https://www.hdcarwallpapers.com/walls/mercedes_benz_g_63_amg-HD.jpg" target='_blank'>https://www.youtube.com/embed/fgaXz0u6cnQ</a></td>
            <td>13/12/2023</td>
            <td className='btn'>
              <button>
                <i className='fa-solid fa-trash text-danger'></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory