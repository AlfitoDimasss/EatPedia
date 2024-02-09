import { createRecipeItemTemplate } from '../views/templates/template-creator';

const DisplayRecipesPagination = {
  init({ recipes }) {
    const paginationNumbers = document.getElementById('pagination-numbers');
    const recipeContainer = document.getElementById('recipeContainer');
    const paginationLimit = 12;
    const pageCount = Math.ceil(recipes.length / paginationLimit);
    let currentPage;

    const appendPageNumber = (index) => {
      const pageNumber = document.createElement('button');
      pageNumber.className = 'pagination-number';
      pageNumber.innerHTML = index;
      pageNumber.setAttribute('page-index', index);
      if (index === 1) {
        pageNumber.autofocus = true;
      }
      paginationNumbers.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
      paginationNumbers.innerHTML = '';
      for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
      }
    };

    const setCurrentPage = (pageNum) => {
      currentPage = pageNum;
      const prevRange = (pageNum - 1) * paginationLimit;
      const currRange = pageNum * paginationLimit;
      recipeContainer.innerHTML = '';
      recipes.forEach((recipe, index) => {
        if (index >= prevRange && index < currRange) {
          recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
        }
      });
    };

    getPaginationNumbers();
    setCurrentPage(1);

    const paginationNumber = document.querySelectorAll('.pagination-number');
    paginationNumber.forEach((button) => {
      const pageIndex = Number(button.getAttribute('page-index'));
      if (pageIndex) {
        button.addEventListener('click', () => {
          setCurrentPage(pageIndex);
        });
      }
    });
  },
};

export default DisplayRecipesPagination;
