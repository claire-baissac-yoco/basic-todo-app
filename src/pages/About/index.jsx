import styles from "./About.module.css";
function About() {
  return (
    <div>
      <h2 className={styles.heading}>About</h2>
      <div className={styles.pageBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum
        lobortis lacus sit amet scelerisque. Curabitur non ex a sapien dignissim
        rhoncus. Nulla facilisi. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Phasellus maximus vel arcu
        vitae vulputate. Nulla urna eros, auctor tempus euismod et, malesuada
        sit amet metus. Sed imperdiet quis leo ac posuere. Donec congue dapibus
        mauris, eget auctor ex euismod in. Phasellus nec nisi nec sem iaculis
        rhoncus sit amet ut nisi. Mauris a elit quis dui rutrum finibus quis eu
        elit. Mauris sed imperdiet nunc. Cras venenatis purus felis, sit amet
        malesuada enim sagittis pulvinar. Cras eleifend volutpat diam, at
        molestie sem varius id. Pellentesque molestie euismod leo a feugiat.
        Cras at nibh justo. Phasellus pretium, urna sit amet lobortis bibendum,
        est nibh imperdiet ligula, nec eleifend tellus ex a erat.
      </div>
    </div>
  );
}

export default About;
