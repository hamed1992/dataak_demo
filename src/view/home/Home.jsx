/** @format */

import React from "react";
import Popover from "../components/Popover";
const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function Home() {
  const handleOpen = () => {
    console.log("is Open");
  };
  const handleClose = () => {
    console.log("is Close");
  };
  return (
    <div className='w-full flex-ap m-30'>
      <Popover
        trigger='hover'
        content={content}
        title='top title'
        position='top'
        align='start'
        onOpen={handleOpen}
        onClose={handleClose}>
        <button className='secondary'>top pop</button>
      </Popover>
      <Popover
        trigger='hover'
        content={content}
        title='bottom title'
        align='start'
        position='bottom'
        onOpen={handleOpen}
        onClose={handleClose}>
        <button className='primary'>bottom pop</button>
      </Popover>
      <Popover
        trigger='click'
        content={content}
        title='right title'
        position='right'
        onOpen={handleOpen}
        onClose={handleClose}>
        <button className='success'>right pop</button>
      </Popover>
      <Popover
        trigger='click'
        content={content}
        title='left title'
        position='left'
        onOpen={handleOpen}
        onClose={handleClose}>
        <button className='default'>left pop</button>
      </Popover>
    </div>
  );
}

export default Home;
