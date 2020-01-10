function pickACell() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) => {
    cell.addEventListener("click", (event) => {
       if (event.currentTarget.classList.contains('free')) {
         event.currentTarget.classList.remove("free");
        event.currentTarget.classList.add("current");
        event.currentTarget.insertAdjacentHTML('beforeend', '<div>O</div>');
       };
    });
  });
}

export { pickACell };



// const game = {
//   user: '',
//   computer: '',
//   currentPlayer: '',
//   moves: 1,
// };

 // _.sample(cells)
 //  if (compute.classList.contains('free')) {
 //       compute.classList.remove("free");
 //      compute.classList.add("computer");
 //      event.currentTarget.insertAdjacentHTML('beforeend', '<div>X</div>');
 //     };

