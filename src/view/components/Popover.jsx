/** @format */

import React from "react";
import useComponentVisible from "../../hooks/useComponentVisible";

function Popover({
  trigger = "click",
  content,
  position = "top",
  align = "center",
  onClose,
  onOpen,
  title,
  children,
}) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  const handleShowPop = () => {
    setIsComponentVisible((prev) => !prev);
    isComponentVisible ? onClose() : onOpen()
  };
  return (
    <div className='popover-wrapper' ref={ref}>
      <div onClick={handleShowPop} className="pop-child">{children}</div>

      {trigger === "click" ? (
        isComponentVisible && (
          <div className={`popover-body ${position} ${align}`}>
            <h3 className='title'>{title}</h3>
            <p>{content}</p>
          </div>
        )
      ) : (
        <div className={`popover-body hover ${position} ${align}`}>
          <h3 className='title'>{title}</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Popover;
