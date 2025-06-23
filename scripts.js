function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      if (title.includes(input)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      if (title.includes(input)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
  
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-category');
      const products = document.querySelectorAll('.product');
  
      products.forEach(product => {
        if (selectedCategory === 'todos' || product.getAttribute('data-category') === selectedCategory) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
  