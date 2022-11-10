import React from "react";
import VideoComponent from "../../components/video";
import Channel from "../../components/channel";
import { videos } from "../../data";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className="home">
      <div className="home-content">
        <iframe
          src="https://www.youtube.com/embed/qF7DBgMGUCk"
          title="[1 Hour] Nhạc Tiktok Buồn Không Lời Hay Nhất | The Best Sad Tiktok Song | Nhạc Thư Giãn Gây Nghiện"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Channel 
          title='Nhạc Chill Tiktok - Tổng Hợp Những Bài Hát Tiktok "Nghe Là Nghiện" - Nhạc Lofi Chill Buồn 2022'
          avatar="./images/buichill.png"
          name="Bụi Chill"
          follower="1Tr"
        />
      </div>
      <div className="home-right">
        <VideoComponent data={videos} />
      </div>
    </div>
  );
}

export default HomePage;
