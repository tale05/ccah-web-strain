import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        isLogin: false,  // Giữ trạng thái đăng nhập
        employeeData: null,  // Dữ liệu nhân viên
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;  // Cập nhật trạng thái đăng nhập
            state.employeeData = action.payload.employeeData;  // Lưu dữ liệu nhân viên
        },

        logout: (state) => {
            state.isLogin = false;  // Đặt lại trạng thái đăng nhập về false
            state.employeeData = null;  // Xóa dữ liệu nhân viên khi đăng xuất
        },

        changeData: (state, action) => {
            state.employeeData = action.payload.employeeData;  // Cập nhật lại thông tin nhân viên (nếu cần)
        }
    }
})

export const { login, logout, changeData } = employeeSlice.actions;
export default employeeSlice.reducer;