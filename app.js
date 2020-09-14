const button = document.getElementById('button');

// Event Listener
button.addEventListener('click', generateQuote);

// Generate Quote

function generateQuote() {
  const randomQuote = Math.floor(Math.random() * 5);
  let quote = document.getElementById('quote');

  switch (randomQuote) {
    case 0:
      return quote.innerHTML = 'May the Force be with you.';
      break;
    case 1:
      return quote.innerHTML = 'Carpe diem.';
      break;
    case 2:
      return quote.innerHTML = 'My mama always said life was like a box of chocolates.';
      break;
    case 3:
      return quote.innerHTML = 'My precious.';
      break;
    case 4:
      return quote.innerHTML = 'Houston, we have a problem.';
      break;
  }

  // document.getElementById('quote').innerHTML = randomQuote;

}