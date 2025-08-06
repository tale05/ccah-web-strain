import React, { useEffect, useState } from "react";
import './DashBoard.scss'
import Drawer from "../drawer/Drawer";
import NavbarEmployee from "../navbarEmployee/NavbarEmployee";
import Main from "../main/Main";
import { getDataLocalStorage } from "../../../utils/Utils";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function DashBoard() {
    const dataEmployee = useSelector(state => state.employee.employeeData)
    const isLogin = useSelector(state => state.employee.isLogin)
    const [screenName, setScreenName] = useState(getDataLocalStorage('screenNameOfDrawer') || 'contentWork');

    return (
        <>
            <Helmet>
                <title>Trang quản trị | CCAH</title>
            </Helmet>
            <div className="DashBoard">
                <Drawer setScreenName={setScreenName} />

                <div className="col-2">
                    <NavbarEmployee employee={dataEmployee} setScreenName={setScreenName} />
                    <Main nameScreen={screenName} employee={dataEmployee} />
                </div>
            </div>
        </>
    )
}

export default DashBoard