import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="modaCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        پرداخت
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">نوع پرداخت خود را انتخاب کنید</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab">
                  <li>
                    <a href="#">
                      <img src="https://i.imgur.com/sB4jftM.png" width="80" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
