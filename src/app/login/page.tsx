"use client";

import MYForm from "@/components/Forms/MYForm";
import MYInput from "@/components/Forms/MYInput";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const handleLogin = async (values: any) => {
    console.log(values);
    try {
      const res = await login(values).unwrap();
      console.log("res", res);
      const user = verifyToken(res.token);

      dispatch(setUser({ user, token: res.token }));

      router.push("/");
    } catch (error) {
      console.log("error from catch", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20 2xl:pt-24 px-4 md:px-0">
      <div className="w-[400px] h-auto space-y-2 rounded-md py-6 custom-shadow">
        <div className="text-center">
          <h2 className="heading_text mb-1">Login</h2>
          <p className="desc_text">Sign in to access your account</p>
        </div>

        {/* form start */}
        <MYForm
          onSubmit={handleLogin}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <div className="m-8 space-y-2">
            <div>
              <label htmlFor="email" className="block mb-2 text-md">
                Email address
              </label>
              <MYInput
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-md">
                Password
              </label>
              <MYInput name="password" type="password" placeholder="****" />
            </div>
          </div>

          <div className="mx-8">
            <input
              className="bg-text w-full rounded-md py-3 text-white cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </MYForm>

        <p className="px-6 text-[15px] text-center text-gray-400 pt-6">
          Do not have an account yet?{" "}
          <Link
            href="/register"
            className="hover:underline hover:text-primary text-text-gray"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
