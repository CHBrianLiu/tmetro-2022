const Membership = () => {
  const shareButtonClickHandler = async () => {
    const data = {
      title: "web.dev",
      text: "Check out web.dev.",
      url: "https://web.dev/",
    };
    try {
      await navigator.share(data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <h1>會員中心</h1>
      <button onClick={shareButtonClickHandler}>Share</button>
    </>
  );
};

export default Membership;
