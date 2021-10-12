import animateScroll from "./animate";

const getElementPosition = (element: any) => { return element.offsetTop; };

export default function scrollTo({ id, ref = null, duration = 3000 }: any) {
  // initial scroll bar posisiton
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  let element = null;

  if (ref) {
    element = ref.current;
  } else if (id) {
    element = document.getElementById(id);
  }

  if (!element) {
    // log error if the reference passed is invalid
    console.error("Invalid element, are you sure you've provided element id or react ref?");

    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration,
  });
}
