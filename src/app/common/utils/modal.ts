function getModal(id: string) {
  try {
    const modal = document.getElementById(id);
    if (!modal) {
      throw new Error('No se encontró el modal');
    }
    return modal;
  } catch (error) {
    throw error;
  }
}

function getModalCloseElements(modal: HTMLElement) {
  try {
    return modal.querySelectorAll('[data-close=""]');
  } catch (error) {
    throw error;
  }
}

function closeModal(target: HTMLElement | string) {
  try {
    var modal;
    if (typeof target === 'string') {
      modal = getModal(target);
    } else {
      modal = target;
    }
    modal.style.display = 'none';
    document.body.style.overflow = 'inherit';
  } catch (error) {
    console.log(error);
  }
}

function onCloseElementClick(modal: HTMLElement) {
  return function () {
    closeModal(modal);
  }
}

function addModalCloseListeners(modal: HTMLElement) {
  try {
    const closeElements = getModalCloseElements(modal);
    console.log(closeElements);
    Array.from(closeElements).forEach(ce => {
      ce.addEventListener('click', onCloseElementClick(modal));
      ce.setAttribute('data-close', 'ready');
    });
  } catch (error) {
    console.log(error);
  }
}

function openModal(target: string) {
  try {
    const modal = getModal(target);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    addModalCloseListeners(modal);
  } catch (error) {
    console.log(error);
  }
}

export {
  openModal,
  closeModal
}
