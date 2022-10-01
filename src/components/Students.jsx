import React from 'react'

const Students = () => {
  return (
    <>
      <div>
        <h1>Student Details</h1>
      </div>
      <div className='tab'>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <th scope="row">sandeep</th>
              <td>23</td>
              <td>web</td>
              <td>July</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Shweta</th>
              <td>22</td>
              <td>web</td>
              <td>September</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Vinet</th>
              <td>26</td>
              <td>web</td>
              <td>dec</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Shivam</th>
              <td>22</td>
              <td>web</td>
              <td>jan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Students