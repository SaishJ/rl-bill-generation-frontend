import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { loginSchema } from "@/utils/validation/loginSchema";

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <div className="grid gap-2 relative">
      <Label htmlFor="email">{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && errors && (
        <p className="text-sm text-red-400 absolute -bottom-5">{errors}</p>
      )}
    </div>
  );
};

const Login = () => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => console.log("Login submit", values),
    });

  return (
    <div className="bg-neutral-100 h-dvh flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm gap-2">
        <CardHeader>
          <CardTitle className="text-xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-7">
              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                errors={errors.email}
              />
              <FormInput
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                errors={errors.password}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="mt-6">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full cursor-pointer"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
