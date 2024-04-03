const deletButtons= document.getElementsByClassName('deletInCart');

for (const button of deletButtons) {
    
    button.addEventListener('click', async (e)=> {

        const findCart= await fetch(`/api/session/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        const responseUser = await findCart.json();
    
        await fetch(`/api/carts/${responseUser.result}/product/${button.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }});

          return  location.reload();
    });
}