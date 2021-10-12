export default function animateScroll({ targetPosition, initialPosition, duration }: any) {
  let start: any;
  let position: any;
  let animationFrame: any;

  // The easing function that makes the scroll decelerate over time
  const easeOutQuart = (x: number) => {
    return 1 - (1 - x) ** 4;
  };

  const { requestAnimationFrame, cancelAnimationFrame } = window;

  // maximum amount of pixels can scroll
  const maxAvailableScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  const step = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    // set number between 0 (start) and 1 (end)
    const relativeProgress = elapsed / duration;

    // ease out that number
    const easedProgress = easeOutQuart(relativeProgress);

    // calculate new position for every thick of the requestAnimationFrame
    position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

    // set the scrollbar position
    window.scrollTo(0, position);

    // Stop when max scroll is reached
    if (initialPosition !== maxAvailableScroll && window.scrollY === maxAvailableScroll) {
      cancelAnimationFrame(animationFrame);
      return;
    }

    // repeat until the end is reached
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  };

  animationFrame = requestAnimationFrame(step);
}
