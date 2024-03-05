import React from 'react'
import avatar from '~/assets/image/avatar-1.png'
import { BiCog, BiLogOutCircle, BiUser } from "react-icons/bi";
import './UserBox.css';
import  Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const UserBox = () => {
  return (
      <div className='user-box'>
          <DropdownButton
              className='d-flex align-items-center nav-link'
              id="dropdown-item-button"
              title={ 
              <div className='d-flex align-items-center'>
                  <img
                    src={avatar}
                    alt='user avatar'
                    className='user-img'
                  />
                <div className='user-info ps-3'>
                    <p className='user-name mb-0'>TuấnND</p>
                    <p className='designattion mb-0'>NH-TPBANK</p>
                </div>
              </div>
              }
          >
              <Dropdown.Item eventKey="1" >
                    <BiUser className='user-items' />
                    <span className='dd-text'>Profile</span>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                    <BiCog className='user-items' />
                    <span>Setting</span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3" >
                    <BiLogOutCircle className='user-items' />
                    <span>Logout</span>
              </Dropdown.Item>
          </DropdownButton>
    </div>
  )
}

export default UserBox