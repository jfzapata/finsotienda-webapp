function openSideNav() {
  const sideNav: HTMLElement | null = document.querySelector('.sidenav');
  if (sideNav) {
    sideNav.style.display = 'inherit';
  } else { }
}

function openCart() {
  const cart: HTMLElement | null = document.querySelector('.cart-container');
  if (cart) {
    cart.style.display = 'inherit';
  } else { }
}

function closeSideNav() {
  const sideNav: HTMLElement | null = document.querySelector('.sidenav');
  if (sideNav) {
    sideNav.style.display = 'none';
  } else { }
}

function closeCart() {
  const cart: HTMLElement | null = document.querySelector('.cart-container');
  if (cart) {
    cart.style.display = 'none';
  } else { }
}

export {
  openSideNav,
  openCart,
  closeSideNav,
  closeCart
}
