import "./Login.scss";
import Logo from "../../assets/images/Mahalla.png";
import { FormControl, Paper, TextField } from "@mui/material";
import Typeography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import { SubmitterButtons } from "../../Styled_Components/styledButtons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../Context";
import { useNavigate } from "react-router";
export const Login = () => {
  const date = new Date();
  const { setToken, setUser } = useContext(Context);
  const navigator = useNavigate();
  const mutation = useMutation((data) => {
    return axios.post("http://localhost:8989/login", data).then((response) => {
      if (response.data) {
        (function (data) {
          if (data) {
            if (data?.accessToken) {
              setToken(data?.accessToken);
              setUser(data?.user);
              navigator("/");
            }
          }
        })(response.data);
      }
    });
  });
  const validationSchema = Yup.object({
    email: Yup.string().email("Email yozilish xato").required("Email majburiy"),
    password: Yup.string()
      .min(3, "Min 3")
      .max(12, "Max 12")
      .required("Parol majburiy"),
  });
  const {
    register,
    watch,
    formState,
    formState: { errors, isValid},
    handleSubmit,
  } = useForm({
    values: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const handleSub = (event) => {
    mutation.mutate({
      ...event,
      date: `${date.toLocaleDateString()}-${date.getHours()}:${date.getMinutes()}Register-At in user`,
    });
  };
  watch();
  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "75%",
          margin: "0 auto",
          textAlign: "center",
          padding: "1rem",
          boxShadow: "0px 0px 9px",
          borderRadius: "10px"
        }}
      >
        <Box className="parent_logo">
          <img
            src={Logo}
            className="logo"
            alt="Logo"
            style={{ filter: "invert(1)" }}
          />
        </Box>
        <form autoComplete="off" className="form" onSubmit={handleSubmit(handleSub)}>
          <Stack spacing={2} sx={{width: "75%", margin: "0 auto"}}>
            <TextField className="input"
              error={errors?.email ? true : false}
              variant="outlined"
              label="Email"
              {...register("email")}
            />
            {errors?.email ? (
              <Typeography sx={{ color: "crimson" }}>
                {errors?.email?.message}
              </Typeography>
            ) : (
              false
            )}
            <TextField className="input"
              type="password"
              error={errors?.password ? true : false}
              variant={"outlined"}
              label="Password"
              {...register("password")}
            />
            {errors?.password ? (
              <Typeography sx={{ color: "crimson" }}>
                {errors.password?.message}
              </Typeography>
            ) : (
              false
            )}
            <Box>
              <SubmitterButtons disabled={!isValid} variant="blue">Submit</SubmitterButtons>
            </Box>
          </Stack>
        </form>
      </Paper>
    </div>
  );
};
