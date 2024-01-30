import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './StudentGrading.css'
import Profile from '../Images/Profile.png'
import Form from 'react-bootstrap/Form';
import { RiUpload2Fill } from "react-icons/ri";


function StudentGrading() {
  const [lgShow, setLgShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    assignmentTitle: '',
    instructions: '',
    status: '',
    date: '',
    time: ''
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    // Check if the input is manually entered (not selected from date picker)
    if (value.length === 10) { // Check if the input length is exactly 10 characters (mm/dd/yyyy format)
      const parts = value.split('/');
      if (parts.length === 3) {
        const month = parts[0].padStart(2, '0'); // Ensure month is 2 digits
        const day = parts[1].padStart(2, '0'); // Ensure day is 2 digits
        const year = parts[2];
        formattedValue = `${month}/${day}/${year}`;
      }
    }

    setFormData({
      ...formData,
      [name]: formattedValue
    });
  };

  const handleConfirm = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div className='StudentGrading-main'>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className='StudentModal'
      >
        <Modal.Body>
          <div className='StudentHead'>
            <h2>Student Grading</h2>
          </div>
          <div className='StudentGrading-MainBody'>
            <div>
              <img src={Profile} alt='#' />
            </div>
            <div className='StudentGrading-Name'>
              <h4>Shoaib Karim</h4>
              <p className='Student-para'>Student ID : TIPSG5682</p>
              <div className='StudentGrading-All'>
                <h5>Course <span>Articulate structure of C++ and Java in Semester 1</span></h5>
                <h6>Subject <span>Gis Programming</span></h6>
                <Form.Select aria-label="Default select example" className='StudentGrading-Select'>
                  <option>Total %</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className='StudentGrading-Select'>
                  <option>Received %</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </Form.Select>
                <label>Assignment Subject</label> <br />
                <input
                  placeholder='Title'
                  className='StudentGrading-input'
                  name="assignmentTitle"
                  onChange={handleInputChange}
                />
                <textarea
                  placeholder='Instructions (Optional)'
                  className='StudentGrading-textarea'
                  name="instructions"
                  onChange={handleInputChange}
                />
                <label>Status</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ marginTop: '1px', boxShadow: 'none' }}
                  name="status"
                  onChange={handleInputChange}
                >
                  <option>pass/fail</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                </Form.Select>
                <div className='StudentGrading-twoInputs'>
                  <div>
                    <label>Date</label><br />
                    <input
                      type="date"
                      onChange={handleInputChange}
                      className="CustomDateInput"
                    />
                  </div>
                  <div>
                    <label>Time</label><br />
                    <input
                      type="time"
                      placeholder='- - : - -  - -'
                      name="time"
                      onChange={handleInputChange}
                      className="CustomTimeInput"
                    />
                  </div>
                </div>
                {/* Input File Upload */}
                <div className='StudentGrading-Upload'>
                  <div className='StudentGrading-Up-child1'>
                    <p onClick={() => document.getElementById('fileInput').click()} >Upload File</p>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <RiUpload2Fill onClick={() => document.getElementById('fileInput').click()} />
                    <h6>{selectedFile ? selectedFile.name : 'No file chosen'}</h6>
                  </div>
                  <div className='StudentGrading-Up-child2'>
                    <input placeholder='- - : - -  - -' />
                  </div>
                </div>
                {/* End */}
                <div className='StudentGrading-button'>
                  <button onClick={handleConfirm}>Confirm</button>
                </div>
                <div className='StudentGrading-switch'>
                  <label>notify all student on their email</label>
                  <Form>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentGrading;
