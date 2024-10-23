"use client";

import React, { useEffect, useState } from "react";
import PhoneNumberInput from "../phone-number-input/Input";
import Input from "../input/Input";
import Checkbox from "../checkbox/Checkbox";
import Button from "../button/Button";
import { useModalStore } from "@/store/modal";
import Login from "../login-modal/Login";
import { registerStyles } from "./register.styles";
import { useRegisterMutation } from "@/queries/auth/auth.mutation";
import { useLoadingStore } from "@/store/loading";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";

const Register: React.FC = () => {
  const { setContent, setTitle, setBottom } = useModalStore();
  const { showLoading, hideLoading } = useLoadingStore();
  const registerMutation = useRegisterMutation();
  const [isChecked, setIsChecked] = useState(false);
  const [countryCode, setCountryCode] = useState<string | null>("+90");
  const { isPending } = registerMutation;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    setBottom(
      <div className={registerStyles.bottomText}>
        Getir&apos;e üyeysen
        <span
          onClick={() => {
            setContent(<Login />);
          }}
          className={registerStyles.actionLink}
        >
          Giriş yap
        </span>
      </div>
    );
    setTitle("Kayıt Ol");
  }, [setBottom, setContent, setTitle]);

  useEffect(() => {
    if (isPending) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isPending]);

  const handleRegister = async (values: FormikValues) => {
    const form = {
      email: values.email,
      phone: `${countryCode}${values.phone}`,
      fullName: values.fullName,
      password: values.password,
    };

    await registerMutation.mutateAsync(form);
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("Lütfen telefon numaranı gir.")
      .matches(/^[0-9]{10}$/, "Geçerli bir telefon numarası girin."),
    fullName: Yup.string()
      .required("Lütfen ad ve soyadını gir.")
      .min(2, "Ad soyad en az 2 karakter olmalıdır."),
    email: Yup.string()
      .required("Lütfen e-posta adresini gir.")
      .email("Geçerli bir e-posta adresi girin."),
    password: Yup.string()
      .required("Lütfen şifreni gir.")
      .min(6, "Şifre en az 6 karakter olmalıdır."),
  });

  return (
    <Formik
      initialValues={{ phone: "", fullName: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({ values, handleChange, handleBlur, errors, touched, submitForm }) => (
        <div className="flex flex-col gap-4">
          <PhoneNumberInput
            onChange={handleChange("phone")}
            onBlur={handleBlur("phone")}
            setCountryCode={(code) => setCountryCode(code as string)}
            value={values.phone}
            className="w-full"
            errorText={touched.phone && errors.phone ? errors.phone : ""}
          />
          <Input
            onChange={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            type="text"
            label="Ad soyad"
            value={values.fullName}
            errorText={
              touched.fullName && errors.fullName ? errors.fullName : ""
            }
          />
          <Input
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            type="email"
            label="E-Posta"
            value={values.email}
            errorText={touched.email && errors.email ? errors.email : ""}
          />
          <Input
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            type="password"
            label="Şifre"
            value={values.password}
            errorText={
              touched.password && errors.password ? errors.password : ""
            }
          />
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            description="Getir’in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum."
          />
          <small className="text-grayMid">
            Kişisel verilere dair Aydınlatma Metni için
            <span className={registerStyles.link}>tıkla</span>. Üye olmakla,
            <span className={registerStyles.link}>Kullanım koşulları</span>
            hükümlerini kabul etmektesin.
          </small>

          <Button
            text="Kayıt Ol"
            color="primary"
            onClick={submitForm}
            className="mt-8"
          />
        </div>
      )}
    </Formik>
  );
};

export default Register;
