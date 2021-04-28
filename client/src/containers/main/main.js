import React, { useEffect, useState } from "react";
import { MainLarge } from "../../components/main-large/main-large";
import { Thumbnails } from "../../components/thumbnails/thumbnails";

import useRequest from "../../utils/hooks/use-request";
import { nextIndex } from "../../utils/functions/next-index";

const MAX_THUMB = 4;

function Main() {
  const inputTemplateRequest = {
    method: "get",
    url: "templates",
    params: null
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [resultTemplate] = useRequest(inputTemplateRequest);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(0);
  }, [selectedIndex]);

  const rotate = () => {
    let newRotation = rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setRotation(newRotation);
  };
  const rotateleft = () => {
    let newRotation = rotation - 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setRotation(newRotation);
  };
  let maxCount = parseInt(resultTemplate.length / MAX_THUMB);
  if (resultTemplate.length % MAX_THUMB === 0) {
    maxCount--;
  }

  if (!resultTemplate || resultTemplate.length === 0) {
    return <div>Loading...</div>;
  }

  const onChangeSelected = newIndex => {
    setSelectedIndex(newIndex);
  };

  const onChangeStart = click => {
    const newIndex = nextIndex(startIndex, click, maxCount);
    setStartIndex(newIndex);
    setSelectedIndex(0);
  };

  const showThumbnails = [];
  for (
    let i = startIndex * MAX_THUMB;
    i < startIndex * MAX_THUMB + MAX_THUMB && i < resultTemplate.length;
    i++
  ) {
    showThumbnails.push(resultTemplate[i]);
  }

  return (
    <div id="main" role="main">
      <MainLarge
        selectedTemplate={showThumbnails[selectedIndex]}
        rotation={rotation}
      />
      <div className="rotate-icons">
        <img
          alt=""
          src={"/anticlockwise-line.png"}
          onClick={() => rotateleft()}
        />
        <img alt="" src={"/clockwise-line.png"} onClick={() => rotate()} />
      </div>

      <Thumbnails
        showThumbnails={showThumbnails}
        onChangeSelected={onChangeSelected}
        onChangeStart={onChangeStart}
        selectedIndex={selectedIndex}
        leftDisable={startIndex > 0}
        rightDisable={startIndex < maxCount}
      />
    </div>
  );
}

export default Main;
