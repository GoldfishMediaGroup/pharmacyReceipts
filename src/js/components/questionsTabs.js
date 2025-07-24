function questionsTabs() {
  const tabsDesk = document.querySelectorAll('.questions__content-tab-box');
  const infoBoxDesk = document.querySelectorAll('.questions__content-info-box');

  tabsDesk.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabsDesk.forEach((innerTab) => {
        innerTab.classList.remove('isActive');
      });

      tab.classList.add('isActive');
      infoBoxDesk.forEach((innerInfoBox) => {
        innerInfoBox.classList.remove('isActive');
      });

      infoBoxDesk[i].classList.add('isActive');
    });
  });

  const accordionItemHeaders = document.querySelectorAll('.questions__accordion-item-header');

  // Функция для открытия элемента аккордеона
  function openAccordionItem(accordionItemHeader) {
    accordionItemHeader.classList.add('isActive');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
  }

  // Функция для закрытия элемента аккордеона
  function closeAccordionItem(accordionItemHeader) {
    accordionItemHeader.classList.remove('isActive');
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    accordionItemBody.style.maxHeight = 0;
  }

  // Инициализация аккордеона
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', () => {
      const currentlyActiveAccordionItemHeader = document.querySelector('.questions__accordion-item-header.isActive');
      if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
        closeAccordionItem(currentlyActiveAccordionItemHeader);
      }
      if (accordionItemHeader.classList.contains('isActive')) {
        closeAccordionItem(accordionItemHeader);
      } else {
        openAccordionItem(accordionItemHeader);
      }
    });
  });

  // Открываем первый элемент аккордеона при загрузке страницы
  if (accordionItemHeaders.length > 0) {
    openAccordionItem(accordionItemHeaders[0]);
  }

  window.addEventListener('resize', () => {
    if (accordionItemHeaders.length > 0) {
      openAccordionItem(document.querySelector('.questions__accordion-item-header.isActive'));
    }
  });
}

export default questionsTabs;
