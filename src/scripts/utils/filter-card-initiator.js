const FilterCardInitiator = {
  init({ toggle, card, closeBtn }) {
    toggle.onclick = () => {
      card.style.display = 'block';
    };

    closeBtn.onclick = () => {
      card.style.display = 'none';
    };
  },
};

export default FilterCardInitiator;
