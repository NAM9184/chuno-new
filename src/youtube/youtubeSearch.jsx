// 수정 사항1 리스트에서 삭제 버튼 만들고 적용
// 수정 사항2 제목에 같이 나오던 특수문자 매치
// 수정 사항3 key값 추가

import { useState } from 'react';
import useCustomAxios from '../hook/useCustomAxios.mjs';
import styles from './youtube.module.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API;

const changechar = /[^\w\s]/gi; // 특수 문자를 제거하는 정규식

function YoutubeSearch() {
  const axiosInstance = useCustomAxios();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const searchYoutube = async () => {
    try {
      const response = await axiosInstance.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchTerm}&maxResults=5&type=video`,
      );
      setSearchResult(response.data.items);
    } catch (error) {
      console.error('Error searching YouTube:', error);
    }
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    searchYoutube();
  };

  const handleAddButtonClick = (videoId, videoTitle) => {
    const newVideo = { id: videoId, title: videoTitle };
    setSelectedVideos([...selectedVideos, newVideo]);
  };

  const handleVideoItemClick = videoId => {
    setSelectedVideoId(videoId);
  };

  const handleDeleteButtonClick = videoId => {
    setSelectedVideos(selectedVideos.filter(video => video.id !== videoId)); // 리스트에서 삭제하는 함수
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Search</button>

      <ul className={styles.wrap_player}>
        {searchResult.map(item => (
          <li key={item.id.videoId}>
            <div>{item.snippet.title.replace(changechar, '')}</div>{' '}
            {/*// 특수문자 매치 */}
            <iframe
              width="100"
              height="80"
              src={`https://youtube.com/embed/${item.id.videoId}`}
            ></iframe>
            <h2 className={styles.listname}>{item.snippet.title}</h2>
            <button
              className={styles.playadd}
              onClick={() =>
                handleAddButtonClick(item.id.videoId, item.snippet.title)
              }
            >
              +
            </button>
          </li>
        ))}
      </ul>

      <ul className={styles.playlistadded}>
        {selectedVideos.map(video => (
          <li key={video.id} onClick={() => handleVideoItemClick(video.id)}>
            {video.title}
          </li>
        ))}
      </ul>

      {selectedVideoId && (
        <div>
          <iframe
            width="430"
            height="315"
            src={`https://youtube.com/embed/${selectedVideoId}`}
          ></iframe>
        </div>
      )}
      <ul>
        {selectedVideos.map(video => (
          <li key={video.id} onClick={() => handleVideoItemClick(video.id)}>
            {video.title.replace(changechar, '')} {/*// 특수문자 매치 */}
            <button onClick={() => handleDeleteButtonClick(video.id)}>
              -
            </button>{' '}
            {/*// 리스트에서 삭제하는 버튼 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YoutubeSearch;
