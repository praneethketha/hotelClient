import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import ChangePasword from "./components/ChangePassword/changePassword";
import Deactivate from "./components/Deactivate/deactivate";
import Edit from "./components/Edit/edit";
import ProfileCard from "./components/ProfileCard/profileCard";
import TimeLine from "./components/TimeLine/timeLine";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { Home, HotelDetail, Hotels, Profile } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="hotels/:id" element={<HotelDetail />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<ProfileCard />}></Route>
          <Route path="timeline" element={<TimeLine />}></Route>
          <Route path="edit" element={<Edit />}></Route>
          <Route path="change-password" element={<ChangePasword />}></Route>
          <Route path="deactivate" element={<Deactivate />}></Route>
        </Route>
        <Route path="login" element={<LoginRegister />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
