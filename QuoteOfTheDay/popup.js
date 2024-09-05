document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    function fetchQuote() {
      fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          quoteElement.textContent = `"${data.content}" — ${data.author}`;
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
          quoteElement.textContent = 'Error fetching quote.';
        });
    }
  
    newQuoteButton.addEventListener('click', fetchQuote);
  

    fetchQuote();
  });
  
