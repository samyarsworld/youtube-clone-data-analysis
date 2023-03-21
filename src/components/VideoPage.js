import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideoCard from "./VideoCard";

// import { Videos, Loader } from "./";
import { fetchAPI } from "../utils/fetchAPI";


function VideoPage() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  // if(!videoDetail?.snippet) return <Loader />;
  // if(!videos?.length) return <Loader />;

  const title = videoDetail.snippet.title;
  const channelId = videoDetail.snippet.channelId;
  const channelTitle = videoDetail.snippet.channelTitle;
  const views = videoDetail.statistics.viewCount;
  const likes = videoDetail.statistics.likeCount;

  return (
    
      <div className="videoPage">

        <div flex={1} style={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <h5><b>{title}</b></h5>
          <div>
            <Link to={`/channel/${channelId}`}>
              <h6>{channelTitle} <CheckCircleIcon sx={{ fontSize: "12h6x"}} /></h6>
            </Link>
            <div>
              <p>{parseInt(views).toLocaleString()} views</p>
              <p>{parseInt(likes).toLocaleString()} likes</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            {videos.map((video, idx) => (
              <div key={idx}>
                {video.id.videoId && <VideoCard video={video} /> }
              </div>
            ))}
          </div>
        </div>

      </div>
  );
}

export default VideoPage;
