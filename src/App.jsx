import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';
import ContentEmployee from './components/employeeSrc/contentemployee/ContentEmployee';
import FooterV2 from './components/footer/FooterV2';
import { useSelector } from 'react-redux';

const CustomerLayout = () => {
    return (
        <div className='container'>
            {/* header */}
            <Navbar />
            {/* body */}
            <Content />
            {/* footer */}
            {/* <Footer /> */}
            <FooterV2 />
        </div>
    );
};

const EmployeeLayout = () => {
    return (
        <div className='container'>
            <ContentEmployee />
        </div>
    );
};

// SPA here
function App() {
    const navigate = useNavigate();  // Sử dụng useNavigate thay vì useHistory
    const employeeData = useSelector(state => state.employee.employeeData);  // Lấy dữ liệu nhân viên từ Redux

    useEffect(() => {
        const currentUrl = window.location.pathname;

        // Nếu đã đăng nhập và người dùng truy cập vào trang /Employee hoặc bất kỳ trang con nào của /Employee, chuyển hướng về trang chủ
        if (employeeData && currentUrl.startsWith('/Employee')) {
            navigate('/Employee/DashBoard');  // Điều hướng về trang chủ
        }

        // Nếu người dùng chưa đăng nhập và truy cập vào /Employee/DashBoard, chuyển hướng về trang chủ
        if (!employeeData && currentUrl === '/Employee/DashBoard') {
            navigate('/Employee');  // Điều hướng về trang chủ
        }
    }, [navigate, employeeData]);  // Chạy lại khi employeeData thay đổi

    return (
        <Routes>
            <Route path="/*" element={<CustomerLayout />} />
            <Route path="/Employee/*" element={<EmployeeLayout />} />
        </Routes>
    );
}

export default App;
