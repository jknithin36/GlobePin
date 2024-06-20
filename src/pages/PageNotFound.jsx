const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.paragraph}>Page Not Found</p>
      </div>
      <div style={styles.animation}>
        <p style={styles.animationText}>Oops! It looks like you are lost.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "#61dafb",
    fontFamily: "Arial, sans-serif",
  },
  textContainer: {
    textAlign: "center",
    animation: "fadeIn 2s ease-in-out",
  },
  heading: {
    fontSize: "8rem",
    margin: "0",
    animation: "bounce 1.5s infinite",
  },
  paragraph: {
    fontSize: "2rem",
    margin: "0",
  },
  animation: {
    marginTop: "2rem",
    animation: "fadeInUp 2s ease-in-out",
  },
  animationText: {
    fontSize: "1.5rem",
    margin: "0",
  },
};

export default PageNotFound;
