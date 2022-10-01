import React from "react";
import "./Notification.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
function Notification() {
  const notify = () => {
    console.log("Basic notification");
    toast("Basic notification!", { position: toast.POSITION.TOP_LEFT });
    toast("Basic notification!", { position: toast.POSITION.TOP_CENTER });
    toast("Basic notification!", { position: toast.POSITION.TOP_RIGHT });
    toast("Basic notification!", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Basic notification!", { position: toast.POSITION.BOTTOM_LEFT });
    toast("Basic notification!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  return (
    <>
      <div className="toast">
        {/* <div className='toaste'>Hello World</div>
          <div className='toaste'>Toast Number 2</div> */}
      </div>
      <button className="btn" onClick={notify}>
        Show Notification
      </button>
      <ToastContainer />
    </>
  );
}

export default Notification;
