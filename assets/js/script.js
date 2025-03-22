'use strict';

// Modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Close modal function
const closeModal = () => modal.classList.add('closed');

// Modal event listeners
modalCloseOverlay.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

// Notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Close toast
toastCloseBtn.addEventListener('click', () => notificationToast.classList.add('closed'));

// Mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// Open and close mobile menu
mobileMenuOpenBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });
  
  mobileMenuCloseBtn[i].addEventListener('click', () => {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  });
});

// Accordion functionality
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

accordionBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const isActive = btn.nextElementSibling.classList.contains('active');
    
    accordion.forEach((acc, j) => {
      if (!isActive && accordion[j].classList.contains('active')) {
        accordion[j].classList.remove('active');
        accordionBtn[j].classList.remove('active');
      }
    });

    btn.nextElementSibling.classList.toggle('active');
    btn.classList.toggle('active');
  });
});
