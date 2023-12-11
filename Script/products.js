/*window.addEventListener('DOMContentLoaded', function() {
    const products = [
      {
        name: 'The Birth of Venus',
        image: 'birthofvenus.jpg',
        link: 'https://postimg.cc/ZChPFg7g'
      },
      {
        name: 'Adoration',
        image: '8bde1e1eca475a1ca4911c8f6f0d32af.jpg',
        link: 'https://postimg.cc/jDtXK9yN'
      },
      {
        name: 'Product 3',
        image: 'product3.jpg',
        link: 'https://postimg.cc/ZW8MxpxP'
      },
      {
        name: 'Product 4',
        image: 'product2.jpg',
        link: 'https://postimg.cc/WFHW1nsV'
      },
      {
        name:   'Product 5',
        image:  'product5.jpg',
        link:   'https://postimg.cc/vx5rwLB3'
      },
      {
        name:   'Product 6',
        image:  'product5.jpg',
        link:   'https://postimg.cc/8F3MFnfZ'
      },
      {
        name:   'Product 7',
        image:  'product5.jpg',
        link:   'https://postimg.cc/FfFDbqRm'
      },
      {
        name:   'Product 8',
        image:  'product5.jpg',
        link:   'https://postimg.cc/dhj5yvJ4'
      },
      {
        name:   'Product 9',
        image:  'product5.jpg',
        link:   'https://postimg.cc/DSkNGBLy'
      },
      {
        name:   'Product 10',
        image:  'product5.jpg',
        link:   'https://postimg.cc/Cd2XhFK8'
      },
      {
        name:   'Product 11',
        image:  'product5.jpg',
        link:   'https://postimg.cc/HrYQFMC9'
      },
      {
        name:   'Product 12',
        image:  'product5.jpg',
        link:   'https://postimg.cc/CzDPwkXy'
      },
      {
        name:   'The Rage and Cunning of a Woman Scorned',
        image:  'female rage.jpg',
        link:   'https://postimg.cc/R3vbshgk'
      },
      {
        name:   'Product 14',
        image:  'product5.jpg',
        link:   'https://postimg.cc/LYwDp8V6'
      },
      {
        name:   'Product 15',
        image:  'product5.jpg',
        link:   'https://postimg.cc/bG6LmTDn'
      },
      {
        name:   'Product 16',
        image:  'product5.jpg',
        link:   'https://postimg.cc/p9dJ5FGL'
      },
      {
        name:   'Product 17',
        image:  'product5.jpg',
        link:   'https://postimg.cc/1VVWnqzq'
      },
      {
        name:   'Product 18',
        image:  'product5.jpg',
        link:   'https://postimg.cc/WqZnbc9m'
      },
      {
        name:   'Product 19',
        image:  'product5.jpg',
        link:   'https://postimg.cc/Z0vjL6T9'
      },
      {
        name:   'Product 20',
        image:  'product5.jpg',
        link:   'https://postimg.cc/0rhXgctd'
      },
      {
        name:   'Product 21',
        image:  'product6.jpg',
        link:   'https://postimg.cc/sBKHtz8v'
      },
      {
        name:   'Product 22',
        image:  'product6.jpg',
        link:   'https://postimg.cc/QVFYnRqd'
      },
      {
        name:   'Product 23',
        image:  'product6.jpg',
        link:   'https://postimg.cc/8J5XG3Qw'
      },
      {
        name:   'Product 24',
        image:  'product6.jpg',
        link:   'https://postimg.cc/HrgSnj1r'
      },
      {
        name:   'Product 25',
        image:  'product6.jpg',
        link:   'https://postimg.cc/WdgQYQTk'
      },
      {
        name:   'Product 26',
        image:  'product6.jpg',
        link:   'https://postimg.cc/k66Nfddr'
      }
    ];
  
    let cardContainer = document.querySelector('card-container');
  
    products.forEach(function(product) {
      let card = document.createElement('div');
      card.className = 'card';
  
      let img = document.createElement('img');
      img.src = product.image;
      card.appendChild(img);
  
      let productName = document.createElement('h3');
      productName.textContent = product.name;
      card.appendChild(productName);
  
      let buttonLink = document.createElement('a');
      buttonLink.href = product.link;
      buttonLink.textContent = 'Add to Cart';
      buttonLink.className = 'button-link';
      card.appendChild(buttonLink);
  
      cardContainer.appendChild(card);
    }); */

    window.addEventListener('DOMContentLoaded', function() {
      const products = [
        {
          name: 'The Birth of Venus',
          image: 'birthofvenus.jpg',
          link: 'https://postimg.cc/ZChPFg7g'
        },
        {
          name: 'Adoration',
          image: '8bde1e1eca475a1ca4911c8f6f0d32af.jpg',
          link: 'https://postimg.cc/jDtXK9yN'
        },
        {
          name: 'Product 3',
          image: 'product3.jpg',
          link: 'https://postimg.cc/ZW8MxpxP'
        },
        {
          name: 'Product 4',
          image: 'product2.jpg',
          link: 'https://postimg.cc/WFHW1nsV'
        },
        {
          name:   'Product 5',
          image:  'product5.jpg',
          link:   'https://postimg.cc/vx5rwLB3'
        },
        {
          name:   'Product 6',
          image:  'product5.jpg',
          link:   'https://postimg.cc/8F3MFnfZ'
        },
        {
          name:   'Product 7',
          image:  'product5.jpg',
          link:   'https://postimg.cc/FfFDbqRm'
        },
        {
          name:   'Product 8',
          image:  'product5.jpg',
          link:   'https://postimg.cc/dhj5yvJ4'
        },
        {
          name:   'Product 9',
          image:  'product5.jpg',
          link:   'https://postimg.cc/DSkNGBLy'
        },
        {
          name:   'Product 10',
          image:  'product5.jpg',
          link:   'https://postimg.cc/Cd2XhFK8'
        },
        {
          name:   'Product 11',
          image:  'product5.jpg',
          link:   'https://postimg.cc/HrYQFMC9'
        },
        {
          name:   'Product 12',
          image:  'product5.jpg',
          link:   'https://postimg.cc/CzDPwkXy'
        },
        {
          name:   'The Rage and Cunning of a Woman Scorned',
          image:  'female rage.jpg',
          link:   'https://postimg.cc/R3vbshgk'
        },
        {
          name:   'Product 14',
          image:  'product5.jpg',
          link:   'https://postimg.cc/LYwDp8V6'
        },
        {
          name:   'Product 15',
          image:  'product5.jpg',
          link:   'https://postimg.cc/bG6LmTDn'
        },
        {
          name:   'Product 16',
          image:  'product5.jpg',
          link:   'https://postimg.cc/p9dJ5FGL'
        },
        {
          name:   'Product 17',
          image:  'product5.jpg',
          link:   'https://postimg.cc/1VVWnqzq'
        },
        {
          name:   'Product 18',
          image:  'product5.jpg',
          link:   'https://postimg.cc/WqZnbc9m'
        },
        {
          name:   'Product 19',
          image:  'product5.jpg',
          link:   'https://postimg.cc/Z0vjL6T9'
        },
        {
          name:   'Product 20',
          image:  'product5.jpg',
          link:   'https://postimg.cc/0rhXgctd'
        },
        {
          name:   'Product 21',
          image:  'product6.jpg',
          link:   'https://postimg.cc/sBKHtz8v'
        },
        {
          name:   'Product 22',
          image:  'product6.jpg',
          link:   'https://postimg.cc/QVFYnRqd'
        },
        {
          name:   'Product 23',
          image:  'product6.jpg',
          link:   'https://postimg.cc/8J5XG3Qw'
        },
        {
          name:   'Product 24',
          image:  'product6.jpg',
          link:   'https://postimg.cc/HrgSnj1r'
        },
        {
          name:   'Product 25',
          image:  'product6.jpg',
          link:   'https://postimg.cc/WdgQYQTk'
        },
        {
          name:   'Product 26',
          image:  'product6.jpg',
          link:   'https://postimg.cc/k66Nfddr'
        }
      ];
    
      let cardContainer = document.querySelector('.card-container');
    
      function displayProducts(products) {
        cardContainer.innerHTML = '';
      
        products.forEach(function(product) {
          let card = document.createElement('div');
          card.className = 'card';
      
          let img = new Image();
          img.src = product.image;
          card.appendChild(img);
      
          let productName = document.createElement('h3');
          productName.textContent = product.name;
          card.appendChild(productName);
      
          let buttonLink = document.createElement('a');
          buttonLink.href = product.link;
          buttonLink.textContent = 'Add to Cart';
          buttonLink.className = 'button-link';
          card.appendChild(buttonLink);
      
          cardContainer.appendChild(card);
        });
      }
    
      displayProducts(products);
    
      let sorting = document.querySelector('[data-products-sort]');
      sorting.addEventListener('click', function() {
        try {
          let sortedProducts = products.sort(function(a, b) {
            return a.name.localeCompare(b.name);
          });
          displayProducts(sortedProducts);
        } catch (e) {
          console.error(e);
        }
      });
    
      let searchInput = document.querySelector('[data-search-input]');
      searchInput.addEventListener('input', function() {
        let searchTerm = searchInput.value.toLowerCase();
        let filteredProducts = products.filter(function(product) {
          return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
      });
    });