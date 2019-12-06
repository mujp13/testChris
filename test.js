$(function() {
  $('#js-shopping-list-form').submit(event => {
    // stop the default form submission behavior
    event.preventDefault();

    const shoppingItem = $(event.currentTarget)
      .find('input[name="shopping-list-entry"]')
      .val();
    console.log(shoppingItem);

    //add item in shopping list
    $('.shopping-list').append(
      `<li><span class="shopping-item"> ${shoppingItem} </span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
    );

    //remove items from shopping list
    $(document).on('click', 'shipping-item-delete', function() {
      this.closest('li').remove(); //Both jQuery and Javascript have closest() function. In this case, both this or $(this) work.
      //Find the parent "li" and remove it
    });

    //write completely without jquery (in this case you don't need "$(function)......")
    /*
    document.addEventListener('click', function() {
      if (this.matches('.shopping-item-delete') {
        this.closest("li").remove();
      }
    });
    */

    //Check items
    $(document).on('click', '.shopping-item-toggle', function() {
      $(this)
        .closest('li')
        .find('.shopping-item')
        .toggleClass('shopping-item__checked');
    });
  });
});
