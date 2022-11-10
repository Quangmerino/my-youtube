import React from "react";
import ButtonCustom from "../button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type Props = {
  title: string;
  avatar: string;
  name: string;
  follower: string;
};

function Channel({ title, avatar, name, follower }: Props) {
  return (
    <div className="channel">
      <h3 className="channel-videoTitle">{title}</h3>
      <div className="channel-header">
        <div className="channel-header__left">
          <div className="channel-info">
            <img className="channel-info__avatar" src={avatar} alt={name} />
            <div className="channel-info__base">
              <span className="channel-info__name">
                {name} <CheckCircleIcon fontSize="small" />
              </span>
              <span className="channel-info__follower">
                {follower} người đăng ký
              </span>
            </div>
          </div>
          <ButtonCustom
            name="Đăng ký"
            onClick={() => {}}
            className="channel-register__btn"
          />
        </div>
        <div className="channel-header__right">
          <div className="channel-right__preview">
            <ButtonCustom
              icon={<ThumbUpOffAltIcon/>}
              name="23N"
              className="channel-right__preview-buttonLike"
            />
            <ButtonCustom
              icon={<ThumbDownOffAltIcon/>}
            />
          </div>
          <ButtonCustom name="Chia sẻ" icon={<ReplyIcon/>} className="channel-right__share-btn"/>
          <ButtonCustom name="Tạo đoạn video" icon={<ContentCutIcon/>} className="channel-right__cut-btn"/>
          <ButtonCustom icon={<MoreHorizIcon/>} className="channel-right__more-btn"/>
        </div>
      </div>
    </div>
  );
}

export default Channel;
