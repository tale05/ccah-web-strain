import React, { useState } from "react";
import './LoginEmployee.scss'
import { images, icons } from '../../../constants'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { login } from "../../../srcRedux/features/employeeSlice";
import { toastError, toastWarning } from "../../Toast/Toast";
import { loginEmployeeApi } from "../../../apis/apiLoginEmployee";
import { Helmet } from "react-helmet";

function LoginEmployee() {
    const dispatch = useDispatch()
    const [employeename, setemployeename] = useState('')
    const [password, setPassword] = useState('')
    const [spinner, setSpinner] = useState(false)

    const navigate = useNavigate();

    const handleLogin = async () => {
        setSpinner(true)
        if (!employeename || !password) {
            toastWarning('Vui lòng nhập đầy đủ thông tin')
            setSpinner(false)
            return;
        }
        try {
            const employee = await loginEmployeeApi(employeename, password)
            if (employee.data) {
                // if(employee.data.idRole !== 1) {
                //     toastWarning('Bạn không có quyền đăng nhập vào trang này')
                //     return
                // }
                dispatch(login({ employeeData: employee.data }))
                navigate('/Home')
            }
            else {
                setSpinner(false)
                toastError("Sai tên tài khoản hoặc mật khẩu")
            }

            navigate('/Employee/DashBoard', { replace: true })
        }
        catch (e) {
            console.log(e)
            setSpinner(false)
            toastError("Sai tên tài khoản hoặc mật khẩu")
        }
    }

    const handleBackHome = () => {
        navigate('/')
    }

    return (
        <>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <div className="LoginEmployee">
                <div className="col-1">
                    <div className="wrap-logo">
                        <img className="icon-logo" src={icons.logo_new} />
                        <h2 className="title">VIỆN NGHIÊN CỨU ỨNG DỤNG VÀ CHUYỂN GIAO CÔNG NGHỆ</h2>
                    </div>

                    <form className="form">
                        <div>
                            <div className="input-box">
                                <input className="input-text" type="text" placeholder="Tên đăng nhập" value={employeename} onChange={(e) => setemployeename(e.target.value)} required />
                            </div>
                            <div className="input-box">
                                <input className="input-text" type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>

                        <button className="btn-login"
                            type="button" onClick={handleLogin}>Đăng nhập</button>
                        <button className="btn-back-home"
                            type="button" onClick={handleBackHome}>Trở về trang chính</button>
                        <HashLoader
                            color="white"
                            loading={spinner}
                            size={20}
                            cssOverride={{ position: 'absolute', right: 198, bottom: 100 }}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginEmployee