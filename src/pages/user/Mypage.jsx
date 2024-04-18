import ButtonBack from '@components/ButtonBack';
import styles from './mypage.module.css';
import Button4 from '@components/Button4';

function Mypage() {
  return (
    <div className={styles.mypage}>
      <ButtonBack path={'/main'} />
      <div className={styles.mypageHead}>
        <svg
          className={styles.mainLogo}
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.625 22.6069C5.625 23.3297 6.26344 23.9062 7.03125 23.9062C7.79906 23.9062 8.42344 23.317 8.4375 22.6069V19.5806C8.4375 18.8578 7.79906 18.2812 7.03125 18.2812C6.24797 18.2812 5.625 18.8705 5.625 19.5806V22.6069ZM19.6875 19.6875C19.6875 19.3145 19.8357 18.9569 20.0994 18.6931C20.3631 18.4294 20.7208 18.2812 21.0938 18.2812C21.4667 18.2812 21.8244 18.4294 22.0881 18.6931C22.3518 18.9569 22.5 19.3145 22.5 19.6875V22.5C22.5 22.873 22.3518 23.2306 22.0881 23.4944C21.8244 23.7581 21.4667 23.9062 21.0938 23.9062C20.7208 23.9062 20.3631 23.7581 20.0994 23.4944C19.8357 23.2306 19.6875 22.873 19.6875 22.5V19.6875Z"
            fill="#7E96E8"
          />
          <path
            d="M11.7422 3.29073C11.792 3.11876 11.8752 2.9583 11.987 2.8185C12.0989 2.6787 12.2372 2.56232 12.394 2.47599C12.5509 2.38967 12.7232 2.3351 12.9011 2.3154C13.0791 2.2957 13.2592 2.31127 13.4311 2.3612C14.76 2.74651 15.7823 3.3751 16.4292 4.23995C16.7325 4.638 16.9491 5.09514 17.0651 5.58194C17.1811 6.06875 17.194 6.57445 17.1028 7.06651C16.7878 8.79057 15.2227 10.3501 13.3158 10.3501C12.0277 10.3501 10.9069 9.84104 10.1236 9.48526C9.95062 9.40791 9.79453 9.3362 9.65672 9.27995C8.85797 8.9537 8.15484 8.78776 7.04531 9.2237C6.06797 9.6062 5.62219 10.5849 5.74172 12.2556C5.78672 12.8715 5.90766 13.4931 6.06516 14.0696C6.15094 14.0654 6.23953 14.0626 6.32813 14.0626H7.30828C7.86384 14.0625 8.40699 14.2269 8.86922 14.5351L10.2698 15.4689H13.7292C13.9905 15.469 14.2467 15.3963 14.469 15.2589C14.6914 15.1216 14.871 14.925 14.9878 14.6912L18.3558 7.95666C18.7062 7.25606 19.2448 6.66686 19.9111 6.25506C20.5775 5.84326 21.3454 5.62513 22.1287 5.6251H24.6094C25.2623 5.6251 25.9023 5.80691 26.4576 6.15016C27.013 6.4934 27.4619 6.98453 27.7538 7.56849C28.0458 8.15246 28.1694 8.80619 28.1108 9.45645C28.0522 10.1067 27.8136 10.7278 27.4219 11.2501H28.6102L30.1641 7.50948C30.9937 5.5126 32.8823 4.21885 34.958 4.21885H41.5448C41.8402 4.21885 42.0539 4.54229 41.933 4.82354L41.6123 5.6251C40.943 7.32666 39.3623 8.4376 37.6087 8.4376H34.9566C34.7685 8.44228 34.5857 8.50028 34.4293 8.60485C34.273 8.70941 34.1496 8.85624 34.0734 9.02823L33.1172 11.2501H38.2781C38.7055 11.2502 39.1272 11.3476 39.5113 11.5351C39.8953 11.7225 40.2316 11.995 40.4946 12.3319C40.7576 12.6687 40.9404 13.0611 41.029 13.4792C41.1177 13.8973 41.1099 14.33 41.0062 14.7446L40.8347 15.4267C40.6969 15.9793 40.4803 16.4954 40.1977 16.9623H41.7262C42.5419 16.9623 42.9567 17.7301 42.9567 18.5457V20.3907C42.9567 23.6378 40.4719 26.304 36.7692 26.6753H41.2411C42.2677 26.6753 43.1114 27.2518 43.1114 28.2784V33.414C43.1114 38.6945 40.1006 42.0765 36.8255 42.0765H33.7134C33.4761 42.534 33.1177 42.9174 32.6772 43.185C32.2368 43.4526 31.7313 43.594 31.2159 43.5939H12.0656C11.5376 43.594 11.0268 43.4062 10.6246 43.0641C10.2223 42.722 9.95502 42.2479 9.87044 41.7267C9.78585 41.2055 9.88953 40.6712 10.1629 40.2195C10.4363 39.7677 10.8615 39.428 11.3625 39.2612L16.0284 37.7059C16.6299 37.5057 17.1786 37.1725 17.6336 36.7311C18.0886 36.2897 18.4383 35.7515 18.6567 35.1564H10.0406C8.88308 35.1562 7.74347 34.8703 6.72296 34.324C5.70245 33.7777 4.8326 32.9878 4.19063 32.0246L2.58609 29.6199C1.81606 28.4642 1.40552 27.1064 1.40625 25.7176V18.9845C1.40625 17.3251 2.2275 15.8584 3.48469 14.9668C3.24526 14.1462 3.0907 13.3032 3.02344 12.451C2.87578 10.4007 3.35672 7.74151 6.04969 6.68541C8.01844 5.91338 9.47953 6.26354 10.6861 6.75573C10.9997 6.8851 11.2669 7.00323 11.5059 7.1087C12.2133 7.42229 12.6675 7.62479 13.3158 7.62479C13.7334 7.62479 14.31 7.18463 14.4211 6.57854C14.4452 6.45559 14.4422 6.32887 14.4123 6.20719C14.3825 6.08552 14.3264 5.97182 14.2481 5.87401C14.0555 5.61666 13.6181 5.25245 12.6731 4.97823C12.3261 4.87763 12.0333 4.64336 11.859 4.32692C11.6847 4.01047 11.6418 3.63777 11.7422 3.29073ZM22.1302 8.4376C21.8691 8.43774 21.6132 8.51056 21.3911 8.64791C21.1691 8.78526 20.9897 8.98171 20.873 9.21526L17.4277 16.1031H17.4192L17.0395 16.8062C16.7982 17.2526 16.4406 17.6254 16.0047 17.8851C15.5687 18.1448 15.0706 18.2817 14.5631 18.2814H10.2698C9.71428 18.2815 9.17113 18.1171 8.70891 17.8089L7.30828 16.8751H6.32813C5.76868 16.8751 5.23216 17.0973 4.83657 17.4929C4.44099 17.8885 4.21875 18.425 4.21875 18.9845V25.719C4.21899 26.0559 4.2596 26.3916 4.33969 26.7189H18.2812L16.7048 28.2953C16.313 28.6872 15.8478 28.9981 15.3358 29.2102C14.8238 29.4223 14.275 29.5314 13.7208 29.5314H5.90906L6.53203 30.4651C6.91712 31.0428 7.43882 31.5165 8.05086 31.8442C8.6629 32.172 9.34636 32.3436 10.0406 32.3439H19.5595C19.6833 32.3439 19.8056 32.3551 19.9223 32.3748L19.9716 32.3439H22.9162C23.6925 32.4029 25.0467 33.0104 24.2564 34.9609C23.4169 37.0309 21.8095 39.6789 20.7408 40.7814H31.2145L32.2748 36.0071C32.3198 35.806 32.3423 35.6021 32.3423 35.3968V21.5593C32.3424 21.0496 32.2038 20.5494 31.9416 20.1123L31.6617 19.6468C31.3251 19.0857 30.8035 18.6596 30.1866 18.4417C29.8252 18.3151 29.5298 18.0029 29.5298 17.6204C29.5298 17.4227 29.6084 17.2332 29.7481 17.0934C29.8879 16.9536 30.0775 16.8751 30.2752 16.8751H35.377C36.0042 16.875 36.6134 16.6653 37.1077 16.2793C37.602 15.8932 37.9531 15.3531 38.1052 14.7446L38.2753 14.0626H21.4959C21.436 14.0625 21.3772 14.0471 21.3249 14.0178C21.2727 13.9885 21.2287 13.9464 21.1973 13.8954C21.1659 13.8444 21.148 13.7863 21.1454 13.7264C21.1428 13.6666 21.1555 13.6071 21.1823 13.5535L22.4803 10.9576C22.6477 10.6228 22.9051 10.3413 23.2235 10.1446C23.5419 9.94791 23.9088 9.84376 24.2831 9.84385H24.6094C24.7959 9.84385 24.9747 9.76977 25.1066 9.63791C25.2384 9.50605 25.3125 9.32721 25.3125 9.14073C25.3125 8.95425 25.2384 8.7754 25.1066 8.64354C24.9747 8.51168 24.7959 8.4376 24.6094 8.4376H22.1287H22.1302Z"
            fill="#619AE0"
          />
        </svg>
        <div>
          <h2 className={styles.mypageHeadTitle}>마이페이지</h2>
        </div>
      </div>
      <hr className={styles.mypageHeadHr} />
      <div className={styles.mypageBody}>
        <div>
          <img
            className={styles.profileCover}
            src="././publish/profile01.png"
            alt="profile01"
          />
        </div>
        <form className={styles.mypageBodyInput} action="">
          <h3 className={styles.mypageBodyStitle}>닉네임</h3>
          <input type="text" placeholder="doglike" />
        </form>
        <form className={styles.mypageBodyInput} action="">
          <h3 className={styles.mypageBodyStitle}>아이디</h3>
          <input type="text" placeholder="doglike@naver.com" />
        </form>
        <form className={styles.mypageBodyInput} action="">
          <h3 className={styles.mypageBodyStitle}>비밀번호</h3>
          <input type="password" placeholder="••••••••" />
        </form>
      </div>
      <div>
        <h3 className={styles.mypageBodyStitle}>
          선호하는 음악장르를 선택해주세요.
        </h3>
        <h5 className={styles.mypageBodyHash}>#장르</h5>
      </div>
      <div className={styles.confirmButton}>
        <Button4 />
        {/* FIXME - 버튼 컴포넌트 통일해서 변경예정  */}
      </div>
    </div>
  );
}

export default Mypage;
