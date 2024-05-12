"use client";

import MYForm from "@/components/Forms/MYForm";
import MYInput from "@/components/Forms/MYInput";
import Link from "next/link";

const RegisterPage = () => {
  const handleRegister = async (values: any) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20 2xl:pt-24 px-4 md:px-0">
      <div className="w-[400px] h-auto space-y-2 rounded-md py-6 custom-shadow">
        <div className="text-center">
          <h2 className="heading_text mb-1">Register</h2>
          <p className="desc_text">Sign up to access</p>
        </div>

        {/* form start */}
        <MYForm
          onSubmit={handleRegister}
          defaultValues={{
            name: "",
            email: "",
            password: "",
          }}
        >
          <div className="m-8 space-y-2">
            <div>
              <label htmlFor="email" className="block mb-2 text-md">
                Your Name
              </label>
              <MYInput name="name" placeholder="Enter Your Name" />
            </div>
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
              value="Register"
            />
          </div>
        </MYForm>

        <p className="px-6 text-[15px] text-center text-gray-400 pt-6">
          Already have an account yet?{" "}
          <Link
            href="/login"
            className="hover:underline hover:text-primary text-text-gray"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
