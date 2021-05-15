import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SideNav from "../general-component/SideNav";
import BackgroundHeader from "../general-component/BackgroundHeader";
import PhotoCard from "../general-component/PhotoCard";
import PortfolioAccordianView from "../general-component/PortfolioAccordianView";

const useStyle = makeStyles((theme) => ({
  main: {
    background: "black",
    height: "100%",
  },
  navPositionStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  photoStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Portfolio(props) {
  const styles = useStyle();
  const galleryInfo = [
    {
      logos:
        "https://i.pinimg.com/originals/e8/c7/c4/e8c7c4d4e14a9e3b21faf3d7b37c5b03.jpg",
      title: "PHOTOSHOP",
      period: "1 Month",
      author: "Vikrant Singh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      photos: [
        "https://cdn1.vectorstock.com/i/1000x1000/38/00/looking-at-beautiful-scenery-vector-18883800.jpg",
        "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
        "https://i.ytimg.com/vi/-Y7CfKgOyCc/maxresdefault.jpg",
        "https://c8.alamy.com/comp/WT0DE5/surreal-nature-scenery-with-pink-trees-WT0DE5.jpg",
        "https://wallpaperaccess.com/full/2559942.jpg",
      ],
    },
    {
      logos: "https://cdn.logo.com/hotlink-ok/logo-social.png",
      title: "PHOTOSHOP",
      period: "1 Month",
      author: "Vikrant Singh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      photos: [
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w600X390/Take_in_the_Scenery.jpg",
        "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
        "https://i.ytimg.com/vi/-Y7CfKgOyCc/maxresdefault.jpg",
        "https://c8.alamy.com/comp/WT0DE5/surreal-nature-scenery-with-pink-trees-WT0DE5.jpg",
        "https://wallpaperaccess.com/full/2559942.jpg",
      ],
    },
    {
      logos: "https://cdn.logo.com/hotlink-ok/logo-social.png",
      title: "PHOTOSHOP",
      period: "1 Month",
      author: "Vikrant Singh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      photos: [
        "https://i.ytimg.com/vi/HTIb17yw-30/maxresdefault.jpg",
        "https://www.knkx.org/sites/kplu/files/styles/x_large/public/201612/Gfp-southern-wisconsin-further-roadway-scenery-at-sunset.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81HgVEqBVuL._AC_SL1500_.jpg",
        "https://image.freepik.com/free-vector/bridge-with-full-moon-scenery-landscape_105940-72.jpg",
      ],
    },
    {
      logos: "https://cdn.logo.com/hotlink-ok/logo-social.png",
      title: "PHOTOSHOP",
      period: "1 Month",
      author: "Vikrant Singh",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      photos: [
        "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/wyoming-scenery-wallpaper-2.jpg",
        "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
        "https://i.ytimg.com/vi/-Y7CfKgOyCc/maxresdefault.jpg",
        "https://c8.alamy.com/comp/WT0DE5/surreal-nature-scenery-with-pink-trees-WT0DE5.jpg",
        "https://wallpaperaccess.com/full/2559942.jpg",
      ],
    },
  ];

  useEffect(() => {
    document.title = "Vikrant Singh";
  }, []);

  return (
    <Grid container className={styles.main}>
      <Grid item xs={11} md={11} lg={11} xl={11}>
        <Grid container>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <BackgroundHeader
              background="WORKS"
              whitetitle="MY"
              yellowtitle="PORTFOLIO"
            />
          </Grid>

          <Grid item xs={1} md={1} lg={1} xl={1}></Grid>
          <Grid item xs={11} md={11} lg={11} xl={11}>
            <Grid container>
              {galleryInfo.map((info, key) => (
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <PortfolioAccordianView
                    logo={info.photos[0]}
                    title={info.title}
                    period={info.period}
                    author={info.author}
                    description={info.description}
                    photos={info.photos}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={1}
        md={1}
        lg={1}
        xl={1}
        className={styles.navPositionStyle}
      >
        <SideNav prop={props} />
      </Grid>
    </Grid>
  );
}
