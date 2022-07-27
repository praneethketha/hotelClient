import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChangePasword from "./components/ChangePassword/changePassword";
import Edit from "./components/Edit/edit";
import ProfileCard from "./components/ProfileCard/profileCard";
import TimeLine from "./components/TimeLine/timeLine";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { Admin, Home, HotelDetail, Hotels, Profile } from "./pages";
import SignUp from "./components/SignUp/signUp";
import VerifyOTP from "./components/VerifyOTP/verifyOTP";
import ForgotPassword from "./components/ForgotPassword/forgotPassword";
import Login from "./components/Login/login";
import ResetPassword from "./components/ResetPassword/resetPassword";
import ReserveModal from "./components/ReserveModal/reserveModal";
import DatePicker from "./components/DatePicker/datePicker";
import RoomPicker from "./components/RoomPicker/roomPicker";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";
import AdminBooking from "./components/AdminBooking/adminBooking";
import AdminHotel from "./components/AdminHotels/adminHotels";
import AdminCustomers from "./components/AdminCustomers/adminCutomers";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Payment from "./components/Payment/payment";
import NotFound from "./pages/NotFound/notFound";
import RequireAuth from "./components/RequireAuth/requireAuth";
import { useAuth } from "./store/authContext";
import AddHotel from "./components/AddHotel/addHotel";
import AddRoom from "./components/AddRooms/addRoom";

function App() {
  const { userId } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="hotels/:id" element={<HotelDetail />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<ProfileCard />}></Route>
          <Route path="timeline" element={<TimeLine />}></Route>
          <Route path="edit" element={<Edit />}></Route>
          <Route path="change-password" element={<ChangePasword />}></Route>
        </Route>
        {!userId && (
          <Route path="auth" element={<LoginRegister />}>
            <Route index element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="verifyOTP" element={<VerifyOTP />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="resetPassword/:token" element={<ResetPassword />} />
          </Route>
        )}
        <Route path="reserve" element={<ReserveModal />}>
          <Route index element={<DatePicker />} />
          <Route path="roomSelect" element={<RoomPicker />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route
          path="admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="booking" element={<AdminBooking />} />
          <Route path="hotels" element={<AdminHotel />}>
            <Route path="addHotel" element={<AddHotel />} />
            <Route path="addRoom" element={<AddRoom />} />
          </Route>
          <Route path="customers" element={<AdminCustomers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
