"use client";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import './page.css';
const containerClassNames = `
bg-[#f0f2f5]
flex
min-h-screen
items-center
justify-center p-24
`;
const inputStyle = `
rounded-[6px]
py-[14px]
px-[16px]
w-[330px]
border-[1px]
border-[#dddfe2]
focus-visible:border-[#0866ff]
focus-visible:caret-[#0866ff]
focus-visible:outline-none
`;
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (email === "abinash@gmail.com" && password === "secret" || email === "Mark@gmail.com" && password === "facebook") {
      localStorage.setItem("token", "my_secret_token");
      router.replace("/");
    }
  };
  return (
    <main className={containerClassNames}>
      <div
        className={`
        pb-[24px]
        pt-[10px]
        text-center
        bg-white
        shadow-md
        mt-[40px]
        w-[396px]
        rounded-[8px]
        `}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <div className={`
            py-[6px]
            w-[364px]
            text-[17px]
            m-auto
            `}>
              <input
              className={inputStyle}
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address or phone number"
                required
              />
              </div>
              <div className={`
               py-[6px]
               w-[364px]
               text-[17px]
               m-auto
              `}>
              <input
              className={inputStyle}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={`
            pt-[6px]
            `}>
                <button type="submit" className={`
                bg-[#0866ff]
                rounded-[6px]
                text-[20px]
                py-[16px]
                w-[332px]
                text-white
                transition
                duration-300
                ease-in-out
               hover:bg-blue-700
                hover:shadow-lg
                `}>Log in</button>
            </div>
          </div>
          <div className="bottom-part"></div>
          <div className={`
          pt-[6px]
          `
          }>
            <button className="new-user">Create New One</button>
          </div>
          
        </form>
      </div>
    </main>
  );
}
