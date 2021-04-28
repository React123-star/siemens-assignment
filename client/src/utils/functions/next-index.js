export const nextIndex = (startIndex, click, maxCount) => {
  let newIndex = 0;
  if (click === 'left') {
    if (startIndex > 0) {
      newIndex = startIndex - 1;
    }
  } else if (click === 'right') {
    if (startIndex < maxCount) {
      newIndex = startIndex + 1;
    } else {
      newIndex = startIndex;
    }
  }
  return newIndex;
};
