const SELECTOR = '[data-north-star-navigation]';
const VISIBLE_CLASS = 'is-visible';
const DEFAULT_REVEAL_AT = 0.4;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

type NavigationElement = HTMLButtonElement & {
  dataset: DOMStringMap & { revealAt?: string };
};

let activeController: AbortController | undefined;
let pendingFrames = new Set<number>();

const destroyNorthStarNavigation = (): void => {
  activeController?.abort();
  activeController = undefined;
  pendingFrames.forEach((frameId) => window.cancelAnimationFrame(frameId));
  pendingFrames.clear();
};

const initialiseNorthStarNavigation = (): void => {
  destroyNorthStarNavigation();
  activeController = new AbortController();
  const { signal } = activeController;

  document.querySelectorAll<NavigationElement>(SELECTOR).forEach((button) => {
    const progress = button.querySelector<SVGCircleElement>('.north-star-navigation__value');
    const configuredThreshold = Number.parseFloat(button.dataset.revealAt ?? '');
    const revealAt = Number.isFinite(configuredThreshold) ? configuredThreshold : DEFAULT_REVEAL_AT;
    let frameId = 0;

    const update = (): void => {
      pendingFrames.delete(frameId);
      frameId = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollableHeight > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
        : 0;
      const percentage = Math.round(ratio * 100);

      button.classList.toggle(VISIBLE_CLASS, scrollableHeight > 0 && ratio >= revealAt);
      if (progress) progress.style.strokeDashoffset = String(100 - percentage);
    };

    const scheduleUpdate = (): void => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(update);
      pendingFrames.add(frameId);
    };

    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia(REDUCED_MOTION_QUERY).matches ? 'auto' : 'smooth'
      });
    }, { signal });
    window.addEventListener('scroll', scheduleUpdate, { passive: true, signal });
    window.addEventListener('resize', scheduleUpdate, { passive: true, signal });
    update();
  });
};

initialiseNorthStarNavigation();
document.addEventListener('astro:before-swap', destroyNorthStarNavigation);
document.addEventListener('astro:page-load', initialiseNorthStarNavigation);
