import Button from "@mui/material/Button";
import logo from "../../assets/bostaLogo.jpeg";
import { Grid, Hidden } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";

const pages = [
  { title: "Home", navigateTo: "/" },
  { title: "Prices", navigateTo: "/" },
  { title: "Contact Sales", navigateTo: "" },
];

const lang = "ENG";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 400,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={2} md={2} sx={{ my: 2, ml: { md: 10 } }}>
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          style={{
            width: "120px",
            height: "44px",
          }}
        />
      </Grid>
      <Hidden mdDown>
        <Grid item md={5}>
          {pages.map((page) => (
            <Button
              key={page}
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
              {page.title}
            </Button>
          ))}
        </Grid>
      </Hidden>

      <Grid
        item
        xs={10}
        md={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          my: 2,
          justifyContent: "flex-end",
        }}
      >
        <Button
          style={{
            fontFamily: "Cairo",
            fontWeight: 500,
            color: "black",
          }}
          sx={{ fontSize: { xs: 14, md: 20 } }}
        >
          Track your Shipment
        </Button>
        <Button
          style={{
            fontFamily: "Cairo",
            fontWeight: 800,
            fontSize: "20px",
            color: "#e30613",
          }}
        >
          {lang}
        </Button>
      </Grid>
    </Grid>
  );
};
export default Navbar;
