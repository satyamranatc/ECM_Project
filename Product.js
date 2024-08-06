const productGrid = document.getElementById('ProductGrid');


function Display(data)
{
    data.map((e)=>{
        let div = document.createElement('div');
        div.className = 'ProductCard';
        div.innerHTML = `
            <img src="${e.image}" alt="${e.title}">
            <h2>${e.title}</h2>
            <h3>$${e.price}</h3>
            <p>$${e.description}</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
        `;
        productGrid.appendChild(div);
    })
}


async function GetData()
{
    let Res = await fetch("https://fakestoreapi.com/products");
    let data = await Res.json();
    console.log(data)
    Display(data);
}

GetData();