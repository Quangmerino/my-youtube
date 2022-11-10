import Link from "next/link";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
  data: any[];
};

function VideoComponent({ data }: Props) {
  return (
    <div className="video">
      {data?.map((item, index) => {
        return (
          <div className="video-item">
            <Link key={index} href={item.link}>
              <img
                className="video-thumnail"
                src={item.image}
                alt={item.title}
              />
              <div className="video-info">
                <span className="video-info__title">{item.title}</span>
                <span className="video-info__nameChanel">
                  {item.chanel} 
                  <CheckCircleIcon fontSize="small"/>
                </span>
                <div className="video-info__analytic">
                  <span>{item.view} lượt xem</span>
                  <span className="">.</span>
                  <span>{item.time} trước</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default VideoComponent;
