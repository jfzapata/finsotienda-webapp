function getElement(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}

function openSideNav() {
  const sideNav: HTMLElement | null = getElement('.sidenav');
  const sideMenuBack: HTMLElement | null = getElement('.sidemenu-back');
  if (sideNav && sideMenuBack) {
    sideNav.style.display = 'inherit';
    sideMenuBack.style.display = 'inherit';
  } else { }
}

function openCart() {
  const cart: HTMLElement | null = getElement('.cart-container');
  const sideMenuBack: HTMLElement | null = getElement('.sidemenu-back');
  if (cart && sideMenuBack) {
    cart.style.display = 'inherit';
    sideMenuBack.style.display = 'inherit';
  } else { }
}

function closeSideNav() {
  const sideNav: HTMLElement | null = getElement('.sidenav');
  const sideMenuBack: HTMLElement | null = getElement('.sidemenu-back');
  if (sideNav && sideMenuBack) {
    sideNav.style.display = 'none';
    sideMenuBack.style.display = 'none';
  } else { }
}

function closeCart() {
  const cart: HTMLElement | null = getElement('.cart-container');
  const sideMenuBack: HTMLElement | null = getElement('.sidemenu-back');
  if (cart && sideMenuBack) {
    cart.style.display = 'none';
    sideMenuBack.style.display = 'none';
  } else { }
}

export {
  openSideNav,
  openCart,
  closeSideNav,
  closeCart
}
