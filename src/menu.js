import {content} from './load.js' 

function makeHeader (name){
    const header = document.createElement('h1')
    header.innerText=name
    return header
}

function menuItem (name,description,price,vegan){
    const item = document.createElement('div');
    item.classList.add('menu-item')


    const text = document.createElement('div');
    text.classList.add('text')
    const title = document.createElement('h1');
    title.innerText = name;
    if(vegan){
        title.classList.add('vegan')
    }
    const desc = document.createElement('p');
    desc.innerText = description;
    text.append(title)
    text.append(desc)

    const prc = document.createElement('span');
    prc.classList.add('price')
    prc.innerText='$'+price;

    item.append(text)
    item.append(prc)

    return item;

}


export default function loadMenu() {
const menu = document.createElement('div');
menu.id= 'menu';


menu.append(makeHeader('Sandwiches'));
const sandwiches = document.createElement('div');
sandwiches.append(menuItem("Classic BLT","A classic sandwich with crispy bacon, lettuce, and juicy tomatoes.",5.99,false));
sandwiches.append(menuItem("Turkey Avocado Wrap","Roasted turkey and fresh avocado wrapped in a tortilla.",6.49,false));
sandwiches.append(menuItem("Grilled Veggie Panini","Grilled zucchini, eggplant, bell peppers, and mozzarella cheese pressed in ciabatta bread.",6.99,false));
sandwiches.append(menuItem("Hummus & Veggie Sandwich","A vegan sandwich with homemade hummus and fresh veggies.",5.99,true));
sandwiches.append(menuItem("Chicken Club","Grilled chicken, bacon, lettuce, tomato, and mayo on toasted bread.",7.49,false));
sandwiches.append(menuItem("Italian Sub","Genoa salami, ham, pepperoni, provolone cheese, and Italian dressing on a sub roll.",6.99,false));
menu.append(sandwiches)

menu.append(makeHeader('Desserts'));
const desserts = document.createElement('div');
desserts.append(menuItem("Tiramisu", "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.", 6.99, false));
desserts.append(menuItem("Vegan Chocolate Cake", "A rich and moist chocolate cake made without any animal products.", 5.49, true));
desserts.append(menuItem("Strawberry Shortcake", "A delightful dessert made with layers of fluffy sponge cake, fresh strawberries, and whipped cream.", 4.99, false));
desserts.append(menuItem("Key Lime Pie", "A tangy and creamy pie made with fresh key lime juice and a graham cracker crust.", 5.49, false));
desserts.append(menuItem("Vegan Coconut Panna Cotta", "A vegan twist on the classic Italian dessert, made with coconut milk and topped with fruit compote.", 6.99, true));
desserts.append(menuItem("Apple Crisp", "A warm and comforting dessert made with baked apples and a crunchy oat topping.", 4.49, false));
desserts.append(menuItem("Vegan Lemon Bars", "Zesty lemon bars with a buttery shortbread crust, made without eggs or dairy.", 5.99, true));
desserts.append(menuItem("Chocolate Mousse", "A decadent and airy chocolate mousse topped with whipped cream.", 4.49, false));
menu.append(desserts)

menu.append(makeHeader('Drinks'));
const drinks = document.createElement('div');
drinks.append(menuItem("Espresso", "A strong and concentrated shot of coffee.", 2.49, true));
drinks.append(menuItem("Cappuccino", "Espresso with steamed milk and a frothy milk foam.", 4.49, false));
drinks.append(menuItem("Mocha", "Espresso with steamed milk, chocolate, and whipped cream.", 4.99, false));
drinks.append(menuItem("Almond Milk Latte", "A latte made with espresso and creamy almond milk.", 5.49, true));
drinks.append(menuItem("Affogato", "A delightful dessert of espresso poured over vanilla ice cream.", 4.99, false));
drinks.append(menuItem("Iced Coffee", "Chilled coffee served over ice with optional sweeteners and milk.", 3.49, false));
menu.append(drinks)


content.append(menu);
}
