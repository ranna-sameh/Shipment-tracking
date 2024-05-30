import Button from "@mui/material/Button";
import logo from "../../assets/bostaLogo.jpeg";
import arabicLogo from "../../assets/bostaArabicLogo.png";
import { Grid, Hidden } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const pages = [
  { title: "Home", navigateTo: "/" },
  { title: "Prices", navigateTo: "/" },
  { title: "Contact Sales", navigateTo: "" },
  { title: "Track your shipment", navigateTo: "" },
];

const Navbar = () => {
  const [lang, setLang] = useState(localStorage.getItem("language") || "en");
  const isArabic = lang === "ar";
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    setLang(language);
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", language);

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
    window.location.reload();
  };

  return (
    <Grid
      container
      direction={isArabic ? "row-reverse" : "row"}
    >
      <Grid item xs={8} md={2} sx={{ my: 2, ml: { md: 10 } }}>
        <img
          onClick={() => navigate("/")}
          src={isArabic ? arabicLogo : logo}
          alt="logo"
          style={{
            width: "120px",
            height: "44px",
          }}
        />
      </Grid>
      <Hidden mdDown>
        <Grid item md={7}>
          {pages.map((page) => (
            <Button
              key={page.title}
              onClick={() => navigate(page.navigateTo)}
              sx={{ my: 2 }}
              style={{
                fontFamily: "Cairo",
                fontWeight: 500,
                fontSize: "20px",
                color: "black",
                marginRight: "69px",
              }}
            >
              {t(page.title)}
            </Button>
          ))}
        </Grid>
      </Hidden>

      <Button
        style={{
          fontFamily: "Cairo",
          fontWeight: 800,
          fontSize: "20px",
          color: "#e30613",
        }}
        onClick={() => changeLanguage(isArabic ? "en" : "ar")}
      >
        {isArabic ? "ENG" : "AR"}
      </Button>
    </Grid>
  );
};

export default Navbar;
