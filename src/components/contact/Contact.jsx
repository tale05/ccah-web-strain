import React from 'react'
import './Contact.scss'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { images } from '../../constants';

function Contact() {
    return (
        <div className='Contact'>
            <div className="row-banner">
                <img className="banner" src={images.bannercontact} />
            </div>

            {/* <h1 className='title-contact-main'>LIÊN HỆ CHÚNG TÔI</h1> */}

            <div className='wrap-all-contact'>
                <div className='wrap-item-contact'>
                    <div className='card-img'>
                        <IoPhonePortraitSharp className='icon-contact' />
                    </div>
                    <h2 className='title-contact'>ĐIỆN THOẠI</h2>
                    <p>#</p>
                </div>
                <div className='wrap-item-contact'>
                    <div className='card-img'>
                        <MdOutlineMail className='icon-contact' />
                    </div>
                    <h2 className='title-contact'>EMAIL</h2>
                    <p>#@gmail.com</p>
                </div>

                <div className='wrap-item-contact'>
                    <div className='card-img'>
                        <FaMapMarkedAlt className='icon-contact' />
                    </div>
                    <h2 className='title-contact'>ĐỊA CHỈ</h2>
                    <p >140 Đ. Lê Trọng Tấn, Tây Thạnh, Tân Phú, Hồ Chí Minh, Việt Nam</p>
                </div>
            </div>
        </div>
    )
}

export default Contact