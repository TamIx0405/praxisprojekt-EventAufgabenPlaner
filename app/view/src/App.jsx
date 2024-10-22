import React, { useState } from "react";
import PageAdmin from "./pages/admin/Index";
import PageMain from "./pages/main/Index.jsx";
import Login from "./pages/cores/login/Index.jsx";
import Button from "./components/Button.jsx";
import PageDevelop from "./pages/develop/index.jsx";
import { useAuth } from "./service/authStatus.jsx";
import RegisterPage from "./pages/cores/register/index.jsx";
import ProfileModal from "./pages/cores/profil/index.jsx";

import FingerprintIcon from "./components/Fingerprint.jsx";

export function App() {
    const { isLoggedIn_AuthService, setToken_AuthService } = useAuth();
    const [menu, setMenu] = useState("home");
    const [darkMode, setDarkMode] = useState(false);

    const events = [
        { title: "Event 1", date: "2024-10-14" },
        { title: "Event 2", date: "2024-10-15" },
        { title: "Event 3", date: "2024-10-20" },
    ];

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return newMode;
        });
    };

    return (
        <div className="mx-16 dark:text-gray-200">
            <div className="flex w-full justify-end">
                <Button className="rounded-full w-16 h-16" active={menu === "profile"} onClick={() => setMenu(menu === "home" ? "profile" : "home")}>
                    <FingerprintIcon className=" w-full h-full fill-gray-200 dark:fill-gray-800 hover:fill-gray-800 dark:hover:fill-gray-200"></FingerprintIcon>
                </Button>
            </div>
            <div className="flex flex-col items-center mt-4">
                <div id="nav" className="flex flex-row">
                    <Button active={menu === "home"} onClick={() => setMenu("home")}>
                        Home
                    </Button>
                    <Button active={menu === "admin"} onClick={() => setMenu("admin")}>
                        Admin
                    </Button>{" "}
                    <Button active={menu == "profil" ? "true" : "false"} onClick={() => setMenu("profil")}>
                        Profil
                    </Button>
                    <Button active={menu == "develop" ? "true" : "false"} onClick={() => setMenu("develop")}></Button>
                    <Button active={menu === "develop"} onClick={() => setMenu("develop")}>
                        Develop
                    </Button>
                    {!isLoggedIn_AuthService && (
                        <>
                            <Button active={menu == "login" ? "true" : "false"} onClick={() => setMenu("login")}>
                                Login
                            </Button>
                            <Button active={menu == "register" ? "true" : "false"} onClick={() => setMenu("register")}>
                                Register
                            </Button>
                        </>
                    )}
                    {isLoggedIn_AuthService && (
                        <Button
                            onClick={() => {
                                setToken_AuthService("");
                                setMenu("home");
                            }}
                        >
                            Logoff
                        </Button>
                    )}
                    <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
                </div>

                <div id="main" className="w-full flex flex-col items-center">
                    {menu === "home" && <PageMain></PageMain>}
                    {menu === "finger" && <PageAdmin></PageAdmin>}
                    {menu === "develop" && <PageDevelop></PageDevelop>}
                    {menu === "login" && <Login setMenu={setMenu}></Login>}
                    {menu === "profil" && <ProfileModal setMenu={setMenu}></ProfileModal>}
                    {menu === "register" && <RegisterPage setMenu={setMenu}></RegisterPage>}
                </div>
            </div>
        </div>
    );
}

export default App;
